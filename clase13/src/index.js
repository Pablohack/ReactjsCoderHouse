import React from "react";
import ReactDOM from "react-dom/client";
import { initializeApp } from "firebase/app";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { CartContextProvider } from "./Context/CartContext";

const firebaseConfig = {
  apiKey: "AIzaSyBbFVrRXdIRWgTTBvIE5fCVb_IEaGRY-Rs",
  authDomain: "ecommerce-coder-75c3f.firebaseapp.com",
  projectId: "ecommerce-coder-75c3f",
  storageBucket: "ecommerce-coder-75c3f.appspot.com",
  messagingSenderId: "777431080699",
  appId: "1:777431080699:web:4c30dbfc89f5dcd6649a5e",
  measurementId: "G-C6YQSZ443W",
};

initializeApp(firebaseConfig);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <CartContextProvider>
      <App />
    </CartContextProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
