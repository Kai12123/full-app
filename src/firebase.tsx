import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: add auth
// TODO: how to use firebase in react app
// https://firebase.google.com/docs/web/setup#available-libraries
const auth = getAuth();

export const handleSignUp = (event) => {
  event.preventDefault();
  const email = event.target.email.value;
  const password = event.target.password.value;

  createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Signed in
      const user = userCredential.user;
      console.log("🚀 ~ file: firebase.tsx:18 ~ .then ~ user:", user);
      // ...
    })
    .catch((error) => {
      const errorCode = error.code;
      console.log(
        "🚀 ~ file: firebase.tsx:23 ~ handleSignUp ~ errorCode:",
        errorCode
      );
      const errorMessage = error.message;
      console.log(
        "🚀 ~ file: firebase.tsx:25 ~ handleSignUp ~ errorMessage:",
        errorMessage
      );
      // ..
    });
};

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "full-app-22032.firebaseapp.com",
  projectId: "full-app-22032",
  storageBucket: "full-app-22032.appspot.com",
  messagingSenderId: "983204336639",
  appId: "1:983204336639:web:eebdfa09c313f9d60b4dca",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
