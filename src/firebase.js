import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyCN4CwuoFlVnyDDCdxvFDa5qaunORaHV6o",
  authDomain: "campus-cart-dd711.firebaseapp.com",
  projectId: "campus-cart-dd711",
  storageBucket: "campus-cart-dd711.appspot.com",
  messagingSenderId: "179003640652",
  appId: "1:179003640652:web:e6a72ecd38e1a560ad5de9",
};

const app = initializeApp(firebaseConfig);
export const storage = getStorage();
