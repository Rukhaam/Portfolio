// firebase.js
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";

// Your Firebase config
const firebaseConfig = {
  apiKey: "AIzaSyAFlScsDxqKE-dp6a7KFB9NG6Vq8br6eiM",
  authDomain: "ecom-project-40b68.firebaseapp.com",
  projectId: "ecom-project-40b68",
  storageBucket: "ecom-project-40b68.appspot.com",
  messagingSenderId: "332582012265",
  appId: "1:332582012265:web:57acae00a6a31bbcd5a9f8",
  measurementId: "G-WJ211DX1EY"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const firestore = getFirestore(app);
export const auth = getAuth(app);

// Google Auth Provider
const provider = new GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });

export const signInWithGoogle = () => signInWithPopup(auth, provider);
