const express= require('express');
const router = require('./src/routes/api');

const app= express();

//app.js handles middles ware for security
//middleware works before route config
//security middleware import
const rateLimit=require('express-rate-limit');
const helmet=require('helmet')
const mongoSanitize=require('express-mongo-sanitize')
const xss=require('xss-clean')
const hpp=require('hpp')
const cors=require('cors')

//security middleware implement
app.use(cors())
app.use(helmet())
app.use(hpp())
app.use(mongoSanitize())
app.use(xss())

//request rate limiting
const limiter = rateLimit({
    windowMs : 10 * 60 * 1000, // 10 minutes
    max: 100 // limit each IP to 100 requests per windowMs
})
app.use(limiter)

app.use("/api",router)//localhost:5500/api/blogs/create


//app.js handles undefined route handle 
app.use("*", (req, res) => {
    res.status(404).json({
        status: "fail",
        message: "Not found"
    })
})




module.exports = app;