const express = require("express");
const {UserController} = require("../controllers");
const validate = require("../middlewares/validate");
const {UserValidation} = require("../validation");
const router = express.Router();

router.post("/create_user" ,
validate(UserValidation.Createuser),
  UserController.CreateUser
)
router.get("/user_list" ,
  UserController.UserList
)
router.get("/user_count" ,
 UserController.UserCount
)
router.get("/user_find/:userId" ,
  UserController.UserId
)
router.delete("user_del/:userId" ,
  UserController.DeleteUser
)
router.put("user_edit" ,
  UserController.UpdateUser
)
module.exports = router;