import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBAsHx3SIrkn_W3Uyapv1E8dUIPhMBrWPc",
  authDomain: "my-new-app-9af13.firebaseapp.com",
  databaseURL: "https://my-new-app-9af13-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "my-new-app-9af13",
  storageBucket: "my-new-app-9af13.appspot.com",
  messagingSenderId: "619094590230",
  appId: "1:619094590230:web:41e1b4a593c673c5f64637",
  measurementId: "G-8EMQ47SWQE"
};

const app = initializeApp(firebaseConfig);

const auth = getAuth();

export { app, auth };