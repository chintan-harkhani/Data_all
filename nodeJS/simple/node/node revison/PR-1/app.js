let http = require("http");
let port = 3000;
// let data = `
//      <body style="background-color: bisque;">
//          <h1 style="text-align: center;"> HISTORY OF NODE JS</h1>
//      <h2>Node.js is an open source server environment</h2>
//      <h2>Node.js runs on various platforms (Windows, Linux, Unix, Mac OS X, etc.)</h2>
//      <h2>Node.js uses JavaScript on the server</h2>
//      <h2>Node.js uses asynchronous programming!</h2>
//      <h2>Node.js is a very powerful JavaScript-based platform built on Google Chrome's JavaScript V8 Engine.</h2>

//      <body>    
//            `

http.createServer((req, res) => {
    res.end(data);
}).listen(port, () => {
    console.log("Server is Running.... At a port :- " + port);
})
