import React from "react";
import { createRoot } from "react-dom/client";

import App from "./App.jsx";

// 
/*
here the first is the tag type 
second is the attribute or props of the elements
third are the childrens which are to be appended to the object or container
*/

const areactElement = React.createElement(// the function which is returned is inturn broken or decomposed like this and gets rendered like this
  "a",
  { href: "https://google.com", target: "_blank" },
  "Visit to google"
);

createRoot(document.getElementById("root"))
.render(
  areactElement
);
