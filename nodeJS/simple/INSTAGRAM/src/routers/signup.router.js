const {  SignUpController} = require("../controllers");
const express = require("express");
const validate = require("../middlewares/validate")
const {SignUpValidation} = require("../validation");
const router = express.Router();

router.post("/create" ,
validate(SignUpValidation.SignUpUser),
SignUpController.register
)

module.exports = router;