import React, {useEffect,useState} from 'react';
import styles from './menu.module.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import SideBar from '../sideBar/sideBar';
import axios from 'axios';
import {Link} from "react-router-dom";
/*const socket=io.connect("http://localhost:8000");*/
const Menu=()=>{
  const [token,setToken]=useState('');
  useEffect(()=>{
    const storedToken=localStorage.getItem('token');
    setToken(storedToken);
    console.log(token);
  })
 /* let socket=io();*/
    const buttonHandler =async(e)=>{
        e.preventDefault();
       /* socket.emit('chat message',input.value)*/
        try{
            const res=await axios.post("http://localhost:8000/menu",{
               value:e.target.value,},{
               headers:{
              Authorization: `Bearer ${token}`, 
               },
               
            });
            
        }                                                                
        catch(e){
            console.log(e);
        }
    }
   
    return(
      <div className={`container-fluid ${styles.body}`}>
  <div className="row flex-nowrap">
   <SideBar/>
    <div className={`${styles.menuBody} px-3`}>
            <table className={`${styles.table} px-3 `}>
                <tbody className= "px-3">
                    <tr className={styles.tr}>
                        <th className={styles.th} colSpan="3 ">Platter's</th>
                    </tr>
                    <tr className={styles.tr}>
                        <td className={styles.td}>Veg Platter
                        <p className={styles.text}>Combination of grilled panner, fried cashew nut mushroom and potato</p></td>
                        <td className={styles.td}>840</td>
                        <td className={styles.td} ><button className="order" value="Veg Platter" onClick={buttonHandler}>order</button></td>
                    </tr>
                    <tr className={styles.tr}>
                        <td className={styles.td}>Veg momo platter
                        <p className={styles.text}>combination of steam, kothey, fried and chilli</p></td>
                        <td className={styles.td}>735</td>
                        <td className={styles.td} ><button className="order" value="Veg momo platter" onClick={buttonHandler}>order</button></td>
                    </tr>
                    <tr className={styles.tr}>
                        <td className={styles.td}>Chicken Momo Platter
                        <p className={styles.text}>combination of steam, kothey, fried and chilli</p></td>
                        <td className={styles.td}>695</td>
                        <td className={styles.td} ><button className="order" value="Chicken Momo Platter" onClick={buttonHandler}>order</button></td>
                    </tr>
                    <tr className={styles.tr}>
                        <td className={styles.td}>Chicken Platter
                        <p className={styles.text}>combination of traditional cooking of dishes</p></td>
                        <td className={styles.td}>985</td>
                        <td className={styles.td} ><button className="order" value="Chicken Platter" onClick={buttonHandler}>order</button></td>
                    </tr>
                    <tr className={styles.tr}>
                        <td className={styles.td}>Fish Platter
                        <p className={styles.text}>combination of prawn, fish in Neaplis style</p></td>
                        <td className={styles.td}>1635</td>
                        <td className={styles.td} ><button className="order" value="Fish Platter" onClick={buttonHandler}>order</button></td>
                    </tr>
                    <tr className={styles.tr}>
                        <td className={styles.td}>Mixed Platter
                        <p className={styles.text}>combination of veg,chicken and fish</p></td>
                        <td className={styles.td}>1360</td>
                        <td className={styles.td} ><button className="order" value="Mixed Platter" onClick={buttonHandler}>order</button></td>
                    </tr>
                    <tr className={styles.tr}>
                        <td className={styles.td}>Tandoori Platter
                        <p className={styles.text}>combination of tandooru, kebab and tikas</p></td>
                        <td className={styles.td}>1295</td>
                        <td className={styles.td} ><button className="order" value="Tandoori Platter" onClick={buttonHandler}>order</button></td>
                    </tr>
                    <tr className={styles.tr}>
                        <td className={styles.td}>Newari Khaja Set
                        <p className={styles.text}>combination of typical newari snacks</p></td>
                        <td className={styles.td}>780</td>
                        <td className={styles.td} ><button className="order" value="Newari Khaja Set" onClick={buttonHandler}>order</button></td>
                    </tr>
                    <tr className={styles.tr}>
                        <td className={styles.td}>Fruits Platter
                        <p className={styles.text}>combination of different seasonal fruits</p></td>
                        <td className={styles.td}>690</td>
                        <td className={styles.td} ><button className="order" value="Fruits Platter" onClick={buttonHandler}>order</button></td>
                    </tr>
                    <tr className={styles.tr}>
                        <th className={styles.th} colSpan="3 ">Touch of italy</th>
                    </tr>
                    <tr className={styles.tr}>
                        <td className={styles.td}>Lasangna Alle Verdure
                        <p className={styles.text}>Oven baked layers of fresh potato with cheese, tomato and seasonal vegetables</p></td>
                        <td className={styles.td}>685</td>
                        <td className={styles.td} ><button className="order" value="Lasangna Alle Verdure" onClick={buttonHandler}>order</button></td>
                        
                    </tr>
                    <tr className={styles.tr}>
                        <td className={styles.td}>Lasagna Bolognese
                        <p className={styles.text}>Oven baked layers of fresh potato with cheese, tomato and seasonal vegetables</p></td>
                        <td className={styles.td}>685</td>
                        <td className={styles.td} ><button className="order" value="Lasagna Bolognese" onClick={buttonHandler}>order</button></td>
                        
                    </tr>
                    <tr className={styles.tr}>
                        <td className={styles.td}>Spaghetti/ Penne Pasta
                        <p className={styles.text}>Choice of carbona, Arabbiato or chicken Bolonoise server with garlic bread </p></td>
                        <td className={styles.td}>685</td>
                        <td className={styles.td} ><button className="order" value="Spaghetti/ Penne Pasta" onClick={buttonHandler}>order</button></td>
                        
                    </tr>
                    <tr className={styles.tr}>
                        <th className={styles.th} colSpan="3 ">Pizza</th>
                    </tr>
                    <tr className={styles.tr}>
                        <td className={styles.td}>All Pollo(Chicken)
                        <p className={styles.text}>Grilled chicken, cheese, tomato herbs</p></td>
                        <td className={styles.td}>675</td>
                        <td className={styles.td} ><button className="order" value="All Pollo" onClick={buttonHandler}>order</button></td>
                        
                    </tr>
                    <tr className={styles.tr}>
                        <td className={styles.td}>Mixed Sea Food
                        <p className={styles.text}>Assorted sea foods, cheese, tomato herbs</p></td>
                        <td className={styles.td}>685</td>
                        <td className={styles.td} ><button className="order" value="Mixed Sea Food" onClick={buttonHandler}>order</button></td>
                        
                    </tr>
                    <tr className={styles.tr}>
                        <td className={styles.td}>Grilled Vegetable
                        <p className={styles.text}>Grilled vegetable cheese, tomato herbs</p></td>
                        <td className={styles.td}>560</td>
                        <td className={styles.td} ><button className="order" value="Grilled Vegetable" onClick={buttonHandler}>order</button></td>
                        
                    </tr>
                    <tr className={styles.tr}>
                        <td className={styles.td}>Mushroom
                        <p className={styles.text}>Grilled mushroom, cheese, tomato and herbs</p></td>
                        <td className={styles.td}>665</td>
                        <td className={styles.td} ><button className="order" value="Mushroom" onClick={buttonHandler}>order</button></td>
                        
                    </tr>
                    <tr className={styles.tr}>
                        <td className={styles.td}>Margherita
                        <p className={styles.text}>cheese, tomato and oregano</p></td>
                        <td className={styles.td}>490</td>
                        <td className={styles.td} ><button className="order" value="Margherita" onClick={buttonHandler}>order</button></td>
                        
                    </tr>
                    <tr className={styles.tr}>
                        <td className={styles.td}>Panner Tika
                        <p className={styles.text}>Topping with clay oven cooked Paneer, cheese, tomato herbs</p></td>
                        <td className={styles.td}>685</td>
                        <td className={styles.td} ><button className="order" value="Panner Tika" onClick={buttonHandler}>order</button></td>
                        
                    </tr>
                    <tr className={styles.tr}>
                        <th className={styles.th} colSpan="3 ">Nepali and Indian</th>
                    </tr>
                    <tr className={styles.tr}>
                        <td className={styles.td}>Vegetable thali set
                        <p className={styles.text}>Freshly homemade veg set meal served with Rice or Dhido</p></td>
                        <td className={styles.td}>515</td>
                        <td className={styles.td} ><button className="order" value="Vegetable thali set" onClick={buttonHandler}>order</button></td>
                        
                    </tr>
                    <tr className={styles.tr}>
                        <td className={styles.td}>Chicken/fish thali set/dhido
                        <p className={styles.text}>freshly homemade combo set meal with chicken/fish</p></td>
                        <td className={styles.td}>650</td>
                        <td className={styles.td} ><button className="order" value="Chicken/fish thali set/dhido" onClick={buttonHandler}>order</button></td>
                        
                    </tr>
                    <tr className={styles.tr}>
                        <td className={styles.td}>Mutton Curry
                        <p className={styles.text}>Freshly homemade combo set meal served with Rice or Dhido</p></td>
                        <td className={styles.td}>825</td>
                        <td className={styles.td} ><button className="order" value="Mutton Curry" onClick={buttonHandler}>order</button></td>
                        
                    </tr>
                    <tr className={styles.tr}>
                        <td className={styles.td}>Fish Curry
                        <p className={styles.text}>Freshly homemade fish with local spices</p></td>
                        <td className={styles.td}>725</td>
                        <td className={styles.td} ><button className="order" value="Fish Curry" onClick={buttonHandler}>order</button></td>
                        
                    </tr>
                    <tr className={styles.tr}>
                        <td className={styles.td}>Chicken Curry
                        <p className={styles.text}>Freshly homemade chicken with local spices</p></td>
                        <td className={styles.td}>725</td>
                        <td className={styles.td} ><button className="order" value="Chicken Curry" onClick={buttonHandler}>order</button></td>
                        
                    </tr>
                    <tr className={styles.tr}>
                        <td className={styles.td}>Paneer Mattar Curry
                        <p className={styles.text}>Freshly homemade panner, peas with local spices</p></td>
                        <td className={styles.td}>680</td>
                        <td className={styles.td} ><button className="order" value="Paneer Mattar Curry" onClick={buttonHandler}>order</button></td>
                        
                    </tr>
                    <tr className={styles.tr}>
                        <td className={styles.td}>Palak Paneer
                        <p className={styles.text}>Freshly homemade spinach and cottage cheese spices</p></td>
                        <td className={styles.td}>675</td>
                        <td className={styles.td} ><button className="order" value="Palak Paneer" onClick={buttonHandler}>order</button></td>
                        
                    </tr>
                    <tr className={styles.tr}>
                        <td className={styles.td}>Paneer Butter Masala
                        <p className={styles.text}>Char grilled panner cooked in rich tomato and nuts gravy</p></td>
                        <td className={styles.td}>720</td>
                        <td className={styles.td} ><button className="order" value="Paneer Butter Masala" onClick={buttonHandler}>order</button></td>
                        
                    </tr>
                    <tr className={styles.tr}>
                        <td className={styles.td}>Chicken Butter Masala
                        <p className={styles.text}>Char grilled chicken cooked in rich tomato and nuts gravy</p></td>
                        <td className={styles.td}>720</td>
                        <td className={styles.td} ><button className="order" value="Chicken Butter Masala" onClick={buttonHandler}>order</button></td>
                        
                    </tr>


                </tbody>
            </table>
        </div>
  </div>
</div>


    
  

  )

}
export default Menu;