const jwt = require("jsonwebtoken");
const { token } = require("../models");
const config = require("../config/config");

/**
 * Create token in jsonwebtoken
 * @param {object} reqBody
 * @returns {Promise<>}
 */
const generateToken = async (reqBody) => {
  let payload = {
    ...reqBody,
  };

  return jwt.sign(payload, config.jwt.secret_key);
};

/**
 * Save token in our database
 * @param {object} reqBody
 * @returns {Promise<token>}
 */
const saveToken = async (reqBody) => {
  return token.findOneAndUpdate(
    { user: reqBody.user },
    {
      $set: {
        ...reqBody,
      },
    },
    { new: true, upsert: true }
  );
};

module.exports = {
  generateToken,
  saveToken,
};
