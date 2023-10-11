import React from 'react';
import {useState} from 'react';
import SidebarAdmin from './Sidebar';
import { useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { useEffect } from 'react';
const EditMenu=()=>{
    const navigate=useNavigate();
    const {id}=useParams();
    const [values,setValues]=useState({
        name:'',
        price:'',
        category_id:''
     });
     axios.defaults.withCredentials=true;
     useEffect(()=>{
        axios.get(`http://localhost:8000/menu/${id}`)
        .then(res=>{
            if(res.data.Status==="Success"){
            const userData=res.data.result;
            setValues({
                ...values,
                name: userData.MenuName,
                price: userData.MenuPrice,
                category_id: userData.category_id
              });
            }
        })
        .catch(err=>console.log(err));
     },[])
     const buttonHandler=(event)=>{
        const sendingData={
            MenuName:values.name,
            MenuPrice:values.price,
            category_id:values.category_id,
           
        }
        event.preventDefault();
        axios.put(`http://localhost:8000/menu/${id}`,sendingData)
        .then(res=>{
            if(res.data.message==="updated")
            {
                console.log("it is updated");
               navigate('../AdminMenu');
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
                                onChange={e => setValues({ ...values, name: e.target.value })}
                            />
                            </div>
                            <div className="form-group col-md-6">
                                <label htmlFor="inputPrice">Price</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        id="inputName"
                                        value={values.price}
                                        onChange={e => setValues({ ...values, price: e.target.value })}
                                    />
                            </div>
                    
                            <div className="form-group col-md-6">
                            <label htmlFor="inputCategoryId">category_id</label>
                                <input
                                type="number"
                                step="1"
                                className="form-control"
                                id="inputAddress"
                                value={values.category_id}
                                onChange={e => setValues({ ...values, category_id: e.target.value })}
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
export default EditMenu;