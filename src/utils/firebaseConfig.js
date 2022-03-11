import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyA03qrq-TYSncrklI121ApqBFzLsZ97N20",
  authDomain: "genkisushi-cdc3e.firebaseapp.com",
  databaseURL: "https://genkisushi-cdc3e-default-rtdb.firebaseio.com",
  projectId: "genkisushi-cdc3e",
  storageBucket: "genkisushi-cdc3e.appspot.com",
  messagingSenderId: "1039026253638",
  appId: "1:1039026253638:web:7f3d859b6261a6ba3bbf47",
  measurementId: "G-F910Z7G2T0"
}

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export default db;