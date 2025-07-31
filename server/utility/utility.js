

const mongoose = require('mongoose')

const connectDB = async()=>{
    try{
        await mongoose.connect(process.env.MONGODB_URL)
        console.log('connection made with data base')

    }
    catch(err){
        console.log('Not able to connect with data base')
    }
}
module.exports = connectDB

