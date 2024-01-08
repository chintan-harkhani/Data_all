const mongoose = require("mongoose");
//user schema
const userSchema = new mongoose.Schema(
    {
        username: {
            type: String,
            trim: true,
        },
        email: {
            type: String,
            trim: true,
        },
        fullname: {
            type: String,
            trim: true,
        },
        phone_no: {
            type: Number,
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
        user_role : {
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

const User = mongoose.model("user" , userSchema);

module.exports = User;