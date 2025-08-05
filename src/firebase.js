// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAHuMAww9LnnqmejJrHGT4MdjX3YUjz7is",
  authDomain: "newdemo-69cf6.firebaseapp.com",
  databaseURL: "https://newdemo-69cf6-default-rtdb.firebaseio.com",
  projectId: "newdemo-69cf6",
  storageBucket: "newdemo-69cf6.firebasestorage.app",
  messagingSenderId: "819696731382",
  appId: "1:819696731382:web:a0dc27d43c0ecfa90ed8d7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

export { db };