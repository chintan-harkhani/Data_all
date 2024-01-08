// let http = require("http");
// http.createServer((req,res)=>{
//     console.log("hello");
//     res.write("hello");
//     res.end();
// }).listen(8080);

// ==========================================
// let http = require("http");
// let  fs = require("fs");
// console.log("hiiii");
// http.createServer((req,res)=>{
//     fs.readFile("src/index.html" , (err,data)=>{
//         res.writeHead(400,{"content-type": "text/html"});
//         res.write(data);
//         return res.end();
//     })
// }).listen(8080 ,()=>{console.log("server is runnning");});
// let express = require('express');
// const app = express();
// // const port = 8080;
// app.get('/', (req, res) => {
//    res.send('Hello!');
//  });

    
// app.listen(2000);
// const express = require('express');

// const app = express();
// const port = 3000;

// // Define a route
// app.get('/', (req, res) => {
//   res.send('Hello, World!');
// });

// // Start the server
// app.listen(port, () => {
//   console.log(`Server running at http://localhost:${port}/`);
// });

let express = require("express");
let app = express();
app.listen(8000,()=>{
    console.log("server is runnnig");
});