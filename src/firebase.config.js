import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAw-gLhahzKliyPgdS5IqD98h7MfReA3MQ",
  authDomain: "sleeptonight-64dac.firebaseapp.com",
  projectId: "sleeptonight-64dac",
  storageBucket: "sleeptonight-64dac.appspot.com",
  messagingSenderId: "892468109499",
  appId: "1:892468109499:web:e5df085d40b857504c499e",
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore();
