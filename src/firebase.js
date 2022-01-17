import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyA0gloGi1km49zWxBw5xHeX5UzjqDhPmpI",
  authDomain: "slack-clone-c34ff.firebaseapp.com",
  projectId: "slack-clone-c34ff",
  storageBucket: "slack-clone-c34ff.appspot.com",
  messagingSenderId: "1015329325607",
  appId: "1:1015329325607:web:d36c2effd650e3a2570402",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider, db };
