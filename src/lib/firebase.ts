// Import the functions you need from the SDKs you need
import { initializeApp, getApps, getApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  projectId: "datawise-iio7e",
  appId: "1:556124794252:web:62dc5700b03d1eb42cbaa9",
  storageBucket: "datawise-iio7e.firebasestorage.app",
  apiKey: "AIzaSyCHm2x0BAMrB8R2KVjbyFapeVJ0x2xMWsA",
  authDomain: "datawise-iio7e.firebaseapp.com",
  messagingSenderId: "556124794252",
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const auth = getAuth(app);

export { app, auth };
