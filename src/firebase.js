import firebase from 'firebase/app'
import 'firebase/storage'

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDJRAb918cenjPs22tRvGdTOb4U0_oj1o4",
    authDomain: "yogarogyaimages.firebaseapp.com",
    databaseURL: "https://yogarogyaimages.firebaseio.com",
    projectId: "yogarogyaimages",
    storageBucket: "yogarogyaimages.appspot.com",
    messagingSenderId: "750035470997",
    appId: "1:750035470997:web:68f8601524e41e62baa99c",
    measurementId: "G-CKTML5KHSS"
  };

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const projectStorage = firebase.storage();


export  {projectStorage}
 