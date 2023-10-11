import React,{useState} from 'react';
import {useRef} from 'react';
import {useNavigate} from "react-router-dom";
import {useEffect} from 'react';
import axios from 'axios';
import styles from './loginSignup.module.css';
const  SignUp=()=>{
    const [values, setValues]=useState({
        name:'',
        email:'',
        address:'',
        number:'',
        password:'',
        isAdmin:false
    });
    const toText=useRef(null);
    const navigate=useNavigate();
    const [error,setError]=useState('');
    const [errorStatus, setErrorStatus]=useState(false);
    function passVisi(){
        if(toText.current.type==="password")
        toText.current.type="text";
        else
        toText.current.type="password";
    }
    const handleSubmit=(event)=>{
        event.preventDefault();
        if(values.name && values.email && values.address && values.number  && values.password)
        {
            axios.post('http://localhost:8000/signUp',values)
            .then(res=>{
                if(res.data.Status==="Success")
                {
                    
                    navigate('../Login');
                }
                
            })
            .catch(err=>console.log(err));
        }
        else
        {
            setError('plz fill all the fields');
            setErrorStatus(true);
        }
    }
        useEffect(()=>{
            let timeoutId;
            if(errorStatus){
                timeoutId=setTimeout(()=>{
                    setErrorStatus(false);
                },7000);
            }
            return()=>{
                if(timeoutId){clearTimeout(timeoutId);}};
            },[errorStatus]);
        return(
            <div className={styles.container}>
                <p className={styles.heading}>SIGN UP</p>
                <form className={styles.form} onSubmit={handleSubmit}>
                    <fieldset className={styles.fieldset}>
                        <legend className={styles.legend}>Name</legend>
                        <input type="text" id="text" className={styles.input} spellCheck="false" value={values.name}  onChange={e=>setValues({...values, name:e.target.value})}/>
                    </fieldset>
                    <fieldset className={styles.fieldset}>
                        <legend className={styles.legend}>Email</legend>
                        <input type="email" id="email" className={styles.input} spellCheck="false" value={values.email}  onChange={e=>setValues({...values, email:e.target.value})}/>
                    </fieldset>
                    <fieldset className={styles.fieldset}>
                        <legend className={styles.legend}>Address</legend>
                        <input type="address" id="address"  className={styles.input} spellCheck="false" value={values.address}  onChange={e=>setValues({...values, address:e.target.value})}/>
                    </fieldset>
                    <fieldset className={styles.fieldset}>
                        <legend className={styles.legend}>Number</legend>
                        <input type="number" id="number" className={styles.input} spellCheck="false" value={values.number}  onChange={e=>setValues({...values, number:e.target.value})}/>
                    </fieldset>
                    <fieldset className={styles.fieldset}>
                        <legend className={styles.legend}>Password</legend>
                        <input type="password"  id="password" className={styles.input} value={values.password} ref={toText}  onChange={e=>setValues({...values, password:e.target.value})}/>
                    </fieldset>
                    <label className={styles.label} htmlFor="checkbox">
                        <input type="checkbox" id ="checkbox" className={styles.checkbox} onClick={passVisi} />
                            Show Password
                    </label>
                    <button id="sign" className={styles.sign} >Submit</button>
                </form>
            {errorStatus && <div className={`${styles.errorBox} text-danger text-center`}>{error}</div>}
        </div>)
    
}
export default SignUp;
    