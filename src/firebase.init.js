// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import getAuth from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey:Process.env.REACT_APP_API_KEY,
  authDomain: Process.env.REACT_APP_AUTH_DOMAIN,
  projectId: Process.env.REACT_APP_PROJECT_ID,
  storageBucket: Process.env.REACT_APP_STORAGE_BUCKET,
  messagingSenderId: Process.env.REACT_APP_MESSAGING_SENDER_ID,
  appId: Process.env.REACT_APP_APP_ID
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth();
export default auth;