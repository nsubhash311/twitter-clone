import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyC3LwpQZaCeuBTh9J4ouK1RXR99LOP7KKU",
    authDomain: "twitter-clone-ninja.firebaseapp.com",
    databaseURL: "https://twitter-clone-ninja.firebaseio.com",
    projectId: "twitter-clone-ninja",
    storageBucket: "twitter-clone-ninja.appspot.com",
    messagingSenderId: "830555311094",
    appId: "1:830555311094:web:a96f1807f0121d5ddcd5d7",
    measurementId: "G-4RD9XGXXB0"
  };

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();

export default db;
