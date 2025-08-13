// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBZU6Kbp9QvgP4xuwQjozqTjFBx888EdBA",
    authDomain: "z9air-440fe.firebaseapp.com",
    projectId: "z9air-440fe",
    storageBucket: "z9air-440fe.firebasestorage.app",
    messagingSenderId: "603072424844",
    appId: "1:603072424844:web:10a2b8958d115ab6e284a9",
    measurementId: "G-DNK8D1W8XW"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)