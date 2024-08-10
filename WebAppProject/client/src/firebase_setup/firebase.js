// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore} from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyAYOumXI2x4d24ESKWNVv-nSCp3xsjf-rA",
    authDomain: "webappace16.firebaseapp.com",
    projectId: "webappace16",
    storageBucket: "webappace16.appspot.com",
    messagingSenderId: "10262268990",
    appId: "1:10262268990:web:702c18b6a4b85c79fc556f",
    measurementId: "G-K5D2V8C5QH"
  };

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);