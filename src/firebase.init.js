// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {

  apiKey: "AIzaSyBOIjIpavTPSNzMcI5fbkqMu_X-YV3Z55c",
  authDomain: "doctors-portal-3cd4f.firebaseapp.com",
  projectId: "doctors-portal-3cd4f",
  storageBucket: "doctors-portal-3cd4f.appspot.com",
  messagingSenderId: "144696362141",
  appId: "1:144696362141:web:2ae4a74aede80cabda0074"

//   apiKey:process.env.REACT_APP_API_KEY,
//   authDomain: process.env.REACT_APP_AUTH_DOMAIN,
//   projectId: process.env.REACT_APP_PROJECT_ID,
//   storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
//   messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
//   appId: process.env.REACT_APP_APP_ID
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth();
export default auth;

