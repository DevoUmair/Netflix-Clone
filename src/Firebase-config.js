import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth'
import { getFirestore } from 'firebase/firestore'



const firebaseConfig = {
  apiKey: "AIzaSyDYTw27fI6aurwy94_CZthH_Ncu4zb6AUM",
  authDomain: "redux-netflix-e09e6.firebaseapp.com",
  projectId: "redux-netflix-e09e6",
  storageBucket: "redux-netflix-e09e6.appspot.com",
  messagingSenderId: "588717204591",
  appId: "1:588717204591:web:4f3ebd819ddfd2f25a199a"
};


const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

export { app , auth , db }