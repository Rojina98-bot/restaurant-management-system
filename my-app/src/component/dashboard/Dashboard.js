import styles from './dashboard.module.css';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faBurger} from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from 'react-router-dom';
import SideBar from '../sideBar/sideBar';
const Dashboard=()=>{
    const navigate=useNavigate();
    return(
      <div className={`container-fluid ${styles.body}`}>
        <div className="row flex-nowrap">
          <SideBar/>
          
            <div className={`row d-flex justify-content-end mt-5 ${styles.mainBody}`}> 
              <div className={styles.block}>
                <button type="button" className={`btn btn-outline-dark col-md-3 my-2 mx-5 ${styles.button1}`} onClick={()=>navigate('../Menu')}>Menu</button>
                <FontAwesomeIcon icon={faBurger} className="fs-1 mt-4 mx-3"></FontAwesomeIcon>
              </div>
              <div className={styles.block}>
                <button type="button" className={`btn btn-outline-dark col-md-3  mx-5 ${styles.button2}`} onClick={()=>navigate('../Order')}>Order</button>
                <i className="fs-1 bi-table mt-4 mx-3" />{" "}
              </div>
              <div className={styles.block}>
                <button type="button" className={`btn btn-outline-dark col-md-3  mx-5 ${styles.button3}`} onClick={()=>navigate('../EditProfile')}>Profile</button>
                <i className="fs-1 bi-people mt-4 mx-3" />{" "}
              </div>

          </div>
        </div>
    </div>


    
  

  )

};
export default Dashboard;