import React, {useState} from 'react';
import styles from './menu.module.css';
import plattar from '../plattar.json';
import italian from '../italian.json';
import pizza from '../pizza.json';
import NepaliIndian from '../NepaliIndian.json';
import {useCart} from 'react-use-cart';
const Item=()=>{
  const {addItem}=useCart();
    return(
      
    <div className={`${styles.itemBody} px-3 col-auto col-md-6 col-xl-6 px-sm-6 mb-5`}>
            <table className={`${styles.table} px-3 my-3`}>
                <tbody className= "px-3">
                    <tr className={styles.tr}>
                        <th className={styles.th} colSpan="3 ">Platters</th>
                    </tr>
                    {
                    plattar && plattar.map((record,index) =>{
                        return(
                            <tr key={index} className="{styles.tr}">
                                <td className={`${styles.td} ${styles.featureImage}`}>{record.name}
                                    <p className={styles.text}>{record.des}</p>
                                    <img src ={record.src}/>
                                </td>
                                <td className={styles.td}>{record.price}</td>
                                <td className={styles.td} ><button className={`btn btn-dark ${styles.order}`}  value={record.name} onClick={()=>addItem(record)}>order</button></td>
                            </tr>
                        )
                    })}  
                            <tr className={`styles.tr`}>
                                <th className={styles.th} colSpan="3 ">TouchOfItaly</th>
                            </tr>
                            {
                            italian && italian.map((record,index) =>{
                                return(
                                    
                                    <tr key={index} className={`${styles.tr} `}>
                                        <td className={`${styles.td} ${styles.featureImage}`}>{record.name}
                                            <p className={styles.text}>{record.des}</p>
                                            <img src ={record.src}/>
                                        </td>
                                        <td className={styles.td}>{record.price}</td>
                                        <td className={styles.td} ><button className={`btn btn-dark ${styles.order}`}  value={record.name} onClick={()=>addItem(record)}>order</button></td>
                                    </tr>
                                
                                )
                            })}  
                            <tr className={`${styles.tr} `}>
                                <th className={styles.th} colSpan="3 ">Pizza</th>
                            </tr>
                            {
                            pizza && pizza.map((record,index) =>{
                                return(
                                
                                    <tr key={index} className={`styles.tr `}>
                                        <td className={`${styles.td} ${styles.featureImage}`}>{record.name}
                                            <p className={styles.text}>{record.des}</p>
                                            <img src ={record.src}/>
                                        </td>
                                        <td className={styles.td}>{record.price}</td>
                                        <td className={styles.td} ><button className={`btn btn-dark ${styles.order}`}  value={record.name} onClick={()=>addItem(record)}>order</button></td>
                                    </tr>
                            
                                )
                            })}  
                            <tr className={`styles.tr `}>
                                <th className={styles.th} colSpan="3 ">Nepali and Indian</th>
                            </tr>
                            {
                            NepaliIndian && NepaliIndian.map((record,index) =>{
                                return(
                                    
                                    <tr  key={index} className={`${styles.tr}`}>
                                        <td className={`${styles.td} ${styles.featureImage}`}>{record.name}
                                            <p className={styles.text}>{record.des}</p>
                                            <img src ={record.src}/>
                                        </td>
                                        <td className={styles.td}>{record.price}</td>
                                        <td className={styles.td} ><button className={`btn btn-dark ${styles.order}`} value={record.name} onClick={()=>addItem(record)}>order</button></td>
                                    </tr>
                            
                                )
                            })}  
                </tbody>
            </table>
        </div>
                
    )

}
export default Item;