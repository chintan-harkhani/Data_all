const express = require("express");
const validate = require("../../middlewares/validate");
const { TokenValidation } = require("../../validations");
const { TokenController } = require("../../controllers");
// const auth = require("../../middlewares/auth");

const router = express.Router();

/** Create jsonwebtoken */
router.post(
  "/create-token",
  validate(TokenValidation.generateToken),
  TokenController.generateToken
);

/** Verify token to get user details */
router.get("/verify-token",
//  auth(), 
TokenController.verifyToken);

module.exports = router;
