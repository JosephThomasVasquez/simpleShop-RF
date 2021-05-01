import firebase from "firebase/app";
import "firebase/firebase-storage";
import "firebase/firebase-firestore";
import "firebase/auth";

const firebaseConfig = {
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: process.env.REACT_APP_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_PROJECT_ID,
  storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_MESSAGESENDER_ID,
  appId: process.env.REACT_APP_APP_ID,
};
// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);

const auth = app.auth();
const googleProvider = new firebase.auth.GoogleAuthProvider();

const signInWithGoogle = () => {
  auth
    .signInWithPopup(googleProvider)
    .then((res) => {
      console.log(res.user);
    })
    .catch((error) => {
      console.log(error.message);
    });
};



const appStorage = firebase.storage();
const appFirestore = firebase.firestore();
const timestamp = firebase.firestore.FieldValue.serverTimestamp();

export { auth, signInWithGoogle, appStorage, appFirestore, timestamp };
