import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyDwxGkAVz88vl5lRa7_5egLFSutLnMuD2o",
  authDomain: "instagram-clone-49460.firebaseapp.com",
  databaseURL: "https://instagram-clone-49460.firebaseio.com",
  projectId: "instagram-clone-49460",
  storageBucket: "instagram-clone-49460.appspot.com",
  messagingSenderId: "897367849503",
  appId: "1:897367849503:web:fa669196d6b84a3513332a"
});

const db = firebaseApp.firestore();
const auth = firebase.auth();
const storage = firebase.storage();

export { db, auth, storage };

//   export default db;
