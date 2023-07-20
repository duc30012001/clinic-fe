// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDMUwgn8ALz7iKASUzpfCikWVTdaFsJw_o",
  authDomain: "mr-chuong-clinic-website-3691b.firebaseapp.com",
  projectId: "mr-chuong-clinic-website-3691b",
  storageBucket: "mr-chuong-clinic-website-3691b.appspot.com",
  messagingSenderId: "695889336916",
  appId: "1:695889336916:web:2c7b214f4d3e1100e46bc1",
  measurementId: "G-PLFK4DLC3X",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

export const storage = getStorage();
