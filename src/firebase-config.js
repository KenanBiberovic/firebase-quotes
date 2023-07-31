import { initializeApp } from "firebase/app";
import {
  getFirestore,
  collection,
  getDocs,
  addDoc,
  getDoc,
  doc,
  updateDoc,
  deleteDoc,
} from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBcvJJWOTXY9HR-W14wS-gpj1pN514jpIg",
  authDomain: "quotes-app-cbfa4.firebaseapp.com",
  projectId: "quotes-app-cbfa4",
  storageBucket: "quotes-app-cbfa4.appspot.com",
  messagingSenderId: "99416518798",
  appId: "1:99416518798:web:4f6b05116ddf547adf99df",
  measurementId: "G-S5GKQWZGRV",
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
//
export const getQuotes = async () => {
  const quotesCollection = collection(db, "quotes");
  const quoteResults = await getDocs(quotesCollection);
  const quoteList = quoteResults.docs.map((doc) => {
    const data = doc.data();
    const id = doc.id;
    return { ...data, id: id };
  });
  return quoteList;
};
//
export const getQuoteById = async (id) => {
  const docRef = doc(db, "quotes", id);
  const docSnap = await getDoc(docRef);
  const data = docSnap.data();
  return { ...data, id: id };
};
//
export const likeQuote = async (id, likes) => {
  const docRef = doc(db, "quotes", id);
  return await updateDoc(docRef, { likes: likes });
};
//
export const updateQuoteData = async (id, data) => {
  const docRef = doc(db, "quotes", id);
  return await updateDoc(docRef, data);
};
//
export const deleteQuote = async (id) => {
  const docRef = doc(db, "quotes", id);
  return await deleteDoc(docRef);
};
//
export const addQuote = async (data) => {
  const result = await addDoc(collection(db, "quotes"), data);
  return result;
};
//
export default app;
