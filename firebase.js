// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, connectAuthEmulator } from "firebase/auth"
import { getFirestore, connectFirestoreEmulator } from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCAwvkB1sp2p-VyJ4FNQ3EsVb-YJIC-1lM",
  authDomain: "broncohacks2024.firebaseapp.com",
  projectId: "broncohacks2024",
  storageBucket: "broncohacks2024.appspot.com",
  messagingSenderId: "392226197301",
  appId: "1:392226197301:web:de8e357bc38b2db1f0c67c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

// Emulators
connectAuthEmulator(auth, "http://127.0.0.1:9099");
connectFirestoreEmulator(db, '127.0.0.1', 8080);

export { app, auth, db }