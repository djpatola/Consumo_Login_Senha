
import { initializeApp } from "firebase/app";
import {getAuth} from'firebase/auth';
import {getFirestore} from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyDj9SRF4B6u-_zOKMAS4t4LDTycULpMKhs",
  authDomain: "app-login-senha-17bc8.firebaseapp.com",
  projectId: "app-login-senha-17bc8",
  storageBucket: "app-login-senha-17bc8.firebasestorage.app",
  messagingSenderId: "608259912381",
  appId: "1:608259912381:web:fe73f1c8e5ea30744a7dd4"
};
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

export {auth, db};