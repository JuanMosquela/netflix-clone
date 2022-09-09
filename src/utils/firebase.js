// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC8k4dxj7KqGhegw6AKcsfvvcxDDnssO98",
  authDomain: "netflix-clone-695b3.firebaseapp.com",
  databaseURL: "https://netflix-clone-695b3-default-rtdb.firebaseio.com",
  projectId: "netflix-clone-695b3",
  storageBucket: "netflix-clone-695b3.appspot.com",
  messagingSenderId: "371680561360",
  appId: "1:371680561360:web:4be1d35f9eae19855bb6d5",
  measurementId: "G-QC3LSCMCCW"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);