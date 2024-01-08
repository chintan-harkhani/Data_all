const { UserModel } = require("../models");

//create user
const CreateUser = async (reqBody) => {
    return UserModel.create(reqBody);
};
//find user
const UserList = async (req, res) => {
    return UserModel.find();
};
//find One
const FindEmail = async (email) => {
    return UserModel.findOne({ email });
};
//count user
const UserCount = async (req, res) => {
    return UserModel.find().count();
};
//find one user
const FindId = async (userId) => {
    return UserModel.findById(userId);
};
//delete user
const DeleteUser = async (userId) => {
    return UserModel.findByIdAndDelete(userId);
};
//updaete User
const UpdateUser =async (userId , updateBody )=>{
     return UserModel.findByIdAndUpdate(userId , {$set : updateBody})
}



//module export
module.exports = {
     CreateUser,
     UserCount,
     UserList,
     FindEmail,
     FindId,
     DeleteUser,
     UpdateUser
}