import React from 'react';
import { useState } from 'react';
import axios from 'axios';
import { useEffect } from 'react';
import {useNavigate} from 'react-router-dom';
import SidebarAdmin from './Sidebar';
import 'bootstrap-icons/font/bootstrap-icons.css';
const Users=()=>{
  const userID=localStorage.getItem('user_id');
  console.log(userID);
  const navigate=useNavigate();
  const [values,setValues]=useState([]);
  axios.defaults.withCredentials=true;
  useEffect(()=>{
    axios.get('http://localhost:8000/users')
    .then(res=>{
      if(res.data.Status==="Success"){
        setValues(res.data.result)
        console.log(res.data.result);
    }})
    .catch(err=>console.log(err));

  },[])
  const editHandler=(userId)=>{
    const id=userId;
    navigate(`/EditUser/${id}`);

  }
  const deleteHandler=(userId)=>{
    const id=userId;
    const updatedValues = values.filter(record => record.UserID !== id);
    setValues(updatedValues);
    axios.delete(`http://localhost:8000/users/${id}`)
    .then(res=>{
      if(res.data.message==="deleted")
      {
        console.log("deleted")
      }
      else{
        console.log(res.data.message);
        setValues(values);
      }
    })
    .catch(err=>{console.log(err)
      setValues(values);
    });
  }
  const addHandler=()=>{
    navigate('/UserAdd');
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
                    <div className='col p-0 m-0 '>
                    <div className='p-2 d-flex justify-content-end shadow mb-5'>
                    <h3 className='text-success me-3'>ADD</h3>
                      <button type="button" className="btn btn-success me-3" onClick={addHandler}>
                        <i className="bi bi-plus" />
                      </button>
                     
                    </div>
                    <table className="table table-bordered">
                      <thead>
                        <tr>
                          <th scope="col">SN</th>
                          <th scope="col">Name</th>
                          <th scope="col">Address</th>
                          <th scope="col">Email</th>
                          <th scope="col">Phone</th>
                          <th scope="col">Admin</th>
                          <th scope="col">Actions</th>
                        </tr>
                      </thead>
                      <tbody>
                        {
                        values && values.map((record,index)=>{
                          return(
                            <tr key={index}>
                              <td>{index+1}</td>
                              <td>{record.UserName}</td>
                              <td>{record.UserAddress}</td>
                              <td>{record.UserEmail}</td>
                              <td>{record.UserNumber}</td>
                              <td>{record.isAdmin ? 'Yes' : 'No'}</td>
                              <td>
                                <button type="button" className="btn btn-primary mx-3 " onClick={()=>editHandler(record.UserID)}>
                                  <i className="bi bi-eye" />
                                </button>
                                <button type="button" className="btn btn-danger" onClick={()=>deleteHandler(record.UserID)}>
                                  <i className="bi bi-trash" />
                                </button>
                              </td>
                            </tr>
                        )}
                        )}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
          </div>
        </div>
        </div>
          )
      }
export default Users;