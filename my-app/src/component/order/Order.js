import React, {useEffect,useState} from 'react';
import styles from './order.module.css';
import logo from './images/logo.png';
import 'bootstrap-icons/font/bootstrap-icons.css';
import axios from 'axios';
import SideBar from '../sideBar/sideBar';
import {Link} from 'react-router-dom';
const Order=()=>{
  const [values,setValues]=useState([]);
  const [token,setToken]=useState('');
  
  /*setToken(storedToken);*/

  /*const navigate=useNavigate();*/
  /*const storedToken=localStorage.getItem('token');*/
    /*setToken(storedToken);*/
  useEffect(()=>{
    const storedToken=localStorage.getItem('token');
    setToken(storedToken);
    console.log(token);
    
  },[]);
  /*useEffect(() => {
    console.log('Token:', token);
  }, [token]);*/
 /* useEffect(()=>{
  const fetchData=async()=>{
    try{
    const res=await axios.post("http://localhost:8000/dashboard",{},{
      headers:{Authorization:`Bearer${token}`},});
      if(res.data.Status==="Success"){
        setValues(res.data.Result);
      }
}
catch(error){
  console.log(error);
}
  }
  fetchData();
  },[]);
  
  */
  /*useEffect(()=>{
    try{
      const res=await axios.get("http://localhost:8000/dashboard",{

      },{headers:{Authorization:`Bearer${token}`},},)
    }
    catch(e){
      console.log(e);
    }
    if(res.data.Status="Success"){
      setValues(res.data.Result);
    })*/
    useEffect(()=>{
      console.log(token);
    axios.get('http://localhost:8000/dashboard',
     { headers:{ 
      Authorization: `Bearer ${token}`,},
    })
    .then(res=>{
      if(res.data.Status==='Success'){
        console.log(res.data.Result);
        setValues(res.data.Result);
      }
    
    
    })
    .catch(err=>console.log(err));
  },[token]);
  

    return(
      <div className={`container-fluid ${styles.body}`}>
  <div className="row flex-nowrap">
   <SideBar/>
    <table className="table table-striped py-3">
      <thead>
        <tr>
          <th colSpan="3" >Orders</th>
        </tr>
        </thead>
        <tbody>
        {/*<tr>
          <td>food</td>
          <td>Price</td>
          <td>edit and delete button</td>
</tr>*/}
          {values.map((customers,index)=>{
            return(
            <tr key={index}>
              <td>{customers.order_name}</td>
            </tr>
            );
          })}
      </tbody>
    </table>
  </div>
</div>


    
  

  )

}
export default Order;