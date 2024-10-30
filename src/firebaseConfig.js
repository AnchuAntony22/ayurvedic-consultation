import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"; // Ensure this is correctly imported
import { getFirestore } from "firebase/firestore";

// Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyApZpVavYb2amrR3Fs5FfHoKDzBdq6cItU",
  authDomain: "ayurvedic-consultation.firebaseapp.com",
  projectId: "ayurvedic-consultation",
  storageBucket: "ayurvedic-consultation.appspot.com",
  messagingSenderId: "862788280373",
  appId: "1:862788280373:web:338bbce39a8e19cf8c117c",
  measurementId: "G-EV2MSNJTZ7"
};

// Initialize Firebase app
const app = initializeApp(firebaseConfig);

// Initialize Firebase Auth and Firestore
const auth = getAuth(app); // Ensure auth is initialized here
const firestore = getFirestore(app);

// Export initialized Firebase services
export { app, auth, firestore };
