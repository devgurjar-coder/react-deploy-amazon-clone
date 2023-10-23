import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyCsBag7l3dFY-WqMqzUPJG1yRV_OJ6smnI",
  authDomain: "react--clone-506ca.firebaseapp.com",
  projectId: "react--clone-506ca",
  storageBucket: "react--clone-506ca.appspot.com",
  messagingSenderId: "349068540056",
  appId: "1:349068540056:web:8a7b02f60473cf6a0d78ed",
  measurementId: "G-Y785YZSXNQ"
};

const firebaseApp = initializeApp(firebaseConfig);
const auth = getAuth();

export { auth };
