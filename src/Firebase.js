// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAL0bV1fAX_NXjNoWz7Us7Fel3MjW5JgOc",
    authDomain: "myportfolio-1e513.firebaseapp.com",
    projectId: "myportfolio-1e513",
    storageBucket: "myportfolio-1e513.appspot.com",
    messagingSenderId: "820355925484",
    appId: "1:820355925484:web:391553b8c57e5b34f2ecc9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

export { db };
