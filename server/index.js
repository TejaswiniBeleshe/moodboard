const express = require("express")
const app = express();
const cors = require('cors')
const jsonBody = require('body-parser')

require('dotenv').config()

app.use(cors())
app.use(jsonBody.json())

app.listen(3000,()=>{
    console.log('server has started with port 3000')
})
