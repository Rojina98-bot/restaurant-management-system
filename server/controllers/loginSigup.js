import User from '../models/users.js';

export const LoginOp =async(req,res,next)=>{
    try{
        const email=req.body.email;
        const password=req.body.password;
        const query=await User.findAll({
        where:{
            email:email,
            password:password,
        },
        });
        if(query!==null)
        {
            return res.status(200).json({Status:"Success"});
        }
        else
        {
            return res.status(500).json({Status:"Error"});
        }
    }
    catch(err){
        next(err);
    }
}

export const SignOp=async(req,res,next)=>{
    try{
        const query=await User.create({name:req.body.name,
        address:req.body.address,
        number:req.body.number,
        email:req.body.email,
        password:req.body.password,
        isAdmin:false
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