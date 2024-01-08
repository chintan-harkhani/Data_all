const joi = require("joi")


const SignUpUser = {
    body :joi.object().keys({
        email :joi.string().email().trim().required(),
        password :joi.string().min(8).max(30).pattern(new RegExp('^(?=.*[A-Za-z])(?=.*\\d)(?=.*[@$!%*#?&])[A-Za-z\\d@$!%*#?&]+$')).required(),
        role  :  joi.string().valid('admin', 'user', 'super admin', 'diliver_boy' ).required(),
        confirmpassword :joi.string().trim().required(),
    })
  };

module.exports ={
     SignUpUser
}