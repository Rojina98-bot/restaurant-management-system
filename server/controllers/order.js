//insert in database

import Order from '../models/order.js';
import {UserOrder} from '../models/order.js';
import OrderItem from '../models/orderItem.js';
export const CreateOrder =async(req,res,next)=>{
   const userId=req.user.id;
   console.log("hello"+userId);
    try{

    const createdOrder=await Order.create({
    OrderStatus:false,
    TotalPrice:0
    
});
const {OrderItems}=req.body;
const OrderId=createdOrder.OrderID;
console.log(...OrderItems);
for (const orderItem of OrderItems)
{
    await OrderItem.create({
        OrderName: orderItem.OrderName,
        OrderQuantity: orderItem.OrderQuantity,
        OrderPrice: orderItem.OrderPrice,
        SubTotal: orderItem.OrderQuantity * orderItem.OrderPrice,
        orderId: OrderId
        
    })
}
await Order.update({
    TotalPrice:req.body.TotalPrice
},
{
where:{
    OrderID:OrderId
}
    })

console.log(createdOrder);
const resp=await UserOrder.create({
    UserId:userId,
    OrderId:OrderId
})
console.log(resp);
if(createdOrder===null)
{
    return res.status(500).json({Status:"Error"})
}
else{
    return res.status(200).json({Status:"Success"
    })
}
    }
    catch(err){
        next(err);
    }
    };

export const UpdateOrder =async(req,res,next)=>{
    const OrderId=req.params.id;
    const updateData=req.body;
    console.log(req.body.OrderStatus);
    try{
        const updateOrder=await Order.update(updateData,{
            where:{
                OrderID:OrderId
            }
           });
      
        if(updateOrder===null){
            return res.status(500).json({Status:"NO order updated"});
        }

        else
        
        {
           
           return res.status(200).json({Status:"Success"
           });
          
        }
    
}
catch(err){
    next(err);
}
    
};

export const OrderDelete =async(req,res,next)=>{
    try{
        const OrderId=req.params.id;
        await OrderItem.destroy({
            where:{orderId:OrderId},
        });
        const reply=await Order.destroy({
            where:{OrderID:OrderId
            },
        });
        await UserOrder.destroy({
            where:{OrderId:OrderId},
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
export const OrderGet=async(req,res,next)=>{
    const id=req.params.id;
    try{
        const order=await OrderItem.findOne({
            where:{
               orderId:id

            },
            include:[{
                model:Order,
                attributes:['TotalPrice','OrderStatus']
            }]
            
        }

        );
        console.log(order.Order);
        if(order===null)
        return res.status(500).json({Status:"Error"});
        else{
            const fullOrderList={
           
                    OrderID:order.OrderID ,
                    OrderName: order.OrderName,
                    OrderQuantity:order.OrderQuantity,
                    OrderPrice: order.OrderPrice,
                    SubTotal:order.SubTotal,
                    TotalPrice:Order ? order.Order.TotalPrice:null,
                    OrderStatus:Order ? order.Order.OrderStatus:null
            }
                
            
        return res.status(200).json({
            Status:"Success",result:fullOrderList
        });}
    }
    catch(err){
    next(err);
    }
}
export const OrderGetAll=async(req,res,next)=>{
    try{
        const orders=await OrderItem.findAll({
            include:[{
                model: Order,
                attributes:['TotalPrice','OrderStatus']
            }],
            order:[['orderId','DESC']]

            
        }
       

        );
        console.log(orders);
        if(orders===null)
        return res.status(500).json({Status:"Error"});
        else{
            const fullOrderList=orders.map(order=>{
                return{
                    orderId:order.orderId ,
                    OrderName: order.OrderName,
                    OrderQuantity:order.OrderQuantity,
                    OrderPrice: order.OrderPrice,
                    SubTotal:order.SubTotal,
                    TotalPrice:Order ? order.Order.TotalPrice:null,
                    OrderStatus:Order ? order.Order.OrderStatus:null

                }
                
            })
            console.log(fullOrderList);
        return res.status(200).json({
            Status:"Success",result:fullOrderList
        });}
    }
    catch(err){
    next(err);
    }
}



