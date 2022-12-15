import { getFirestore } from "firebase/firestore";
import { initializeApp } from "firebase/app";

// Initialize Firebase
const firebaseConfig = {
  apiKey: "AIzaSyBJZJvR9QwQScT5ZqZHMqtn5Op6BhgPGmI",
  authDomain: "chat-17c89.firebaseapp.com",
  projectId: "chat-17c89",
  storageBucket: "chat-17c89.appspot.com",
  messagingSenderId: "295569657560",
  appId: "1:295569657560:web:454fcb2c18c96738b4d1ad",
  measurementId: "G-N6K88MN4K4",
};
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
