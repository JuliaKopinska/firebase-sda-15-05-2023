// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCWkkfHgNsjpy8weffY56i4f2LImNcXcBg",
  authDomain: "fir-sda-15-05-2023.firebaseapp.com",
  projectId: "fir-sda-15-05-2023",
  storageBucket: "fir-sda-15-05-2023.appspot.com",
  messagingSenderId: "597518306231",
  appId: "1:597518306231:web:cf530694cbbbc4f7303632",
  measurementId: "G-K2612LFPS9",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
