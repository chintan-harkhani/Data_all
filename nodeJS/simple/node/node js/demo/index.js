let http =  require("http");
let fs = require('fs');
const port = 8000;
let reshel=(req,res)=>{
          res.writeHead(200,{'contant-type':'text/html'});
           fs.readFile("./abu.html",(err,data)=>{
                 res.write(data);
                 res.end();
        })
}
http.createServer(reshel).listen(port,()=>{
      console.log("Server Is Running ... At port at "+port);
})

