import React from 'react';
import SideBar from '../sideBar/sideBar.js';
import styles from './editProfile.module.css';
import { useState } from 'react';
import axios from 'axios';
import { useEffect } from 'react';
const EditProfile=()=>{
     const [values,setValues]=useState({
        email:'',
        name:'',
        address:'',
        phone:''
     });
     const [Userid,setUserid]=useState(0);
    const [Status,setStatus]=useState(false);
     axios.defaults.withCredentials=true;
     useEffect(()=>{
        axios.get(`http://localhost:8000/getProfile`)
        .then(res=>{
            if(res.data.Status==="Success"){
                
                   
            
            const userData=res.data.result;
            setValues({
                ...values,
                name: userData.UserName,
                email: userData.UserEmail,
                address: userData.UserAddress,
                phone: userData.UserNumber
              });
              setUserid(res.data.UserID);
            }
    
        })
        .catch(err=>console.log(err));
     },[])
    const buttonHandler=(event)=>{
        const sendingData={
            UserName:values.name,
            UserEmail:values.email,
            UserAddress:values.address,
            UserNumber:values.phone
        }
        event.preventDefault();
        axios.put(`http://localhost:8000/users/${Userid}`,sendingData)
        .then(res=>{
            if(res.data.message==="updated")
            {
                console.log("it is updated");
                setStatus(true);
            }
            else{
                console.log(res.data.message);
            }
        })
        .catch(err=>console.log(err));
    }
    let timeoutId;
    useEffect(()=>{
    if(Status){
        timeoutId=setTimeout(()=>{
            setStatus(false);
        },7000);
    }
    return()=>{
        if(timeoutId){clearTimeout(timeoutId);}};
    },[Status]);
     
    return(
        <div className={`container-fluid ${styles.body}`}>
        <div className="row flex-nowrap">
      
      
          <SideBar/>
  
       
        <form>
  <div className="form-row">
    <div className="form-group col-md-6">
      <label htmlFor="inputEmail4">Email</label>
      <input
        type="email"
        className="form-control"
        id="inputEmail4"
        value={values.email}
        onChange={e => setValues({ ...values, email: e.target.value })}
      />
    </div>
    <div className="form-group col-md-6">
      <label htmlFor="inputName">Name</label>
      <input
        type="text"
        className="form-control"
        id="inputName"
        value={values.name}
        onChange={e => setValues({ ...values, name: e.target.value })}
      />
    </div>
  </div>
  <div className="form-group col-md-6">
    <label htmlFor="inputAddress">Address</label>
    <input
      type="text"
      className="form-control"
      id="inputAddress"
      value={values.address}
     onChange={e => setValues({ ...values, address: e.target.value })}
    />
  </div>
  <div className="form-group col-md-6">
    <label htmlFor="inputPhone">Phone</label>
    <input
      type="text"
      className="form-control"
      id="inputPhone"
      value={values.phone}
      onChange={e => setValues({ ...values, phone: e.target.value })}
    />
  </div>
  <button type="submit" className="btn btn-primary mt-3" onClick={buttonHandler}>
    Change
  </button>
  {Status && <div className={styles.status}>Done</div>}
</form>
       
</div>
  </div>

    )
}
export default EditProfile;