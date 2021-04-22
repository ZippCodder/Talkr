const path = require("path");

module.exports =  {
 devServer: {
  contentBase: "./public",
  port: 5000
 },
 entry: {
 App: "./src/App.tsx"
 },
 output: {
 path: path.resolve(__dirname,"./dist"),
 filename: "[name].bundle.js"
 },
 module: {
   rules: [
     {test: /\.tsx$|\.ts$/,use: [{loader: "babel-loader",options: {plugins: []}},"ts-loader"],exclude: /node_modules/},
     {test: /\.css$/,use: ["style-loader","css-loader"],exclude: /node_modules/},
     {test: /\.svg$/,type: "asset/inline"}
   ]
 }
}
