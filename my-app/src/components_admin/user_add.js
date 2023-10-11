import React,{useState} from 'react';
import {useNavigate} from "react-router-dom";
import {useEffect} from 'react';
import axios from 'axios';
import {useRef} from 'react';
import SidebarAdmin from './Sidebar';
import styles from './user_add.module.css';
const  UserAdd=()=>{
    const toText=useRef(null);
    const [values, setValues]=useState({
        UserName:'',
        UserAddress:'',
        UserNumber:'',
        UserEmail:'',
        UserPassword:'',
        isAdmin:true
    });
    const navigate=useNavigate();
    const [error,setError]=useState('');
    const [errorStatus, setErrorStatus]=useState(false);
    axios.defaults.withCredentials=true;
    const handleSubmit=(event)=>{
        event.preventDefault();
        
        if(values.UserName && values.UserAddress && values.UserEmail && values.UserNumber && values.UserPassword)
        {
            axios.post('http://localhost:8000/users',values)
            .then(res=>{
                if(res.data.Status==="Success")
                {
                    
                    navigate('../Users');
                }
                
            })
            .catch(err=>console.log(err));
        }
        else
        {
            setError('plz fill all the fields')
            setErrorStatus(true);
        }
    }
    function passVisi(){
        if(toText.current.type==="password")
        toText.current.type="text";
        else
        toText.current.type="password";
    }
   
        useEffect(()=>{
            let timeoutId;
            if(errorStatus){
                timeoutId=setTimeout(()=>{
                    setErrorStatus(false);
                },7000);
            }
            return()=>{
                if(timeoutId){clearTimeout(timeoutId);}};
            },[errorStatus]);
        return(
            <div className='container-fluid bg-secondary min-vh-100'>
                 <div className='row'>
                    <div className=' col-2 mt-3 bg-white vh-100'>
                        <SidebarAdmin/>
                    </div>
                    <div className='col-10 px-0 mt-4 '>
                        <div className='col-md-2'>
                            <p className='mx-4 bg-info h3' >Add data</p>
                        </div>
                        <form onSubmit={handleSubmit}>
                            <div className="form-row mx-3 mt-5">
                                <div className="form-group col-md-6">
                                    <label htmlFor="inputName">UserName</label>
                                    <input type="text" id="UserName"  className='form-control' spellCheck="false" value={values.UserName}  onChange={e=>setValues({...values, UserName:e.target.value})}/>
                                </div>  
                                <div className="form-group col-md-6"> 
                                    <label htmlFor="inputAddress">UserAddress</label>
                                    <input type="text" id="UserAddress" className='form-control' spellCheck="false" value={values.UserAddress}  onChange={e=>setValues({...values, UserAddress:e.target.value})}/>
                                </div>
                                <div className="form-group col-md-6">
                                    <label htmlFor="inputNumber">UserNumber</label>
                                    <input type="number" id="UserNumber" className='form-control' spellCheck="false" value={values.UserNumber}  onChange={e=>setValues({...values, UserNumber:e.target.value})}/>
                                </div>
                                <div className="form-group col-md-6"> 
                                    <label htmlFor="inputAddress">UserEmail</label>
                                    <input type="email" id="UserEmail" className='form-control' spellCheck="false" value={values.UserEmail}  onChange={e=>setValues({...values, UserEmail:e.target.value})}/>
                                </div>
                                <div className="form-group col-md-6"> 
                                    <label htmlFor="inputPassword">UserPassword</label>
                                    <input type="password" ref={toText} id="UserPassword" className='form-control' spellCheck="false" value={values.UserPassword}  onChange={e=>setValues({...values, UserPassword:e.target.value})}/>
                                </div>
                                <label className='mt-2 d-flex align-items-center' htmlFor="checkbox">
                                    <input type="checkbox" id ="checkbox" className={`ms-2 ${styles.checkbox}`} onClick={passVisi} />
                                  <p className='ms-3 mt-3'> show password</p>
                                </label>
                            
                            </div>
                                <button  className='mx-4 mt-4 border-0 rounded' id="sign" >Submit</button>
                        </form>
                        {errorStatus && <div className='bg-danger'>{error}</div>}
                    </div>
                </div>
            </div>
        )
        
    
}
export default UserAdd;
    