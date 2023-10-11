import React from 'react';
import {useState,useEffect} from 'react';
import axios from 'axios';
import {useRef} from 'react';
import {Link} from 'react-router-dom';
import {useNavigate} from 'react-router-dom';
import styles from './loginSignup.module.css';

const Login=()=>{
    const [values,setValues]=useState({
        email:'',
        password:''
    });
    const toText=useRef(null);
    const navigate=useNavigate();
    const [error,setError]=useState(null);
    const [errorStatus,setErrorStatus]=useState(false);
    const[mode,setMode]=useState("customer");
    function passVisi(){
        if(toText.current.type==="password")
        toText.current.type="text";
        else
        toText.current.type="password";
    }
    axios.defaults.withCredentials=true;
    const handleSubmit=(event)=>{
        event.preventDefault();
        if(values.email && values.password)
        {
            axios.post('http://localhost:8000/login',values)
            .then(res=>{
              
                if (res.data.Status==="Error"){
                    setError(res.data.Error);
                    console.log(res.data.Status);
                    setErrorStatus(true);
                }
                else if(res.data.Status==="Success"){
                    console.log(mode);
                    if(mode==='customer')
                    navigate('../Dashboard');
                    else if (mode==='admin')
                    navigate("../HomeAdmin");
                }
                console.log(res.data.Error);
            })
            .catch(err=>console.log(err));
        }
        else
        {
            setError('Plz fill the fields');
            setErrorStatus(true);
        }
    }
    const modeBox=event=>{
        setMode(event.target.value);
        console.log(mode);
    }
            let timeoutId;
            useEffect(()=>{
            if(errorStatus){
                timeoutId=setTimeout(()=>{
                    setErrorStatus(false);
                },7000);
            }
            return()=>{
                if(timeoutId){clearTimeout(timeoutId);}};
            },[errorStatus]);

    return(
        <div className={styles.body}>
        <div className={styles.container}>
            <p className={styles.heading}>LOGIN</p>
            
            <form className={styles.form} onSubmit={handleSubmit}>
                <fieldset className={styles.fieldset}>
                    <legend className={styles.legend}>Email</legend>
                    <input type="email" id="email" className={styles.input} spellCheck="false" value={values.email}  onChange={e=>setValues({...values, email:e.target.value})}/>
                </fieldset>
                
                <label className={styles.label} htmlFor="user-type"></label>
                <select id="user-type" className={`${styles.userType} `}  value={mode} onChange={modeBox}>
                    <option value="customer">Customer</option>
                    <option value="admin">Admin</option>
                </select>
                <fieldset className={styles.fieldset}>
                    <legend className={styles.legend}>Password </legend>
                     <input type="password"  ref={toText} id="password" className={`${styles.input} `} value={values.password} onChange={e=>setValues({...values, password:e.target.value})}/>
                </fieldset>
                <label className={styles.label} htmlFor="checkbox">
                <input type="checkbox" id ="checkbox" className={styles.checkbox} onClick={passVisi} />
                show password
                </label>
                <button id="sign" className={styles.sign} >Sign in</button>
            </form>
            <p>Don't have an account?
                <Link 
                style={{color:'rgb(8, 151, 151)'}}
                className="navbar-item"
                to="/SignUp">Sign up
                </Link>
            </p>
                {errorStatus &&<div className={`${styles.errorBox} text-danger text-center`}>{error}</div>}
        </div>
        </div>
    )
}
export default Login;
