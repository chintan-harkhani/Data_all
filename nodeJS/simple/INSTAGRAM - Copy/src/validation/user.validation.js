const joi  = require("joi");

//Create User
const Createuser = {
     body : joi.object().keys({
        username : joi.string().trim().min(3).max(30).required(),
        email : joi.string().email().required(),
        fullname:joi.string().trim().pattern(/^[a-zA-Z\s]*$/) .min(2).max(30).required(),
        phone_no: joi.number().integer().min(10 ** 9).max(10 ** 10 - 1).required(),
        password : joi.string().trim() .pattern(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#\$%^&*])/).min(8).required(),
        confirmpassword :joi.string().trim().required(),
        user_role: joi.string().valid('admin', 'user', 'super admin' ).required()
     })
}

module.exports = {
     Createuser
}