// Import the functions you need from the SDKs you need
import { getApp, getApps, initializeApp } from 'firebase/app'
// import { getAnalytics } from "firebase/analytics";
import { getAuth } from 'firebase/auth'
import { getFirestore } from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyBmADY4NAaYOIvqp3_Akd1YcDtHUAfXyFA',
  authDomain: 'prepwise-2d137.firebaseapp.com',
  projectId: 'prepwise-2d137',
  storageBucket: 'prepwise-2d137.firebasestorage.app',
  messagingSenderId: '302975089836',
  appId: '1:302975089836:web:e6d274a650c7e00c4a3309',
  measurementId: 'G-8T8MREXZ25',
}

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp()
// const analytics = getAnalytics(app);

export const auth = getAuth(app)
export const db = getFirestore(app)
