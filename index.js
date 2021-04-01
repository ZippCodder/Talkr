const express = require("express");
const path = require("path");
const app = express();

app.get("/",(req,res) => {
 res.sendFile(path.resolve("./public/index.html"));
});

app.get("/App.bundle.js",(req,res) => {
 res.sendFile(path.resolve("./dist/App.bundle.js"));
});

app.get("*",(req,res) => {
 res.sendStatus(404);
});

app.listen(5000,() => {
 console.log("\x1b[20m\x1b[0m","Server is active...");
});
