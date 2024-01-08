const {SignUpModel} = require("../models");


const createUser = async (body) => {
    return await SignUpModel.create(body)
};

const FindEmail = async (email) => {
    return await SignUpModel.findOne(email );
};
module.exports = {
       createUser,
       FindEmail
}