import Order from '../models/order.js';
import OrderItem from '../models/orderItem.js';
import {UserOrder} from '../models/order.js';
import {Op} from 'sequelize';
export const OrderList1 =async(req,res,next)=>{
    const userId=req.user.id;
    try{
        const userOrder=await UserOrder.findOne({
            where:{UserId:userId},
        });
        console.log(userOrder);
        
        const OrderId=userOrder.OrderId;
        const order=await Order.findOne({
            where:{OrderID:OrderId}
        })
        console.log(order);
        OrderStatus=order.OrderStatus;
        const totalPrice=order.TotalPrice;
        const query=await OrderItem.findAll({
        where:{
           orderId:OrderId
            
        },
        });
        

        if(query===null)
        {
            return res.status(500).json({Status:"NO order"});
        }

        else
        
        {
           
           return res.status(200).json({Status:"Success",result:query,totalPrice:totalPrice,OrderStatus:OrderStatus
           });
          
        }
    }
    catch(err){
    next(err);
    }
}
export const OrderList =async(req,res,next)=>{
    //const orderId=req.params.id;
    const userId=req.user.id;
    try{
        const userOrder=await UserOrder.findAll({
            where:{UserId:userId},
        });
        const IDs=[];
        userOrder.forEach((record1) => {
            IDs.push(record1.OrderId);
          });
        console.log(IDs);
       
            const orderItems = await OrderItem.findAll({
              where: { orderId: {[Op.in]:IDs }},
              include:[{
                model:Order,
                attributes:['TotalPrice','OrderStatus']
              }],
              order:[['orderId','DESC']]
            })
           
        
        

        if(orderItems===null)
        {
            return res.status(500).json({Status:"NO order"});
        }

        else
        
        {
            const fullOrderLists=orderItems.map(order=>{
                return{
                    orderId:order.orderId ,
                    OrderName: order.OrderName,
                    OrderQuantity:order.OrderQuantity,
                    OrderPrice: order.OrderPrice,
                    SubTotal:order.SubTotal,
                    TotalPrice:Order ? order.Order.TotalPrice:null,
                    OrderStatus:Order ? order.Order.OrderStatus:null

                }})
                console.log(fullOrderLists)
                
           
           return res.status(200).json({Status:"Success",fullOrderLists:fullOrderLists
           });
          
        }
    }
    catch(err){
    next(err);
    }
}


