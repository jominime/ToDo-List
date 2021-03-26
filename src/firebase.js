// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from "firebase";



const firebaseApp = firebase.initializeApp({apiKey: "AIzaSyBAynn1k0Zemen9n8XfK8OoJ_nUddY35ak",
authDomain: "todo-app-ebbc7.firebaseapp.com",
databaseURL: "https://todo-app-ebbc7-default-rtdb.firebaseio.com",
projectId: "todo-app-ebbc7",
storageBucket: "todo-app-ebbc7.appspot.com",
messagingSenderId: "671912767550",
appId: "1:671912767550:web:57710565bdea4bbdade16f",
measurementId: "G-R58Y1N9H3N"});

const db = firebaseApp.firestore();

export {db};