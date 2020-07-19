import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyA7N_zd_OBFXc38Bf8rDiO_FgIpiBWFFIs",
  authDomain: "crown-clothing-b9495.firebaseapp.com",
  databaseURL: "https://crown-clothing-b9495.firebaseio.com",
  projectId: "crown-clothing-b9495",
  storageBucket: "crown-clothing-b9495.appspot.com",
  messagingSenderId: "387755268735",
  appId: "1:387755268735:web:abebffe873983fd0383d4a",
  measurementId: "G-WYXBX5X3Z4",
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
