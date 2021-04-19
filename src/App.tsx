// Main App File

import "core-js";

import React from "react";
import ReactDOM from "react-dom";
import "../public/styles/home.css";
import "../public/styles/styles.css";
import "../public/styles/media.css";
// @ts-ignore
import Header from "./components/header.tsx";
// @ts-ignore
import Home from "./components/home.tsx";
// @ts-ignore
import Footer from "./components/footer.tsx";
import {BrowserRouter,Route} from "react-router-dom";

const {Component, PureComponent, useState} = React;

const App = ({children}: {children: React.ReactNode}): JSX.Element => {
 return (
 <main>
 {children}
</main>
)
}

const $: JSX.Element = <App><Header /><Home /><Footer /></App>;

ReactDOM.hydrate($,document.querySelector("#root"));
