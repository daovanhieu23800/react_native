// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDzvJlWVEyRsM6qvXsq5NkbukVk9j4Bm_s",
  authDomain: "awesomeproject-demo.firebaseapp.com",
  projectId: "awesomeproject-demo",
  storageBucket: "awesomeproject-demo.appspot.com",
  messagingSenderId: "323345224543",
  appId: "1:323345224543:web:c1f4f3ea5624b62519dcea",
  measurementId: "G-H3L17PHWQ2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth(app);