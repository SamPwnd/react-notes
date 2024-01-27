import { initializeApp } from "firebase/app";
import { getFirestore, collection } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBwbYWZB9abUIb88aTX4idkyO-Ch-bOkts",
  authDomain: "react-notes-5e52f.firebaseapp.com",
  projectId: "react-notes-5e52f",
  storageBucket: "react-notes-5e52f.appspot.com",
  messagingSenderId: "60376626527",
  appId: "1:60376626527:web:24b05f8ce011637abbf2ea"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const notesCollection = collection(db, "notes");