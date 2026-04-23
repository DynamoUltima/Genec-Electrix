import { 
  collection, 
  getDocs, 
  query, 
  orderBy, 
  limit as firestoreLimit,
  type QueryDocumentSnapshot,
  type DocumentData
} from "firebase/firestore";
import { db } from "./firebase";
import { type SupplyProduct } from "@/components/IndustrialSupply";

const COLLECTION_NAME = "inventory";

/**
 * Maps a Firestore product document to the SupplyProduct interface used in the UI.
 */
function mapProduct(doc: QueryDocumentSnapshot<DocumentData>): SupplyProduct {
  const data = doc.data();
  return {
    id: doc.id,
    title: data.name || "Unnamed Product",
    sku: data.sku || "N/A",
    price: Number(data.price) || 0,
    icon: data.imageUrl || "solar:box-linear", // Use image as icon if available
    description: data.description || "",
    tagStatus: (Number(data.stock) || 0) > 0 ? "In Stock" : "Out of Stock",
    stock: Number(data.stock) || 0,
    imageUrl: data.imageUrl || null,
  };
}

/**
 * Fetches all products from the inventory collection.
 */
export async function getAllProducts(): Promise<SupplyProduct[]> {
  try {
    const productsRef = collection(db, COLLECTION_NAME);
    const snapshot = await getDocs(productsRef);
    return snapshot.docs.map(mapProduct);
  } catch (err) {
    console.error("Error fetching all products:", err);
    return [];
  }
}

/**
 * Fetches a limited number of featured products.
 */
export async function getFeaturedProducts(count: number = 4): Promise<SupplyProduct[]> {
  try {
    const productsRef = collection(db, COLLECTION_NAME);
    const q = query(productsRef, orderBy("createdAt", "desc"), firestoreLimit(count));
    const snapshot = await getDocs(q);
    return snapshot.docs.map(mapProduct);
  } catch (err) {
    console.error("Error fetching featured products:", err);
    return [];
  }
}
