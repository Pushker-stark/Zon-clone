import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyCrhOAfsQZrmSr3Yh2ztxhc6jifs--erx8",
  authDomain: "clone-2a04d.firebaseapp.com",
  projectId: "clone-2a04d",
  storageBucket: "clone-2a04d.appspot.com",
  messagingSenderId: "827565038082",
  appId: "1:827565038082:web:40722ef03d791c4a04251b",
  measurementId: "G-94YXRXZ0CM",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
