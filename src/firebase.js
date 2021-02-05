import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyCnk5vNCmHYIE7B0ZwAbZB-Bg1lsUMM88U",
  authDomain: "am-netflix-challenge.firebaseapp.com",
  projectId: "am-netflix-challenge",
  storageBucket: "am-netflix-challenge.appspot.com",
  messagingSenderId: "1038882449162",
  appId: "1:1038882449162:web:d8022b337334dd6c9efcf3",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebaseApp.auth();
const provider = new firebase.auth.FacebookAuthProvider();

export { auth, provider };
export default db;
