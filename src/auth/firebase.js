// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAa8IiyPfhRS-XZ5QI9KQsxQNycZcmVPi0",
  authDomain: "el-auth-e2e9d.firebaseapp.com",
  projectId: "el-auth-e2e9d",
  storageBucket: "el-auth-e2e9d.appspot.com",
  messagingSenderId: "203018592845",
  appId: "1:203018592845:web:588f88ddc8500dad6a7204",
  measurementId: "G-PNST1X1J1D"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
