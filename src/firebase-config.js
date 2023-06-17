// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCY5TjlV1o-tosaAOPTnhelzvCe87XJKmk",
  authDomain: "notes-18683.firebaseapp.com",
  projectId: "notes-18683",
  storageBucket: "notes-18683.appspot.com",
  messagingSenderId: "548440611302",
  appId: "1:548440611302:web:06afa70ebc1feae8999e27"
};

// Initialize Firebase
const appFirebase = initializeApp(firebaseConfig);

export default appFirebase