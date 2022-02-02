import React from "react";
import ReactDOM from "react-dom";

const fname = "Ayush";
const sname = "Saxena";
var ln = Math.random() * 10;
//JSX let us use html inside JS but also JS inside HTML inside JS
//by using {JS expression}
//but we can only use JS expression not JS statements inside {}
// like we cannot use if else
ReactDOM.render(
  <div>
    <h1>
      Hello {fname} {sname}!
    </h1>
    <p>Your lucky number is {ln} </p>
  </div>,
  document.getElementById("root")
);
