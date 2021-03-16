import React from "react";
import ReactDOM from "react-dom";
import "../public/styles/home.css";
import "../public/styles/styles.css";

const {Component, useState} = React;

const App = ({children}: {children: }) => {
 return (
 <main>
 {children}
</main>
)
}

const $ = <App>{/* Place app components here */}</App>

ReactDOM.render($,document.querySelector("#root"));
