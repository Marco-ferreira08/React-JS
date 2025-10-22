// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCwn8-zeUFKjhv9le4OgtK1QMFpFAwjQ4M",
  authDomain: "pf-react-todo-list.firebaseapp.com",
  projectId: "pf-react-todo-list",
  storageBucket: "pf-react-todo-list.appspot.com",
  messagingSenderId: "996802205337",
  appId: "1:996802205337:web:a06077104ab4041ffb0a08"
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);
const db = getFirestore(firebaseApp);
const auth = getAuth(firebaseApp);

export {db,auth};