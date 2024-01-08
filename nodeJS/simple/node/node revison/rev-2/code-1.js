let http = require('http');
var port = 8;
http.createServer((req,res)=>{
    res.write("hello");
    res.end()
    console.log("ok");
}).listen(port)