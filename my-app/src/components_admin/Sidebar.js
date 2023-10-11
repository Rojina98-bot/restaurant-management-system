import React from 'react';
import styles from './admin.module.css';
import {Link} from 'react-router-dom';
function SidebarAdmin(){
    return(
       

              
        <div className={`bg-white sideBar p-2 ${styles.sideBar}`}>
            <div className='m-2'>
                <img src="assets/img/logo1.png" style={{height:"30px",width:"30px"}} alt="name of restarant"/>
                <span className='brand-name fs-6 ms-2' >Hungry bunny</span>
            </div>
            <hr className='text-dark'/>
            <div className={`${styles.listGroup} list-group list-group-flush`}>
                <Link className='list-group-item list-group-item-action py-2' to='/HomeAdmin'>
                    <i className='bi bi-house fs-5 me-2'></i>
                    <span className='fs-5'>Home</span>
                </Link>
                <Link className='list-group-item list-group-item-action py-2' to='/AdminMenu'>
                    <i className='bi bi-menu-app fs-5 me-2'></i>
                    <span className='fs-5'>Menu</span>
                </Link>
                <Link className='list-group-item list-group-item-action py-2' to="/Users">
                    <i className='bi bi-people fs-5 me-2'></i>
                    <span className='fs-5'>Customers</span>
                </Link>
                <Link className='list-group-item list-group-item-action py-2' to="/AdminOrders">
                    <i className='bi bi-list fs-5 me-2'></i>
                    <span className='fs-5'>Orders</span>
                </Link>
                <Link className='list-group-item list-group-item-action py-2' to='/'>
                    <i className='bi bi-power fs-5 me-2'></i>
                    <span className='fs-5'>Logout</span>
                </Link>
        </div>
        </div>
        
    )
}
export default SidebarAdmin;
