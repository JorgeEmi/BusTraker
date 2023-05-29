import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';
import { initializeApp } from "firebase/app";

export const firebaseConfig = {
  apiKey: "AIzaSyCPCIqpi9DgNNWJO3fS2YGQGkWHo4XlEbw",
  authDomain: "bustracker-e6f0b.firebaseapp.com",
  databaseURL: "https://bustracker-e6f0b-default-rtdb.firebaseio.com",
  projectId: "bustracker-e6f0b",
  storageBucket: "bustracker-e6f0b.appspot.com",
  messagingSenderId: "561049088786",
  appId: "1:561049088786:web:c3f9e2998503778579f9cb",
  measurementId: "G-W8R8L9ZDHZ"
};
// Inicializar Firebase
const app = initializeApp(firebaseConfig);


export default
  firebase;