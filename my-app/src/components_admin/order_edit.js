import React from 'react';
import {useState} from 'react';
import SidebarAdmin from './Sidebar';
import { useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { useEffect } from 'react';
const EditOrder=()=>{
    const navigate=useNavigate();
    const {id}=useParams();
    const [values,setValues]=useState({
        OrderStatus:false
     });
     axios.defaults.withCredentials=true;
     useEffect(()=>{
        axios.get(`http://localhost:8000/order/${id}`)
        .then(res=>{
            if(res.data.Status==="Success"){
                   
            
            const userData=res.data.result;
            setValues({
                ...values,
                OrderStatus:userData.OrderStatus
              });
              console.log(values.OrderStatus);
            }
    
        })
        .catch(err=>console.log(err));
     },[])
     const buttonHandler=(event)=>{
        event.preventDefault();
        const updatedOrderStatus=values.OrderStatus==='true'
        const sendingData={
            OrderStatus:updatedOrderStatus
           
        }
        console.log(updatedOrderStatus);
        
        axios.put(`http://localhost:8000/order/${id}`,sendingData)
        .then(res=>{
            if(res.data.Status==="Success")
            {
                console.log("it is updated");

               navigate('../AdminOrders');
            }
            else{
                console.log(res.data.Status);
            }
        })
        .catch(err=>console.log(err));
    }
    
     
    return(
        <div className='container-fluid bg-secondary min-vh-100'>
            <div className='row'>
                <div className=' col-2 mt-3 bg-white vh-100'>
                    <SidebarAdmin/>
                </div>
                <div className='col-10 px-0  '>
                    <form>
                        <div className="form-row mx-3 mt-4">
                            <div className="form-group col-md-6">
                                <label htmlFor="inputStatus">Order Status</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        id="inputStatus"
                                        value={values.OrderStatus}
                                        onChange={e => setValues({ ...values, OrderStatus: e.target.value  })}
                                    />
                            </div>
                        </div>
                        <button type="submit" className="btn btn-primary mt-3 mx-3" onClick={buttonHandler}>
                            Change
                        </button>
                        
                    </form>
                </div>
            </div>
        </div>
)
}
export default EditOrder;