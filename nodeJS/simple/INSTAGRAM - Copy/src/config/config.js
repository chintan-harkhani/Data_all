const dotenv = require("dotenv");
const joi = require("joi");
dotenv.config({ path: './.env' });

const EnvVarsSchema = joi.object({
    PORT : joi.number().default(3000),
    MONGODB_URL:joi.string().trim().description("MongoDB URL"),
    JWT_SECRET_KEY: joi.string().description("JWT Secret Key....").default("This is a JWT secrete_key"),
}).unknown();

const {value: EnvVars ,Error} = EnvVarsSchema.prefs({
    errors:{label:"key"}
}).validate(process.env);

if(Error){
    console.log("Config File Error" + Error);
}

module.exports  = {
    port: EnvVars.PORT,
    mongodb :{
        url : EnvVars.MONGODB_URL,
         options :{
            useNewUrlParser:true,
            useunifiedTopology:true,
         }
    },
    jwt: {
        secret_key: EnvVars.JWT_SECRET_KEY,
    },
}