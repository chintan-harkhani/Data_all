// let http = require("http");
// http.createServer((req,res)=>{
//     console.log("hello");
//     res.write("hello");
//     res.end();
// }).listen(8080);

// ==========================================
let http = require("http");
let  fs = require("fs");
console.log("hiiii");
http.createServer((req,res)=>{
    fs.readFile("src/index.html" , (err,data)=>{
        res.writeHead(400,{"content-type": "text/html"});
        res.write(data);
        return res.end();
    })
}).listen(8080 ,()=>{console.log("server is runnning")});