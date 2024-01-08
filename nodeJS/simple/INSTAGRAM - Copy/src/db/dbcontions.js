const mongoose = require("mongoose");
const config = require("../config/config");

const ConnectDB = async () => {
    mongoose.connect(config.mongodb.url , config.mongodb.options)
    .then((data)=>{
         console.log("DataBase SuucessFully Connected......!");
    })
    .catch((Error)=>{
        console.log("DataBase not Connected !!.....", Error);
    });
};

module.exports = {ConnectDB};