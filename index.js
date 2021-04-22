import express from "express";
import path from "path";
import fs from "fs";
import ReactDOMServer from "react-dom/server.js";
import React from "react";
import Home from "./home.cjs";
import Footer from "./footer.cjs";
import Header from "./header.cjs";

const app = express();

app.get("/",(req,res) => {
 fs.readFile("./public/index.html","utf-8",(err,data) => {
  if (!err && data) {
  let App = data.replace("<!-- _INITIAL_CONTENT_ -->",`
     <main>
     ${ReactDOMServer.renderToString(<><Header.default /><Home.default /><Footer.default /></>)}
     </main>
`);
res.type("text/html");
res.send(App);
} else {
 res.sendStatus(500);
}
})
});

 app.get("/App.bundle.js",(req,res) => {
 res.sendFile(path.resolve("./dist/App.bundle.js"));
}); 

app.use("/assets/images",express.static("public/images"));

app.use("/assets/styles",express.static("public/styles"));

app.get("*",(req,res) => {
 res.sendStatus(404);
});

app.listen(5000,() => {
 console.log("\x1b[32m%s\x1b[0m","Server is active...");
});
