const express = require("express")
const app = express();
const cors = require('cors')
const jsonBody = require('body-parser')
const connectDB = require('./utility/utility.js')

require('dotenv').config()

connectDB()

app.use(cors())
app.use(jsonBody.json())

const port = process.env.PORT

app.listen(port,()=>{
    console.log(`server has started with port ${port}`)
})
