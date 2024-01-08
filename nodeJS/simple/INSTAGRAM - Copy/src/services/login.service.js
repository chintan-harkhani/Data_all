const {SignUpModel} =require("../models")

const FindEmail = async (email) => {
    return await SignUpModel.findOne(email );
};

const UserUpdate = async (_id, token) => {
    return await SignUpModel.findByIdAndUpdate(
        { _id },
        {
            $set: { token },
        },
        { new: true }
    );
};

const UserList = async (role) => {
    return await SignUpModel.find(role);
};

 module.exports = {
     FindEmail,
     UserUpdate,
     UserList
 }