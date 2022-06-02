import firebase from "firebase/compat/app";
import "firebase/compat/database";
import "firebase/compat/auth";

const firebaseConfig = {
  apiKey: "AIzaSyA5eBd7SgeJIQU4-jPos9FUmI-lHUVVr3I",
  authDomain: "fire-base-e513a.firebaseapp.com",
  databaseURL: "https://fire-base-e513a-default-rtdb.firebaseio.com",
  projectId: "fire-base-e513a",
  storageBucket: "fire-base-e513a.appspot.com",
  messagingSenderId: "526241375926",
  appId: "1:526241375926:web:d90dee9958639bb9ea2817",
};

const firebaseDB = firebase.initializeApp(firebaseConfig);
export const db = firebaseDB.database().ref();
export const auth = firebase.auth;
