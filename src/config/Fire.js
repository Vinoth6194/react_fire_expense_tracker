import firebase from "firebase";
const config = {
  apiKey: "AIzaSyCPQWGBFlOnyyeehXdWFsqzD4Hz0b_sllY",
  authDomain: "react-expense-tracker-525d2.firebaseapp.com",
  projectId: "react-expense-tracker-525d2",
  storageBucket: "react-expense-tracker-525d2.appspot.com",
  messagingSenderId: "981939030321",
  appId: "1:981939030321:web:675190132ec59ff82cc810",
  measurementId: "G-7J8MQJRNHB",
};

const fire = firebase.initializeApp(config);
export default fire;
