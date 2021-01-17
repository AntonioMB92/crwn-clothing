import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyB5ImkxD28TftXRp5k1NxzaVZjBmpULvFw",
  authDomain: "crwn-db-cd652.firebaseapp.com",
  projectId: "crwn-db-cd652",
  storageBucket: "crwn-db-cd652.appspot.com",
  messagingSenderId: "77058524986",
  appId: "1:77058524986:web:a252e19779e8f64ab03203",
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;  