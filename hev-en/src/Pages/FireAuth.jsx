// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBp4xlM8M79zJukbI1d09_3t3esxBSP41I",
  authDomain: "nitya-8ede0.firebaseapp.com",
  projectId: "nitya-8ede0",
  storageBucket: "nitya-8ede0.appspot.com",
  messagingSenderId: "436928714848",
  appId: "1:436928714848:web:9baf01905eca704c058b05"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
