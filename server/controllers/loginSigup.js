import User from '../models/users.js';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
export const LoginOp =async(req,res,next)=>{
    try{
        let isPasswordCorrect=false;
        const email=req.body.email;
        const password=req.body.password;
        const query=await User.findOne({
        where:{
            UserEmail:email,
            
        },
        });
        if(query!==null){
        isPasswordCorrect=await bcrypt.compare(password,query.UserPassword);}
        console.log(isPasswordCorrect);

        if(query===null || !isPasswordCorrect)
        {
            return res.json({Status:"Error", Error:"Wrong Password or Email"});
        }

        else
        
        {
            const token=jwt.sign({id:query.UserID,isAdmin:query.isAdmin},process.env.JWT,{expiresIn:'1d'});
            return res.cookie("access_token",token,{httpOnly:true,}).status(200).json({Status:"Success"});
          
        }
    }
    catch(err){
    next(err);
    }
}

export const SignOp=async(req,res,next)=>{
    try{
        const salt=bcrypt.genSaltSync(10);
        const hash=bcrypt.hashSync(req.body.password,salt);
        const query=await User.create({UserName:req.body.name,
        UserAddress:req.body.address,
        UserNumber:req.body.number,
        UserEmail:req.body.email,
        UserPassword:hash,
        isAdmin:req.body.isAdmin
    });
        console.log(query);
        if(query===null){
            return res.status(500).json({Status:"error"});
        }
        else{
            return res.status(200).json({Status:"Success"});
        }
    }
    catch(err){
        next(err);
    }
}