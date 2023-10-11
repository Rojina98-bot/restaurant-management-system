import React,{useState} from 'react';
import {useNavigate} from "react-router-dom";
import {useEffect} from 'react';
import axios from 'axios';
import SidebarAdmin from './Sidebar';

const  MenuAdd=()=>{
    const [values, setValues]=useState({
        MenuName:'',
        MenuPrice:'',
        category_id:''
    });
    const navigate=useNavigate();
    const [error,setError]=useState('');
    const [errorStatus, setErrorStatus]=useState(false);
    axios.defaults.withCredentials=true;
    const handleSubmit=(event)=>{
        event.preventDefault();
        if(values.MenuName && values.MenuPrice && values.category_id)
        {
            axios.post('http://localhost:8000/menu',values)
            .then(res=>{
                if(res.data.Status==="Success")
                {
                    
                    navigate('../AdminMenu');
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
                            <div className="form-row mx-3 mt-4">
                                <div className="form-group col-md-6">
                                    <label htmlFor="inputName">MenuName</label>
                                    <input type="text" id="MenuName"  className='form-control' spellCheck="false" value={values.MenuName}  onChange={e=>setValues({...values, MenuName:e.target.value})}/>
                                </div>  
                                <div className="form-group col-md-6"> 
                                    <label htmlFor="inputPrice">MenuPrice</label>
                                    <input type="text" id="MenuPrice" className='form-control' spellCheck="false" value={values.MenuPrice}  onChange={e=>setValues({...values, MenuPrice:e.target.value})}/>
                                </div>
                                <div className="form-group col-md-6">
                                    <label htmlFor="inputCategoryID">CategoryID</label>
                                    <input type="number"  step='1' id="CategoryID" className='form-control' spellCheck="false" value={values.category_id}  onChange={e=>setValues({...values, category_id:e.target.value})}/>
                                </div>
                            
                            </div>
                                <button  className='mx-4 mt-4 border-0 rounded' id="sign" >Submit</button>
                        </form>
                        {errorStatus && <div className='bg-danger'>{error}</div>}
                    </div>
                </div>
            </div>
        )
        
    
}
export default MenuAdd;
    