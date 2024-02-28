import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';
import 'firebase/compat/firestore'
import 'firebase/compat/storage'



const firebaseConfig = {
  apiKey: "AIzaSyClijOS1IhAUwGA5iUeKf_ccFGNYrsCFPk",
  authDomain: "fir-12ca8.firebaseapp.com",
  projectId: "fir-12ca8",
  storageBucket: "fir-12ca8.appspot.com",
  messagingSenderId: "520983664287",
  appId: "1:520983664287:web:e8e589be3aa5821f08b4aa",
  measurementId: "G-VQ22RV7E46"
};
  

 export default firebase.initializeApp(firebaseConfig);