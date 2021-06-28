import firebase from "firebase";

var firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyBE_EthZupPAufq6gAdDTA3ymwGp2xkWNk",
    authDomain: "lookgood-v1.firebaseapp.com",
    projectId: "lookgood-v1",
    storageBucket: "lookgood-v1.appspot.com",
    messagingSenderId: "179750428644",
    appId: "1:179750428644:web:aca2981d605d4c5c0fb1f1"
});

var db = firebaseApp.firestore();

export { db };