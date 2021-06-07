import React from "react";
import ReactDOM from "react-dom";
import classes from "./mystyles.scss";
import image from "./content/logo_1.png";

ReactDOM.render(
  <div className={classes.container}>
    <div className={classes.titleBackground}>
      Hello from React Dom
      <div id="imgContainer"></div>
    </div>
  </div>,
  document.getElementById("root")
);

const img = document.createElement("img");
img.src = image;
document.getElementById("imgContainer").appendChild(img);

console.log(`Api base: ${process.env.API_BASE}`);
