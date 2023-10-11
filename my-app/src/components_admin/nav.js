import React from 'react';
import { useState } from 'react';
import axios from 'axios';
import { useEffect } from 'react';
import 'bootstrap/js/dist/dropdown';
function Nav({Toggle}){
    axios.defaults.withCredentials=true;
    const [values,setValues]=useState({
        UserCount:0,
        MenuCount:0,
        OrderCount:0

    })
    useEffect(()=>{
        axios.get('http://localhost:8000/count')
        .then(res=>{
            setValues({
                ...values,
                UserCount:res.data.UserCount,
                MenuCount:res.data.MenuCount,
                OrderCount:res.data.OrderCount,

            })
        })
        .catch(err=>console.log(err));
    },[])
    return(
<div className='px-3'>
<nav className="navbar navbar-expand-lg navbar-dark bg-transparent ">

<i className=" ms-2 navbar-brand bi bi-justify-left" onClick={Toggle}>Navbar</i>
<button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
  <span className="navbar-toggler-icon"></span>
</button>
<div className="collapse navbar-collapse" id="navbarSupportedContent">

    <ul className="navbar-nav ms-auto">
    <li className="nav-item dropdown">
      <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
        Hungry Bunny
      </a>
      <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
        <li><a className="dropdown-item" href="#">Profile</a></li>
        <li><a className="dropdown-item" href="#">Setting</a></li>
        <li><hr className="dropdown-divider"/></li>
        <li><a className="dropdown-item" href="#">Logout</a></li>
      </ul>
    </li>
  </ul>
</div>

</nav>
<div className='container-fluid'>
   <div className='row g-3 my-2'>
    <div className='col-md-3'>
            <div className='p-3 bg-white shadow-sm d-flex justify-content-around align-items-center rounded'>
                <div>
                    <h3 className='fs-2'>{values.MenuCount}</h3>
                    <p className='fs-5'>Menu</p>
                </div>
                <i className='bi bi-cart-plus p-3 fs-1'></i>

            </div>
        </div>
        <div className='col-md-3'>
            <div className='p-3 bg-white shadow-sm d-flex justify-content-around align-items-center rounded'>
                <div>
                    <h3 className='fs-2'>{values.UserCount}</h3>
                    <p className='fs-5'>Users</p>
                </div>
                <i className='bi bi-people p-3 fs-1'></i>

            </div>
        </div>
        <div className='col-md-3'>
            <div className='p-3 bg-white shadow-sm d-flex justify-content-around align-items-center rounded'>
                <div>
                    <h3 className='fs-2'>{values.OrderCount}</h3>
                    <p className='fs-5'>Order</p>
                </div>
                <i className='bi bi-clipboard p-3 fs-1'></i>

            </div>
        </div>
    </div>
    
</div>

</div>
    )
}
export default Nav;