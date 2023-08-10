import React, {useEffect,useState} from 'react';
import styles from './sideBar.module.css';
import logo from './images/logo.png';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faUtensilSpoon} from "@fortawesome/free-solid-svg-icons";
import {Link} from 'react-router-dom';
const SideBar=()=>{
    return(
       
      <div className=" col-auto col-md-3 col-xl-2 px-sm-2 px-0 bg-dark">
        <div className={`d-flex flex-column align-items-center align-items-sm-start px-3 pt-2 text-white min-vh-100 `}>
           
          <Link to
            ="/Menu"
            className={` ${styles.menu} d-flex align-items-center pb-3 mb-md-0 me-md-auto text-decoration-none`}
          >
            {/*<i className="fs-4 app"/>{" "}*/}
            <FontAwesomeIcon icon={faUtensilSpoon} className="fs-4"></FontAwesomeIcon>
            <span className="fs-5 d-none d-sm-inline">Menu</span>
          </Link>
          <div className={styles.logo} >
              <img src={logo} className={styles.img} alt="name of restarant"/>
          </div>
          <ul
            className="nav nav-pills flex-column mb-sm-auto mb-0 align-items-center align-items-sm-start"
            id="menu"
          >
            <li className="nav-item">
              <Link to ="./" className="nav-link align-middle px-0">
                <i className="fs-4 bi-house" />{" "}
                <span className="ms-1 d-none d-sm-inline">Home</span>
              </Link>
            </li>
            <li>
              <Link to
                ="/Dashboard"
                /*data-bs-toggle="collapse"*/
                className="nav-link px-0 align-middle"
              >
                <i className="fs-4 bi-speedometer2" />{" "}
                <span className="ms-1 d-none d-sm-inline">Dashboard</span>{" "}
              </Link>
              {/*<ul
                className="collapse show nav flex-column ms-1"
                id="submenu1"
                data-bs-parent="#menu"
              >
                <li className="w-100">
                  <a href="#" className="nav-link px-0">
                    {" "}
                    <span className="d-none d-sm-inline">Item</span> 1{" "}
                  </a>
                </li>
                <li>
                  <a href="#" className="nav-link px-0">
                    {" "}
                    <span className="d-none d-sm-inline">Item</span> 2{" "}
                  </a>
                </li>
      </ul>*/}
            </li>
            <li>
              <Link to ="/Order" className="nav-link px-0 align-middle">
                <i className="fs-4 bi-table" />{" "}
                <span className="ms-1 d-none d-sm-inline">Orders</span>
              </Link>
            </li>
            {/*<li>
              <a
                href="#submenu2"
                data-bs-toggle="collapse"
                className="nav-link px-0 align-middle "
              >
                <i className="fs-4 bi-bootstrap" />{" "}
                <span className="ms-1 d-none d-sm-inline">Bootstrap</span>
              </a>
              <ul
                className="collapse nav flex-column ms-1"
                id="submenu2"
                data-bs-parent="#menu"
              >
                <li className="w-100">
                  <a href="#" className="nav-link px-0">
                    {" "}
                    <span className="d-none d-sm-inline">Item</span> 1
                  </a>
                </li>
                <li>
                  <a href="#" className="nav-link px-0">
                    {" "}
                    <span className="d-none d-sm-inline">Item</span> 2
                  </a>
                </li>
              </ul>
            </li>
            <li>
              <a
                href="#submenu3"
                data-bs-toggle="collapse"
                className="nav-link px-0 align-middle"
              >
                <i className="fs-4 bi-grid" />{" "}
                <span className="ms-1 d-none d-sm-inline">Products</span>{" "}
              </a>
              <ul
                className="collapse nav flex-column ms-1"
                id="submenu3"
                data-bs-parent="#menu"
              >
                <li className="w-100">
                  <a href="#" className="nav-link px-0">
                    {" "}
                    <span className="d-none d-sm-inline">Product</span> 1
                  </a>
                </li>
                <li>
                  <a href="#" className="nav-link px-0">
                    {" "}
                    <span className="d-none d-sm-inline">Product</span> 2
                  </a>
                </li>
                <li>
                  <a href="#" className="nav-link px-0">
                    {" "}
                    <span className="d-none d-sm-inline">Product</span> 3
                  </a>
                </li>
                <li>
                  <a href="#" className="nav-link px-0">
                    {" "}
                    <span className="d-none d-sm-inline">Product</span> 4
                  </a>
                </li>
              </ul>
    </li>*/}
            <li>
              <a href="#" className="nav-link px-0 align-middle">
                <i className="fs-4 bi-people" />{" "}
                <span className="ms-1 d-none d-sm-inline">Profile</span>{" "}
              </a>
            </li>
          </ul>
          <hr />
          <div className="dropdown pb-4">
            <a
              href="./Menu"
              className="d-flex align-items-center text-white text-decoration-none dropdown-toggle"
              id="dropdownUser1"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              
              <span className="d-none d-sm-inline mx-1">Settings</span>
            </a>
            <ul className="dropdown-menu dropdown-menu-dark text-small shadow">
              <li>
                <a className="dropdown-item" href="#">
                  New project...
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">a href="#"
                  Settings
                </a>
              </li>
              {/*<li>
                <a className="dropdown-item" href="#">
                  Profile
                </a>
              </li>
              <li>
                <hr className="dropdown-divider" />
  </li>*/}
              <li>
                <a className="dropdown-item" href="#">
                  Sign out
                </a>
              </li>
            </ul>
          </div>
          </div>
        </div>
      
    )
};
export default SideBar;