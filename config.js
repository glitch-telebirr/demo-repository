// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDpPbpRizhxZVZzWEGYU2_j393gomy_lao",
  authDomain: "telebirr-playstore.firebaseapp.com",
  databaseURL: "https://telebirr-playstore-default-rtdb.firebaseio.com",
  projectId: "telebirr-playstore",
  storageBucket: "telebirr-playstore.appspot.com",
  messagingSenderId: "537049986268",
  appId: "1:537049986268:web:d5f5e5f7434bcf599f3019",
  measurementId: "G-L1QT9EL642"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
