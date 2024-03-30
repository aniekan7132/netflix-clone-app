// import firebase from "firebase";
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAp-O2DGMDFd9PFjpOPmRc4TkPuxTB6zNM",
  authDomain: "netflix-clone-78c9b.firebaseapp.com",
  projectId: "netflix-clone-78c9b",
  storageBucket: "netflix-clone-78c9b.appspot.com",
  messagingSenderId: "478031589830",
  appId: "1:478031589830:web:144bc6858b15922c25c2c7",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

export { auth };
export default db;
