import React, {useEffect,useState} from 'react';
import styles from './order.module.css';
import axios from 'axios';
import SideBar from '../sideBar/sideBar';
const Order=()=>{
  const [values,setValues]=useState([]);
  axios.defaults.withCredentials=true;
  useEffect(()=>{
    axios.get('http://localhost:8000/orderList')
    .then(res=>{
      if(res.data.Status==="Success"){
        setValues(res.data.fullOrderLists)
        console.log(res.data.fullOrderLists);
        console.log(values);
    }})
    .catch(err=>console.log(err));

  },[])
  if (values.length>0){
  const orders={};
  values.forEach((value)=>{
    const {orderId,TotalPrice,OrderStatus, ...rest}=value;
    if(!orders[orderId]){
        orders[orderId]={
            orderId,
            TotalPrice,
            OrderStatus,
            items:[],
        };
    }
    orders[orderId].items.push(rest);
  });
  const orderArray=Object.values(orders);


 
    return(
      <div className={`container-fluid ${styles.body}`}>
  <div className="row flex-nowrap">
   <SideBar/>
        <div className='col-md-6 mx-3'>
        <table className={`table table-bordered border-primary mt-4  ${styles.fixedWidthTable} `} style={{width:"75%"}}>
                     {orderArray && orderArray.map((record1,index1)=>{
                          return(
                            <tr key={index1}>
                              {!record1.OrderStatus ? (
                                <>
                                <thead className='col-md-6'>
                                    
                                  <th className='col-md-6' >OrderID:{record1.orderId}</th>
                                    
                                </thead>
                                <tbody className='col-md-6'>
                                    <tr>
                                        {record1.items && record1.items.map((record2,index2)=>{
                                            return(
                                            <tr key={index2}>
                                                <table className='table table-bordered my-3' style={{width:"75%"}}>
                                                    <thead>
                                                        <tr>
                                                            <th className='col-md-1' >SN</th>
                                                            <th className='col-md-4' >Name</th>
                                                            <th className='col-md-2' >Quantity</th>
                                                            <th className='col-md-3' >Price</th>
                                                            <th className='col-md-3' >SubTotal</th>
                                                            
                                                        </tr>
                                                    </thead>
                                                    <tbody>
                                                        <tr>
                                                            <td className='col-md-1'>{index2+1}</td>
                                                            <td className='col-md-4'>{record2.OrderName}</td>
                                                            <td className='col-md-2'>{record2.OrderQuantity}</td>
                                                            <td className='col-md-3'>{record2.OrderPrice}</td>
                                                            <td className='col-md-3'>{record2.SubTotal}</td>
                                                        </tr>
                                                    </tbody>
                                                </table>
                                            </tr>)})}
                                    </tr>
                                  </tbody>
                                <tfoot>
                                    <tr>
                                        <th colspan='3'>Total Price: {record1.TotalPrice}</th>
                                    </tr>
                                </tfoot>
                                </>
                              ):null}
                            </tr>
                         ) })}
                       
                    </table>  
                    </div>
                  </div>
                   
    
  </div>
  
  



    
  

  )
}
else{
  return(
  <div className={`container-fluid ${styles.body}`}>
      <div className="row flex-nowrap">
        <SideBar />
        <p>Loading...</p> {/* Show a loading message or spinner */}
      </div>
    </div>
    );
}

}
export default Order;