import React from 'react';
import SidebarAdmin from './Sidebar';
import {useState} from 'react';
import Nav from './nav';
function HomeAdmin(){
    const [toggle,setToggle]=useState(true);
    const Toggle=()=>{
        setToggle(!toggle)
    }
    return(
        <div className='container-fluid bg-secondary min-vh-100 '>
            <div className='row'>
               {toggle && <div className='col-2 bg-white vh-100 sticky' style={{ height: "100%",
                    position: "sticky",
                    zIndex:"1",
                    top:"0",
                    left:"0",
                    overflowX: "hidden"}}>
                    <SidebarAdmin/>
                </div>}
                <div className='col-10 px-0 '>
                   <Nav Toggle={Toggle}/>
                </div>
            </div>
        </div>
    )
}
export default HomeAdmin;