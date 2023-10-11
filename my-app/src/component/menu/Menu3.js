import React from 'react';
import styles from './menu.module.css';
import SideBar from '../sideBar/sideBar';
import Item from './item';
import Cart from './cart.js';
import {CartProvider} from 'react-use-cart';
const Menu=()=>{
    return( 
      <div className={`container-fluid ${styles.body}`}>
         <div className="row flex-nowrap">
            <SideBar/>
            <CartProvider>
                <Item/>
                <Cart/>
            </CartProvider>
        </div>
    </div>
)

}
export default Menu;