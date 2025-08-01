const {validateRegisterUser,validateLoginUser} = require('../validators/user.validator.js');
const userLogics = require('../services/user.service.js');
const allUserLogics = new userLogics();

const validateRegInfo = async(req,res,next)=>{
    try{
       let {error} = validateRegisterUser.validate(req.body);
       if(error){
        return res.status(400).send({message:error.details[0].message})
       }
       next()
    }
    catch(err){
        res.status(500).send({message:err.message})
    }
}

const validateLogInfo = async(req,res,next)=>{
    console.log(req.body)
    try{
        let {error} = validateLoginUser.validate(req.body);
        console.log(error)
        if(error){
         return res.status(400).send({message:error.details[0].message})
        }
        let userExist = await allUserLogics.getEmployeeByMail(req.body.email);
        if(!userExist){
         return res.status(404).send({message:"user not found"})
 
        }
        let correctpassword = await allUserLogics.validatePassword(req.body.password,userExist.password);
        console.log(correctpassword)
        if(!correctpassword){
         return res.status(401).send({message:"invalid credentials"})
        }
        next()
     }
     catch(err){
         res.status(500).send({message:err.message})
     }
}
module.exports = {validateLogInfo,validateRegInfo}