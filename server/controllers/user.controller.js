const userLogics = require('../services/user.service.js')
const allUserLogics = new userLogics()

const registerNewUser = async(req,res)=>{
    // console.log(req.body)
    try{
        let userExist = await allUserLogics.getEmployeeByMail(req.body.email);
        if(userExist){
            return res.status(409).send({message:"user exit"})
        }
        let newUser = await allUserLogics.registerUser(req.body);
        // console.log(newUser);
         let token = await allUserLogics.createToken(newUser.id);
        //  console.log(token)
        return res.status(201).send({...newUser,token});
    }
    catch(err){
        res.status(500).send({message:err.message})
    }
}

const loginUser = async(req,res)=>{
    try{
        let user = await allUserLogics.getEmployeeByMail(req.body.email);
        let token = await allUserLogics.createToken(user.id);
        // console.log(token)
        res.status(200).send({...user,token})
    }
    catch(err){
        res.status(500).send({message:err.message})
    }
}
module.exports = {registerNewUser,loginUser}