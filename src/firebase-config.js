import { initializeApp } from "firebase/app";
import { getFirestore } from "@firebase/firestore";

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

export default app;
