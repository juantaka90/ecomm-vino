// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"

// Your web app's Firebase configuration
const firebaseConfig = {
apiKey: "AIzaSyAjU82Qo8569cTpIffOr6Rjg4JUhLQ-KtE",
authDomain: "ecomm-vino.firebaseapp.com",
projectId: "ecomm-vino",
storageBucket: "ecomm-vino.appspot.com",
messagingSenderId: "493817595263",
appId: "1:493817595263:web:b7d2d025f942c6e011464a"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export default db;