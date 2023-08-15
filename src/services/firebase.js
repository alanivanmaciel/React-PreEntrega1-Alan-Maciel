import { Category } from "@mui/icons-material";
import { initializeApp } from "firebase/app";
import {
  getFirestore,
  collection,
  getDocs,
  doc,
  getDoc,
  where,
  query,
  addDoc,
} from "firebase/firestore";

const firebaseConfig = {
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: "ecommerce-coder-ruda.firebaseapp.com",
  projectId: process.env.REACT_APP_PROJECT_ID,
  storageBucket: "ecommerce-coder-ruda.appspot.com",
  messagingSenderId: "1097654468186",
  appId: "1:1097654468186:web:118df3fd321076ef21e263",
};

const appFirebase = initializeApp(firebaseConfig);
const db = getFirestore(appFirebase);

async function getData() {
  const productsRef = collection(db, "products");
  const documentsSnapshot = await getDocs(productsRef);
  const documents = documentsSnapshot.docs;
  const docsData = documents.map((item) => ({ ...item.data(), id: item.id }));
  return docsData;
}

async function getDataByID(id) {
  const docRef = doc(db, "products", id);
  const docSnapshot = await getDoc(docRef);

  if (docSnapshot.exists()) {
    return { ...docSnapshot.data(), id: docSnapshot.id };
  } else {
    throw new Error("Producto no encontrado.");
  }
}

async function getCategoryId(categoryId) {
  const productsRef = collection(db, "products");
  const q = query(productsRef, where("category", "==", categoryId));
  const documentsSnapshot = await getDocs(q);
  const documents = documentsSnapshot.docs;

  return documents.map((item) => ({ ...item.data(), id: item.id }));
}

async function createOrder(orderData) {
  const collectionRef = collection(db, "orders");
  const docCreated = await addDoc(collectionRef, orderData);
  return docCreated.id;
}

async function getOrder(id) {
  const docRef = doc(db, "orders", id);
  const docSnapshot = await getDoc(docRef);

  if (docSnapshot.exists()) {
    return { ...docSnapshot.data(), id: docSnapshot.id };
  } else {
    throw new Error("No encontramos ese producto.");
  }
}

export { getData, getDataByID, getCategoryId, createOrder, getOrder };
