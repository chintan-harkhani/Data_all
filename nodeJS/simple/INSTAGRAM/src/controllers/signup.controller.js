const {SignUpService} =  require("../services");
const bcrypt = require("bcrypt");
const moment = require("moment");
const jwt = require("jsonwebtoken");
const jwtSecrectKey = "cdccsvavsvfssbtybnjnu";


const register = async (req, res) => {
    // validation;
    const { email, password,  confirmpassword , role} = req.body;
    
    if (password !== confirmpassword) {
        return res.send('Password and confirm password do not match.');
      }
    const Password = await bcrypt.hash(password, 8);

    const emailId = await SignUpService.FindEmail({email});
    if (emailId) {
       return res.send("Email Already Created By This  " + email + " , Please Create Ohter email");
    };
    let option = {
        email,
       role,
        exp: moment().add(1, "days").unix(),
    };

    const token = await jwt.sign(option, jwtSecrectKey);

    const filter = {
        email,
        role,
        password: Password,
        token,
    };
    const data = await SignUpService.createUser(filter);
    res.status(200).json({
        success: true,
        message: "User Data Create successfully!",
        data: data
    });
};

module.exports = {
       register
}