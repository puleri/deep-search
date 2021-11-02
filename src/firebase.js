import firebase from 'firebase';
import "firebase/auth";

var firebaseConfig = {
  apiKey: "AIzaSyBntsgcQzUIudXTR2HKvSC3DQJEKU34PX8",
  authDomain: "deep-search-93a91.firebaseapp.com",
  projectId: "deep-search-93a91",
  storageBucket: "deep-search-93a91.appspot.com",
  messagingSenderId: "185439698276",
  appId: "1:185439698276:web:e512b749ebf07e82710e71"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export { firebase }
