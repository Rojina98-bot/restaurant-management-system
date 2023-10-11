import User from '../models/users.js';
import bcrypt from 'bcrypt';

export const UserCreate =async(req,res,next)=>{
    const {UserName,UserAddress,UserNumber,UserEmail,UserPassword,isAdmin}=req.body;
    const salt=bcrypt.genSaltSync(10);
    const hash=bcrypt.hashSync(UserPassword,salt);
     try{
         const CreateUser=await User.create({
            UserName:UserName,
            UserAddress:UserAddress,
            UserNumber:UserNumber,
            UserEmail:UserEmail,
            UserPassword:hash,
            isAdmin:isAdmin
         })
         
         if(CreateUser===null)
         {
            return res.status(500).json({Status:"Error"})
         }
         else{
            return res.status(200).json({Status:"Success"})}
        }
     catch(err){
        next(err);
     }
 }

export const UserUpdate =async(req,res,next)=>{
    try{
        const userId=req.params.id;
        const updateData=req.body;
        console.log(req.body);
        const affectedRowCount=await User.update(updateData,{
            where:{
                UserID:userId},
                returning :true,
            
        });
        
        if(affectedRowCount===0){
            return res.status(500).json({message:'user not found'});
        }
        else{
        
        return res.json({message:'updated'});
        
       
    }
}

    catch(err){
        next(err);
    }
}

export const UserDelete =async(req,res,next)=>{
    try{
        const UserId=req.params.id;
        const reply=await User.destroy({
            where:{UserID:UserId
            },
        });
        if(reply===0)
        {
            return res.status(500).json({message:'no such data'});
        }
        else
        {
            return res.status(200).json({message:'deleted'});
        }
       
    }
    catch(err)
    {
        next(err);
    }
}
export const UserGet=async(req,res,next)=>{
    const userId=req.params.id;
    try{
        const user=await User.findOne({
            where:{
               UserID:userId

            },
                attributes:{exclude:['password']}
            
        }

        );
        if(user===null)
        return res.status(500).json({Status:"Error"});
        else
        return res.status(200).json({
            Status:"Success",result:user
        });
    }
    catch(err){
    next(err);
    }
}
export const UserGetAll=async(req,res,next)=>{
    try{
        const users=await User.findAll({
            attributes:{exclude:['UserPassword']},
            order:[['UserID','DESC']]
        });
        if(users===null){
            return res.status(500).json({Status:"Error"});
        }
        else
        res.status(200).json({Status:"Success",result:users});
        
    }
    catch(err){
        next(err);
    }
}
