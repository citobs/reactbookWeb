import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyD3sAPqVUMzlfXkXtPAhq_7cG3Su6GSF9A",
  authDomain: "book-app-b44b4.firebaseapp.com",
  projectId: "book-app-b44b4",
  storageBucket: "book-app-b44b4.appspot.com",
  messagingSenderId: "712915026178",
  appId: "1:712915026178:web:cf1339eeea33367f47c21b",
  measurementId: "G-XV5P9SKVL0",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();

export default db;
