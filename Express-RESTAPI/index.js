const   app =require("./app");
const dotenv=require("dotenv");
dotenv.config({path:"./config.env"});


app.listen(process.env.RUNNING_PORT,function(){
    console.log("The server is running on Port ",process.env.RUNNING_PORT,"Successfully");
})