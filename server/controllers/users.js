import User from '../models/users.js';


export const UserCreate =async(req,res,next)=>{
    const newUser=new User(req.body)
    try{
        const savedUser=await newUser.save()
        res.status(200).json(savedUser)
    }
    catch(err){
       // res.status(500).json(err)
       next(err);
    }
}


export const UserUpdate =async(req,res,next)=>{
    try{
        const UserId=req.params.id;
        const updateData=req.body;
        const affectedRowCount=await User.update(updateData,{
            where:{
                id:UserId},
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
        //res.status(500).json({message:'internal server error'});
        next(err);
    }
}

export const UserDelete =async(req,res,next)=>{
    try{
        const UserId=req.params.id;
        const reply=await User.destroy({
            where:{id:UserId
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
        //res.status(500).json({message:'internal server error'});
        next(err);
    }
}

