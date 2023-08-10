import express from "express";
import mysql from "mysql";
import cors from "cors";
import cookieParser from 'cookie-parser';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import {} from 'dotenv/config'
import {createServer} from 'http';
import dotenv from "dotenv";
import usersRoute from './routes/users.js';
import login from './routes/login.js';
import signup from './routes/signup.js';
dotenv.config()
const app=express();
/*const httpServer=createServer(app);*/
/*const io= new Server(httpServer)*/
/*let user_id;*/
app.use(cors(
   /* {
        origin:["http://localhost:3000/dashboard"],
        credentials:true
    }*/
));//include cors header in the http responses it sends to client and informs client that it is allowed to make requests to your server from different domain
app.use(express.json());//middleware that parses incoming request body if it is in json format and parsed data is available in req.body object of route handler and other middleware functions
app.use(cookieParser());
/*const SSE=require('express-sse');*/
const PORT=8000;


const connection=mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"",
    database:"restaurant management system"
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
/*app.post('/login',(req,res)=>{
    const sql ="SELECT * FROM users Where email=? AND password=?";
    connection.query(sql,[req.body.email,req.body.password],(err,result)=>{
        if(err){
            console.log("error");
            return res.json({Status:"Error", Error:"error while running server"});
        }
        if(result.length>0){
            const user_id=result[0].id
            const secretKey=process.env.SPECIAL_TOKEN;
            const token=jwt.sign({user_id:user_id},secretKey,{expiresIn:'1d'});
            console.log("success");
            return res.json({Status:"Success",token:token,user_id:user_id});
            

        }
        else
        {
            return res.json({Status:"Error", Error:"Incorrect email or password"});
        }
    })
}
)
app.post('/signUp',(req,res)=>{
    const sql="INSERT INTO users (name,address,phone_number,email,password) VALUES (?)" ;
    let values=[req.body.name,req.body.address,req.body.number,req.body.email,req.body.password];
    connection.query(sql,[values],(err,result)=>{
        if(err){
            return res.json({Status:"Error",Error:"error while runnning server"})
        }
        else
        {
            return res.json({Status:"Success"})
        }
    })
})
const authenticateUser=(req,res,next)=>{
    const token=req.headers.Authorization;
    console.log("till here");
    if(!token){
        return res.status(401).json({message:'unauthorized hai'});
    }
    jwt.verify(token.replace('/^Bearer\s/',''),'some-secret-key',(err,decoded)=>{
        if(err){
            return res.status(401).json({message:'unathorized'});
        }
        req.user=decoded;
        next();
    })
}
app.post('/menu',authenticateUser,(req,res)=>{
    const {user_id}=req.user;
    const sql="INSERT INTO orders (order_name,users_id) VALUES(?)";
    let values=[req.body.value,user_id];
    connection.query(sql,[values],(err,result)=>{
        if(err){
            return res.json({Status:"Error",Error:"error while runnning server"})
        }
        else{
            console.log('success');
            return res.json({Status:"Success"})
        }
    })
})

app.get('/dashboard',authenticateUser,(req,res)=>{
    const {user_id}=req.user;
    const sql="SELECT * FROM orders Where users_id=(?)";
    let id=[user_id];
    connection.query(sql,[id],(err,result)=>{
        if(err){
            console.log("error");
            return res.json({Status:"Error", Error:"error while running server"});
        }
        if(result.length>0){
            console.log("successis true");

            return res.json({Status:"Success",Result:result});
            
           

        }
    })
})*/
app.use("/users",usersRoute);
app.use("/login",login);
app.use("/signUp",signup);

app.use((err,req,res,next)=>{
    const errorStatus=err.status||500;
    const errorMessage=err.message||"Error";
    return res.status(errorStatus.json({
        success:false,
        status:errorStatus,
        message:errorMessage
    }))
})

app.listen(PORT,()=>{
    console.log(`server is running on port ${PORT}`);
});