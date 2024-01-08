const express =  require("express");
const {categorycontroller} = require("../../controllers");
const {categoryValidation} = require("../../validations");
const validate = require("../../middlewares/validate");
const  routes = express.Router();



 routes.post("/creat-category",
 validate(categoryValidation.creatCategory),
  categorycontroller.createcategory
 );


module.exports =routes;
