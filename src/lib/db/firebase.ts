import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyDEwy8c6ypwheHjoY-BtJLaiQb3frPksTA",
  authDomain: "ietp-backend.firebaseapp.com",
  databaseURL: "https://ietp-backend-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "ietp-backend",
  storageBucket: "ietp-backend.appspot.com",
  messagingSenderId: "268569005838",
  appId: "1:268569005838:web:0be704f5cb4bf6742a515f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getDatabase(app)