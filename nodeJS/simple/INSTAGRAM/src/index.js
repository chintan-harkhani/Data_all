const express = require("express");
const http = require("http");
const config = require("./config/config");
const {ConnectDB} = require("./db/dbcontions");
const bodyParser = require("body-parser");
const router = require("./routers");
const app = express();

app.use(bodyParser.urlencoded({extended :false}));
/**
 * allow json data from body
 * parse application/json
 */
app.use(bodyParser.json());

//router find
app.use("/v1" , router);
app.use((req,res, next)=>{
     next(new Error("Router Not Found...."));
});
//database connect
ConnectDB();

//create Server
http.createServer(app).listen(config.port , ()=>{
    console.log("Server Is SuucessFully Running.... "+config.port);
})