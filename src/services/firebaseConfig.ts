// src/services/firebaseConfig.ts
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBIpbdoRoeg5jWaV9UqqXyKZHdjgycxDsQ",
  authDomain: "sistemaclinica-bd046.firebaseapp.com",
  projectId: "sistemaclinica-bd046",
  storageBucket: "sistemaclinica-bd046.appspot.com",
  messagingSenderId: "803089847060",
  appId: "1:803089847060:web:e66004a0d31e22ce2ae801"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
