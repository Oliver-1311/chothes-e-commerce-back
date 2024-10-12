const express = require('express')
const cors = require('cors')
const dotenv = require('dotenv').config()
const connectDB = require('./config/db')
const router = require('./routes')

const app = express()
const PORT = 8080 || process.env.PORT

app.use(cors())
app.use(express.json())
app.use("/api", router)

connectDB().then(()=>{
    app.listen(PORT, ()=>{
        console.log("connect to DB");
        console.log("Server is running in", PORT, " port");    
    })
})