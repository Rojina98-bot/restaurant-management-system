import React from 'react';
import {useState} from 'react';
import SidebarAdmin from './Sidebar';
import { useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { useEffect } from 'react';
const EditUser=()=>{
    const navigate=useNavigate();
    const {id}=useParams();
    const [values,setValues]=useState({
        name:'',
        address:'',
        number:'',
        email:''
     });
     axios.defaults.withCredentials=true;
     useEffect(()=>{
        axios.get(`http://localhost:8000/users/${id}`)
        .then(res=>{
            if(res.data.Status==="Success"){
            const userData=res.data.result;
            setValues({
                ...values,
                name: userData.UserName,
                address: userData.UserAddress,
                number: userData.UserNumber,
                email:userData.UserEmail
              });
            }
    
        })
        .catch(err=>console.log(err));
     },[])
     const buttonHandler=(event)=>{
        const sendingData={
            UserName:values.name,
            UserAddress:values.address,
            UserNumber:values.number,
            UserEmail:values.email
           
        }
        event.preventDefault();
        axios.put(`http://localhost:8000/users/${id}`,sendingData)
        .then(res=>{
            if(res.data.message==="updated")
            {
                console.log("it is updated");
               navigate('../Users');
            }
            else{
                console.log(res.data.message);
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
                            <label htmlFor="inputName4">Name</label>
                                <input
                                type="text"
                                className="form-control"
                                id="inputName4"
                                value={values.name}
                                /*placeholder="Email"*/
                                onChange={e => setValues({ ...values, name: e.target.value })}
                            />
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
                            <label htmlFor="inputNumber">Number</label>
                                <input
                                type="number"
                                className="form-control"
                                id="inputNumber"
                                value={values.number}
                                onChange={e => setValues({ ...values, number: e.target.value })}
                                />
                            </div>
                            <div className="form-group col-md-6">
                            <label htmlFor="inputEmail">Email</label>
                                <input
                                type="email"
                                className="form-control"
                                id="inputEmail"
                                value={values.email}
                                onChange={e => setValues({ ...values, email: e.target.value })}
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
export default EditUser;