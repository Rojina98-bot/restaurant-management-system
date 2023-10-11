import User from '../models/users.js';
import Menu from '../models/menu.js';
import Order from '../models/order.js';
export const Count=async(req,res,next)=>{
    try{
        const UserCount=await User.count();
        const MenuCount=await Menu.count();
        const OrderCount=await Order.count();
        res.status(200).json({UserCount:UserCount,MenuCount:MenuCount,OrderCount:OrderCount})
        console.log(UserCount);
    }
    catch(err){
        next(err)
    }
}