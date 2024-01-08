const { LoginController} = require("../controllers");
const express = require("express");
const router = express.Router();

//login
router.post("/add" ,
LoginController.login
)

//login
router.get("/list" ,
LoginController.getAllUser
)
module.exports = router;