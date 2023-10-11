import jwt from 'jsonwebtoken';
import {createError} from "./error.js";

export const verifyToken=(req,res,next)=>{
    console.log(req.cookies.access_token);
    const token=req.cookies.access_token;
    if(!token)
    {
        return next(createError(401,"you are not authenticated"));
    }
    jwt.verify(token,process.env.JWT,(err,user)=>{
    if(err)
    return next(createError(403,"Token is not valid"));
    console.log(user);
    req.user=user;
    next();
});
};
/*export const verifyToken=(req,res,next)=>{
    const authHeader=req.headers['authorization']
    const token = authHeader && authHeader.split(' ')[1]
    if(token==null)
    return res.status(401)
    jwt.verify(token,process.env.JWT,(err,user)=>{
        if(err )return res.status(403)
        req.user=user
        next()

})
}*/
export const verifyUser=(req,res,next)=>{
    verifyToken(req,res,next,()=>{
        if(req.user.id===req.params.id || req.user.isAdmin){
            next();
        }
        else{
           
            return next(createError(403,"you are not authorized"));
        }
    });
};

export const verifyAdmin=(req,res,next)=>{
    verifyToken(req,res,next,() =>{
        if(req.user.isAdmin){
            console.log(req.user.isAdmin);
            next();
        }
        else{
            
            return next(createError(403,"you are not authorized"));
        }
    });
};