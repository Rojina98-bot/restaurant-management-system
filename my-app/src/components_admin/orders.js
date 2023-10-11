import React from 'react';
import { useState } from 'react';
import axios from 'axios';
import { useEffect } from 'react';
import {useNavigate} from 'react-router-dom';
import SidebarAdmin from './Sidebar';
import styles from './orders.module.css'
import 'bootstrap-icons/font/bootstrap-icons.css';
const AdminOrders=()=>{
  const userID=localStorage.getItem('user_id');
  console.log(userID);
  const navigate=useNavigate();
  const [values,setValues]=useState([]);
  axios.defaults.withCredentials=true;
  useEffect(()=>{
    axios.get('http://localhost:8000/order')
    .then(res=>{
      if(res.data.Status==="Success"){
        setValues(res.data.result)
        console.log(res.data.result);
    }})
    .catch(err=>console.log(err));

  },[])
  if(values.length>0){
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
  console.log(values);
  console.log(orderArray);
  const editHandler=(menuId)=>{
    const id=menuId;
    navigate(`/EditOrder/${id}`);

  }
  const deleteHandler=(orderId)=>{
    const id=orderId;
    const updatedValues = values.filter(record => record.MenuID !== id);
    setValues(updatedValues);
    axios.delete(`http://localhost:8000/order/${id}`)
    .then(res=>{
      if(res.data.message==="deleted")
      {
        const updatedValues=values.filter((record)=>record.orderId!==id);
        setValues(updatedValues);
        console.log("deleted")
      }
      else{
        console.log(res.data.message);
      }
    })
    .catch(err=>{console.log(err)
    });
  }
    return(
        <div className="bg-white">
          <div className='row'>
             <div className='col-2 bg-white vh-100'>
                <SidebarAdmin/>
              </div>
              <div className="container col-10 my-3">
                <div className="row">
                  <div className="col-12">
                    <table className={`table table-bordered border-primary  ${styles.fixedWidthTable} `} style={{width:"75%"}}>
                     {orderArray && orderArray.map((record1,index1)=>{
                          return(
                            <tr key={index1}>
                                <thead>
                                    <tr>
                                        <th className='col-md-10' >ORDERID:{record1.orderId}</th>
                                        <th className='col-md-2' >OrderStatus:{record1.OrderStatus ? 'Yes' : 'No'}</th>
                                    </tr>
                                </thead>
                                <tbody>
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
                                            <td >
                                <button type="button" className="btn btn-primary mx-3" onClick={()=>editHandler(record1.orderId)}>
                                  <i className="bi bi-eye" />
                                </button>
                                <button type="button" className="btn btn-danger me-2" onClick={()=>deleteHandler(record1.orderId)}>
                                  <i className="bi bi-trash" />
                                </button>
                            </td>
                                    </tr>
                                    
                                   
                                   
                                </tbody>
                                <tfoot>
                                    <tr>
                                        <td colspan='3'>Total Price: {record1.TotalPrice}</td>
                                    </tr>
                                </tfoot>
                                
                            </tr>
                         ) })}
                       
                    </table>
                  </div>
                </div>
              </div>
          </div>
        </div>
    ) }
         else{
            return(
                <div className="bg-white">
                <div className='row'>
                   <div className='col-2 bg-white vh-100'>
                      <SidebarAdmin/>
                                        <p>Loading...</p> 
                                    </div>
                                 </div>
                                 </div>
                     );
         }
}
export default AdminOrders;