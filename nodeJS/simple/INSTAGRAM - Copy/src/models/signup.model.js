const mongoose = require("mongoose");
//user schema
const SignUpShcema = new mongoose.Schema(
    {
        email: {
            type: String,
            trim: true,
        },
        password: {
            type: String,
            trim: true,
        },
        confirmpassword:{
            type :String,
            trim :true,
        },
        role : {
            type : String,
            trim : true,
         },
         token: {
            type: String,
          },
          is_active: {
            type: Boolean,
            default: true,
        },
    },
    {
        timestamps: true,
        versionKey: false
    }
)

const signUp = mongoose.model("signUp" , SignUpShcema);

module.exports = signUp ;