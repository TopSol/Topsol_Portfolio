// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";



// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCYBqCuFRn5Shq2tY3hXa2JyVSIvIEQdA0",
  authDomain: "webproject-b3392.firebaseapp.com",
  projectId: "webproject-b3392",
  storageBucket: "webproject-b3392.appspot.com",
  messagingSenderId: "435095279051",
  appId: "1:435095279051:web:27569462d73dadad32124e",
  measurementId: "G-79YZRTP5ZT"

};



// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const db = getFirestore(app);
const firebaseApp = initializeApp(firebaseConfig);
const storage = getStorage(firebaseApp);

