import {initializeApp} from "firebase/app"
import {getFirestore} from "firebase/firestore";
import {getAuth} from "firebase/auth";


const firebaseConfig = {
  apiKey: "AIzaSyBFJT1KU51rqHwNw_I-cd4dabPKH-GKcLM",
  authDomain: "appli-demo-front.firebaseapp.com",
  projectId: "appli-demo-front",
  storageBucket: "appli-demo-front.appspot.com",
  messagingSenderId: "788607955519",
  appId: "1:788607955519:web:f8e00227fa4a13db207e8a",
  measurementId: "G-J2N2R6ELPW"
};

let app;

	app = initializeApp(firebaseConfig)


const db = getFirestore(app);
const auth = getAuth(app);

export { db, auth };