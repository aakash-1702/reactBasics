import React from "react"; // for importing the React library
import ReactDOM from "react-dom/client"; // for web applications
import App from "./App.js";

const root = ReactDOM.createRoot(document.getElementById("root")); // creates the root element
root.render(
  <App /> // this app gets called
);

// document.getElementById('root') this is nothing but the root element which is the class name of the index.html's div
