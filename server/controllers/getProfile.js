import User from '../models/users.js';
export const UserGetProfile=async(req,res,next)=>{
    const userId=req.user.id;
    try{
        const user=await User.findOne({
            where:{
               UserID:userId

            },
                attributes:{exclude:['password']}
            
        }

        );
        console.log(userId);
        if(user===null)
        return res.status(500).json({Status:"Error"});
        else
        return res.status(200).json({
            Status:"Success",result:user,UserID:userId
        });
    }
    catch(err){
    next(err);
    }
}