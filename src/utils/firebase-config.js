import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth'

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


const app = initializeApp(firebaseConfig);
export const firebaseAuth = getAuth(app)