import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getDatabase } from "firebase/database";
const firebaseConfig = {
  apiKey: "AIzaSyAsukDwajqmzrkCMtVQkG6yJX1Iqj0xTv4",
  authDomain: "chat-app-cit.firebaseapp.com",
  projectId: "chat-app-cit",
  storageBucket: "chat-app-cit.appspot.com",
  messagingSenderId: "345341296020",
  appId: "1:345341296020:web:7f5d3630726c14c444a381",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth();
const realtime__db = getDatabase();
export { app, auth, realtime__db };
