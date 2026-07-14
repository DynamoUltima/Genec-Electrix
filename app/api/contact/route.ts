import { NextResponse } from "next/server";
import { Resend } from "resend";

// Where submissions are delivered, and the verified sender domain.
const TO_EMAIL = "info@genecelectrix.com";
const FROM_EMAIL = "GENEC Website <noreply@genecelectrix.com>";

function escapeHtml(value: unknown): string {
    return String(value ?? "")
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;")
        .replace(/"/g, "&quot;")
        .replace(/'/g, "&#39;");
}

const LABELS: Record<string, string> = {
    projectType: "Project Type",
    location: "Location",
    budget: "Estimated Budget",
    description: "Description",
    firstName: "First Name",
    lastName: "Last Name",
    company: "Company",
    email: "Email",
    message: "Message",
};

export async function POST(req: Request) {
    let body: Record<string, unknown>;
    try {
        body = await req.json();
    } catch {
        return NextResponse.json({ error: "Invalid request." }, { status: 400 });
    }

    const { type, email } = body as { type?: string; email?: string };

    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
        return NextResponse.json(
            { error: "A valid email address is required." },
            { status: 400 }
        );
    }

    if (!process.env.RESEND_API_KEY) {
        // Misconfiguration — surface clearly in logs, generic message to user.
        console.error("RESEND_API_KEY is not set; cannot send contact email.");
        return NextResponse.json(
            { error: "Email service is not configured yet." },
            { status: 503 }
        );
    }

    const kind = type === "project" ? "Project Request" : "Contact Request";

    const rows = Object.entries(body)
        .filter(([key, value]) => key !== "type" && String(value ?? "").trim() !== "")
        .map(
            ([key, value]) =>
                `<tr>
                    <td style="padding:8px 12px;font-weight:600;color:#0a1f44;vertical-align:top;white-space:nowrap;">${escapeHtml(
                        LABELS[key] ?? key
                    )}</td>
                    <td style="padding:8px 12px;color:#1a1a2e;">${escapeHtml(value)}</td>
                </tr>`
        )
        .join("");

    const html = `
        <div style="font-family:Arial,sans-serif;max-width:600px;margin:0 auto;">
            <h2 style="color:#0a1f44;border-bottom:3px solid #c49a2a;padding-bottom:8px;">
                New ${escapeHtml(kind)}
            </h2>
            <table style="width:100%;border-collapse:collapse;font-size:14px;">
                ${rows}
            </table>
            <p style="color:#6b7280;font-size:12px;margin-top:24px;">
                Sent from the GENEC Electrix website.
            </p>
        </div>
    `;

    try {
        const resend = new Resend(process.env.RESEND_API_KEY);
        const { error } = await resend.emails.send({
            from: FROM_EMAIL,
            to: TO_EMAIL,
            replyTo: email,
            subject: `${kind} from ${escapeHtml((body.firstName as string) || email)}`,
            html,
        });

        if (error) {
            console.error("Resend error:", error);
            return NextResponse.json(
                { error: "Could not send your message. Please try again." },
                { status: 502 }
            );
        }

        return NextResponse.json({ ok: true });
    } catch (err) {
        console.error("Contact route error:", err);
        return NextResponse.json(
            { error: "Something went wrong. Please try again." },
            { status: 500 }
        );
    }
}
