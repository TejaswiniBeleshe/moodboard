import User from "../models/user.model";
const bcrypt = require('bcrypt');
const jwttoken = require('jsonwebtoken');

class userLogics {
     register = async(payload)=>{
        return User.create({...payload,password: await this.hashPassword(payload.password)})
     }

    //  Hash password to secure
     hashPassword = (password)=>{
        return bcrypt.hash(password,10)
     }

    //  validating password text password entered by user and password that hased
     validatePassword = (text,password)=>{
        return bcrypt.compare(text,password)
     }

    //  create token using payload and secret key
     createToken = (payload)=>{
        return jwttoken.sign(payload,process.env.SECRET_KEY)

     }

    //  Verify token -> return payload
     verifyToken=(token)=>{
        return jwttoken.verify(token,process.env.SECRET_KEY)
     }
}

module.exports = userLogics