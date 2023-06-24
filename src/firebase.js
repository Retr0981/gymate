import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDhoCNORLyBTcKzpOnXgJ0IR7qjp_IbvRw",
  authDomain: "gymate-1d72e.firebaseapp.com",
  projectId: "gymate-1d72e",
  storageBucket: "gymate-1d72e.appspot.com",
  messagingSenderId: "373674472815",
  appId: "1:373674472815:web:8f8259afbc4a164ff5a49a",
  measurementId: "G-J1G2B57B2D"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
