const http = require('http');
const data = require('./data');
http.createServer((req,res)=>{
      res.writeHead(200,{'contant-type':'application\json'})
      res.write(JSON.stringify(data));
      res.end();
}).listen(8000);