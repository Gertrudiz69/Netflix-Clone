import firebase from "firebase/compat/app";
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyC8ie-4lKYR-4Dc3ZySFXp4iSCjLfzm1Yk",
  authDomain: "netflix-clone-7fdee.firebaseapp.com",
  projectId: "netflix-clone-7fdee",
  storageBucket: "netflix-clone-7fdee.appspot.com",
  messagingSenderId: "225608245014",
  appId: "1:225608245014:web:bd78c257f37a6286677a37"
};

const firebaseApp = firebase.initializeApp(firebaseConfig)
const db = firebaseApp.firestore()
const auth = firebase.auth()

export { auth }
export default db