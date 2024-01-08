const express = require('express');
const http = require('http');
const {connectdb} = require("./db/dbconnection");
const config = require("./config/config");

let app = express();

http.createServer(app).listen(config.port,()=>{
    console.log("server listning port number 3000!");
})

connectdb();