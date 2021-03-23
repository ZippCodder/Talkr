import "core-js";

import React from "react";
import ReactDOM from "react-dom";
import "../public/styles/home.css";
import "../public/styles/styles.css";
import Header from "./components/header.tsx";
import Home from "./components/home.tsx";

const {Component, PureComponent, useState} = React;

const App = ({children}: {children: React.ReactNode}): JSX.Element => {
 return (
 <main>
 {children}
</main>
)
}

const $: JSX.Element = <App><Header /><Home /></App>;

ReactDOM.render($,document.querySelector("#root"));
