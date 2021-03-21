import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyAt2dum-lVGz_1PzeqcoBWlh-VcCTT4tyU",
  authDomain: "facebook-messenger-clone-48c21.firebaseapp.com",
  projectId: "facebook-messenger-clone-48c21",
  storageBucket: "facebook-messenger-clone-48c21.appspot.com",
  messagingSenderId: "936520855305",
  appId: "1:936520855305:web:e752e3869b9e8678dd2dd8",
  measurementId: "G-MCTVTK690X",
});

const db = firebaseApp.firestore();

export default db;
