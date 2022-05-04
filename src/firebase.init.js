// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth" ;
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCKwpUN7KmDlS21FZhEqxnF81rgRebZsSw",
  authDomain: "deponic-62e80.firebaseapp.com",
  projectId: "deponic-62e80",
  storageBucket: "deponic-62e80.appspot.com",
  messagingSenderId: "856412438991",
  appId: "1:856412438991:web:b1c7e3108be40fddc1d2b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth=getAuth(app);

 export default auth ;
