import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

// this will be hidden in an envirnoment variable

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyARo4jXNEm9MTRiJwk2_xsd5Y4b7fg1F4g",
  authDomain: "marathondigitalholdingcomp.firebaseapp.com",
  projectId: "marathondigitalholdingcomp",
  storageBucket: "marathondigitalholdingcomp.appspot.com",
  messagingSenderId: "725046701224",
  appId: "1:725046701224:web:a1ea532bdca9d917b9269d",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const store = getFirestore(app);
export const bucket = getStorage(app);
