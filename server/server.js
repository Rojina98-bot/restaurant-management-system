import express from "express";
import mysql from "mysql";
import cors from "cors";
import dotenv from "dotenv/config";
import usersRoute from './routes/users.js';
import category from './routes/category.js';
import login from './routes/login.js';
import signup from './routes/signup.js';
import orderList from './routes/viewOrder.js';
import cookieParser from "cookie-parser";
import order from "./routes/order.js";
import menu from './routes/menu.js';
import count from './routes/count.js';
import getProfile from './routes/getProfile.js';
const app=express();
app.use(cors(
   {
        origin:["http://localhost:3000"],
        credentials:true
    }
));//include cors header in the http responses it sends to client and informs client that it is allowed to make requests to your server from different domain
app.use(express.json());//middleware that parses incoming request body if it is in json format and parsed data is available in req.body object of route handler and other middleware functions
app.use(cookieParser());
const PORT=8000;
const connection=mysql.createConnection({
    host: process.env.HOST,
    user: process.env.NAME,
    password: process.env.PASSWORD,
    database: process.env.DATABASE
});


connection.connect(function(err){
    if(err)
    {
        console.log("error in connection");
    }
    else{
        console.log("connected");
    }
})
connection.on("disconnected",()=>{
    console.log("mysql disconnected");
})
connection.on("connected",()=>{
    console.log("mysql connected");
})

app.use(cookieParser());
app.use("/users",usersRoute);
app.use("/category",category);
app.use("/menu",menu);
app.use("/login",login);
app.use("/signUp",signup);
app.use("/orderList",orderList);
app.use("/order",order);
app.use("/count",count);
app.use("/getProfile",getProfile);
app.use((err,req,res,next)=>{
    const errorStatus=err.status||500;
    const errorMessage=err.message||"Error";
    return res.status(errorStatus).json({
        success:false,
        status:errorStatus,
        message:errorMessage
    })
})

app.listen(PORT,()=>{
    console.log(`server is running on port ${PORT}`);
});