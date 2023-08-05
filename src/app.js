const express = require("express");
const morgan = require('morgan')
const createError = require('http-errors')
const bodyParser = require('body-parser')
const app = express();
const userRouter = require('./routers/user.Route');

app.use(morgan("dev"))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}))

app.use('/api/users',userRouter)
app.get('/test',(req,res)=>{
    res.send("Server is running")
})

// client error handling
app.use((req,res,next)=>{
    next(createError(404,"Route Not Found"))
})
// server error handling
app.use((err,req,res,next)=>{
    return res.status(err.status || 500).json({
        success: false,
        message: err.message
    })
})
module.exports=app