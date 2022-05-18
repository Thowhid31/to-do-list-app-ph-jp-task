// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyADvLqykhbR41_iS8vrr8_Ftnd0y3f301s",
  authDomain: "to-do-list-app-c04ed.firebaseapp.com",
  projectId: "to-do-list-app-c04ed",
  storageBucket: "to-do-list-app-c04ed.appspot.com",
  messagingSenderId: "141486703824",
  appId: "1:141486703824:web:a32cb3cd4e934117eccad5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app)

export default auth;