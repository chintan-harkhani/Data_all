const express = require("express");
const UserRouter = require("./user.router");
const SignUpRouter =require("./signup.router")
const LoginROuter =require("./login.router")

const router = express.Router();

router.use("/user" , UserRouter);
router.use("/signup", SignUpRouter)
router.use("/login", LoginROuter)

module.exports = router;