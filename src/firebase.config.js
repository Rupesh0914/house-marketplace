// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore} from 'firebase/firestore'

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAhgPVu7xO1lZ5Z73obev9aNgj7w3duuZ8",
  authDomain: "house-marketplace-app-a5061.firebaseapp.com",
  projectId: "house-marketplace-app-a5061",
  storageBucket: "house-marketplace-app-a5061.appspot.com",
  messagingSenderId: "236778952357",
  appId: "1:236778952357:web:e05a4b10155033a1175f4c"
};
initializeApp(firebaseConfig)
export const db = getFirestore()