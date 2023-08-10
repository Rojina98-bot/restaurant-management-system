import React, {useEffect,useState} from 'react';
import styles from './dashboard.module.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import axios from 'axios';
import {Link} from 'react-router-dom';
import SideBar from '../sideBar/sideBar';
const Dashboard=()=>{
  /*const [values,setValues]=useState([]);
  /*const navigate=useNavigate();*/
 /* useEffect(()=>{
    axios.get('http://localhost:8000/dashboard')
    .then(res=>{
      if(res.data.Status==='Success'){
        setValues(res.data.Result)
      }
    })
    .catch(err=>console.log(err));
  },[]
  )*/

    return(
      <div className={`container-fluid ${styles.body}`}>
      <div className="row flex-nowrap">
    
    
        <SideBar/>
        <p>hello</p>
  </div>
</div>


    
  

  )

};
export default Dashboard;