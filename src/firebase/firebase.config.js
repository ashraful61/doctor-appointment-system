// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.REACT_APP_apiKey,
  authDomain: process.env.REACT_APP_authDomain,
  projectId: process.env.REACT_APP_projectId,
  storageBucket: process.env.REACT_APP_storageBucket,
  messagingSenderId: process.env.REACT_APP_messagingSenderId,
  appId: process.env.REACT_APP_appId,

  //   apiKey: "AIzaSyCwAeQjNwfgbm5Y77v2kWR-clp5S0QP1zE",
  // authDomain: "doctor-appointment-syste-52a75.firebaseapp.com",
  // projectId: "doctor-appointment-syste-52a75",
  // storageBucket: "doctor-appointment-syste-52a75.appspot.com",
  // messagingSenderId: "316439017127",
  // appId: "1:316439017127:web:3e3b80b5c62a31d0a80d82"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;