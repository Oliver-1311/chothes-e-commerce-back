const express = require('express')
const cors = require('cors')
const dotenv = require('dotenv').config()
const cookieParser = require('cookie-parser')

const connectDB = require('./config/db')
const router = require('./routes')

const app = express()
const PORT = 8080 || process.env.PORT

app.use(cors({
    origin: process.env.FRONTEND_URL || '*',
    credentials: true
}))
app.use(express.json({ limit: '10mb' }))
app.use(cookieParser())

app.use("/api", router)

connectDB().then(()=>{
    app.listen(PORT, ()=>{
        console.log("connect to DB");
        console.log("Server is running in", PORT, " port");    
    })
})