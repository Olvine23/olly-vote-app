import firebase from 'firebase';

const config = {
  apiKey: "AIzaSyDrkI_ZXzZUuwGYwNVwZSU-PUOAstl8U8U",
  databaseURL:"https://lunch-ea333-default-rtdb.firebaseio.com/",
  authDomain: "lunch-ea333.firebaseapp.com",
  projectId: "lunch-ea333",
  storageBucket: "lunch-ea333.appspot.com",
  messagingSenderId: "804955696176",
  appId: "1:804955696176:web:5f0339adadb3881c5e51f5",
};

firebase.initializeApp(config);

export default firebase;

export const database = firebase.database();
export const auth = firebase.auth();
export const googleAuthProvider = new firebase.auth.GoogleAuthProvider();
