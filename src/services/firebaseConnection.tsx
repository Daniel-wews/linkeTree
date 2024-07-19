
import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore'
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDkk_mZmNul2w7oL_Nie9BI7VsGzO4TGTA",
  authDomain: "reactlinks-a963c.firebaseapp.com",
  projectId: "reactlinks-a963c",
  storageBucket: "reactlinks-a963c.appspot.com",
  messagingSenderId: "165407613855",
  appId: "1:165407613855:web:b8c1d720538d8050f113aa"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

export { auth, db}