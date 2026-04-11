import {
  collection,
  query,
  where,
  orderBy,
  getDocs,
  doc,
  getDoc,
  QueryDocumentSnapshot,
} from "firebase/firestore";
import { db } from "./firebase";

// ─── Types ────────────────────────────────────────────────────────────────────

export interface ProjectStat {
  label: string;
  value: string;
  unit?: string;
}

export interface Project {
  id: string;
  name: string;
  description: string;
  category: string;
  location?: string;
  tags: string[];
  size: "featured" | "standard";
  coverImageUrl?: string;
  stats: ProjectStat[];
  status: "published" | "draft";
  order: number;
  createdAt: Date;
  updatedAt: Date;
}

// ─── Helpers ──────────────────────────────────────────────────────────────────

function toProject(snap: QueryDocumentSnapshot): Project {
  const d = snap.data();
  return {
    id: snap.id,
    name: d.name ?? "",
    description: d.description ?? "",
    category: d.category ?? "General",
    location: d.location ?? null,
    tags: d.tags ?? [],
    size: d.size ?? "standard",
    coverImageUrl: d.coverImageUrl ?? null,
    stats: d.stats ?? [],
    status: d.status ?? "draft",
    order: d.order ?? 0,
    createdAt: d.createdAt?.toDate?.() ?? new Date(),
    updatedAt: d.updatedAt?.toDate?.() ?? new Date(),
  };
}

// ─── Queries ──────────────────────────────────────────────────────────────────

/** Fetch all published projects (used by public site). */
export async function getPublishedProjects(): Promise<Project[]> {
  const q = query(
    collection(db, "projects"),
    where("status", "==", "published"),
    orderBy("order", "asc")
  );
  const snap = await getDocs(q);
  return snap.docs.map(toProject);
}

/** Fetch a single project by ID. */
export async function getProjectById(id: string): Promise<Project | null> {
  const snap = await getDoc(doc(db, "projects", id));
  if (!snap.exists()) return null;
  return toProject(snap as QueryDocumentSnapshot);
}
