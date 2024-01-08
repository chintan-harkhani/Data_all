const { LoginService } = require("../services");
const bcrypt = require("bcrypt");
const moment = require("moment");
const jwt = require("jsonwebtoken");
const jwtSecrectKey = "cdccsvavsvfssbtybnjnu";

const login = async (req, res) => {
    try {
        // validation;
        const { email, password , role} = req.body;

        const findUser = await LoginService.FindEmail({ email });
        console.log(findUser);
        if (!findUser) throw Error("User not found");

        const ConformPassword = await bcrypt.compare(password, findUser.password);
        if (!ConformPassword) throw Error("Incorrect password");

        let option = {
            email,
            role: findUser.role,
            exp: moment().add(1, "days").unix(),
        };

        let token;
        if (findUser && ConformPassword) {
            token = await jwt.sign(option, jwtSecrectKey);
        }

        let data;
        if (token) {
            data = await LoginService.UserUpdate(findUser._id, token);
        }

        res.status(200).json({
            success: true,
            message: "User Data Login successfully!",
            data: data
        });
    } catch (error) {
        res.status(404).json({ error: error.message });
    }
};

const getAllUser = async (req, res) => {
    try {
      const data = await LoginService.UserList()
      res.status(200).json({ data });
    } catch (error) {
      res.status(404).json({ error: error.message });
    }
  };
module.exports  ={
     login,
     getAllUser
}