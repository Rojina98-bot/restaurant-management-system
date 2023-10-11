import styles from './sideBar.module.css';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faBurger} from "@fortawesome/free-solid-svg-icons";
import {Link} from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
const SideBar=()=>{
   const Navigate=useNavigate();
    return(
       <div className={` col-auto col-md-3 col-xl-2 px-sm-2 px-0 bg-dark ${styles.bg}`}>
        <div className={`d-flex flex-column align-items-center align-items-sm-start px-3 pt-2 text-white min-vh-100 `}>
          <div className={`${styles.logo} my-5`} >
            <img src="assets/img/logo1.png" className={styles.img} alt="name of restarant"/>
          </div>
          <Link to
            ="/Menu"
            className={` ${styles.menu} d-flex align-items-center pb-3 mb-md-0 me-md-auto text-decoration-none ms-3`}
          >
            <FontAwesomeIcon icon={faBurger} className="fs-4"></FontAwesomeIcon>
            <span className=" ms-2 fs-5 d-none d-sm-inline">Menu</span>
          </Link>
         
          <ul
            className="nav nav-pills flex-column mb-sm-auto mb-0 align-items-center align-items-sm-start  ms-3`"
            id="menu"
          >
            <li>
              <Link to
                ="/Dashboard"
                className="nav-link px-0 align-middle ms-3 mb-2"
              >
                <i className="fs-4 bi-speedometer2" />{" "}
                <span className="ms-1 d-none d-sm-inline  ">Dashboard</span>{" "}
              </Link>
            </li>
            <li>
              <Link to ="/Order" className="nav-link px-0 align-middle ms-3 mb-2">
                <i className="fs-4 bi-table" />{" "}
                <span className="ms-1 d-none d-sm-inline ">Orders</span>
              </Link>
            </li>
            <li>
              <Link to="/EditProfile" className="nav-link px-0 align-middle ms-3 mt-1">
                <i className="fs-4 bi-people" />{" "}
                <span className="ms-1 d-none d-sm-inline">Profile</span>{" "}
              </Link>
            </li>
          </ul>
          <hr />
           <button type="button" className="btn btn-warning ms-4 mb-5" onClick={()=>Navigate('../')}>Logout</button>
          </div>
        </div>
      
    )
};
export default SideBar;