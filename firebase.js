import firebase from "firebase";
import "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyADUg8z7Axrua0p74kU0Or25rFKXfZSkgY",
  authDomain: "facebook-clone-e350b.firebaseapp.com",
  projectId: "facebook-clone-e350b",
  storageBucket: "facebook-clone-e350b.appspot.com",
  messagingSenderId: "342927425403",
  appId: "1:342927425403:web:c3e26cddbe55d4f41247de",
  measurementId: "G-NYSNCVYLLC",
};

const app = !firebase.apps.length
  ? firebase.initializeApp(firebaseConfig)
  : firebase.app();

const db = app.firestore();
const storage = firebase.storage();

export { db, storage };
