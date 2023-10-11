import React from 'react';
import axios from 'axios';
import {useCart} from 'react-use-cart';
import styles from './menu.module.css';
const Cart=()=>{
    const {
    isEmpty,
    totalUniqueItems,
    items,
    totalItems,
    cartTotal,
    updateItemQuantity,
    removeItem,
    emptyCart,
}=useCart();
const buttonHandler=async(e)=>{
    e.preventDefault();
    const OrderItems=[];
    for(const item of items)
    {
        const OrderItem={
            OrderName:item.name,
            OrderQuantity:item.quantity,
            OrderPrice:item.price
        };
        OrderItems.push(OrderItem);
    }
    try{
        const res=await axios.post("http://localhost:8000/order",{
            OrderItems:OrderItems,
            TotalPrice:cartTotal})
            console.log(res.data.Status);
            if(res.data.Status==="Success")
            {
                emptyCart();
            }

    }
    catch(err)
    {
        console.log(err);
    }

}
if(isEmpty)return(
    <div className={`col-auto col-md-3 col-xl-4 px-sm-2 ${styles.fixed}`}>
        <h3 className={`text-left border border-secondary w-100 mt-4 text-center shadow-sm p-3 mb-5 bg-body rounded`}>Your cart is empty</h3>
    </div>)
else{
return(
    <div className={`col-auto col-md-3 col-xl-4 px-sm-2 shadow p-3 mb-5 bg-body rounded ${styles.fixed}`}>
        <section className={`py-4 container`}>
            <div className='row justify-content-center'>
                <div className='col-12'>
                    <h5>Cart: [{totalUniqueItems}] total Items: [{totalItems}]</h5>
                    <table className={`table table-light table-hover m-0`}>
                        <thead className='border-bottom-3 border-dark '>
                            <tr>
                                <th>Item</th>
                                <th>Price</th>
                                <th>Quantity</th>
                            </tr>
                        </thead>
                        <tbody>
                        {items.map((item,index)=>{
                            return(
                                <>
                            <tr key={index}>
                                <td>{item.name}</td>
                                <td>{item.price}</td>
                                <td>{item.quantity}</td>
                                </tr>
                                <div className='d-flex justify-content center'>
                                    <button className='btn btn-info px-3 ms-2 mt-3 '
                                    onClick={()=>updateItemQuantity(item.id,item.quantity-1)}
                                    >-</button>
                                    <button className='btn btn-info px-3 ms-2 mt-3'
                                    onClick={()=>updateItemQuantity(item.id,item.quantity+1)}
                                    >+</button>
                                    <button className='btn btn-danger ms-2 mt-3 d-block'
                                    onClick={()=>removeItem(item.id)}>Remove Item</button>

                                </div>
                                </>
                            )
                        })}
                        </tbody>
                    </table>
                </div>
                <div className="col-auto mt-3 ms-auto"></div>
                <h3>Total Price: $ {cartTotal}</h3>
            </div>
            <div className="col-auto">
                <button className='btn btn-danger m-2'
                onClick={()=>emptyCart()}
                >Clear Cart</button>
                <button className='btn btn-primary m-2'onClick={buttonHandler}>Buy now</button>
                </div>
        </section>
        </div>
    ) }
    }
    export default Cart;

