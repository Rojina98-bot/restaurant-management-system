import React from 'react';
import {useState,useEffect} from 'react';
import axios from 'axios';
import {useRef} from 'react';
import {Link} from 'react-router-dom';
import {useNavigate} from 'react-router-dom';
import styles from './loginSignup.module.css';

/*const Proxy=({value,pass,onEmptyClick,onEmailClick,onPassClick})=>{
    //const[value,setValue]=useState("");
    //const[pass,setPass]=useState("");
    const[mode,setMode]=useState("");
    const toText=useRef(null);
    
    const modeBox=event=>{
        setMode(event.target.value);
    }
    
    
    function passVisi(){
        if(toText.current.type==="password")
        toText.current.type="text";
        else
        toText.current.type="password";
    }
    return(
        //<div id="container">
        
        //</div>
    );
}*/
const Login=()=>{
    /*axios.defaults.withCredentials=true;*/
    const [values,setValues]=useState({
        email:'',
        password:''
    });
    const toText=useRef(null);
    const navigate=useNavigate();
    const [error,setError]=useState('');
    const [errorStatus,setErrorStatus]=useState(false);
    const[mode,setMode]=useState("");
    function passVisi(){
        if(toText.current.type==="password")
        toText.current.type="text";
        else
        toText.current.type="password";
    }
    const handleSubmit=(event)=>{
        event.preventDefault();
        axios.post('http://localhost:8000/login',values)
        .then(res=>{
            if(res.data.Status==="Success")/* && res.data.token)*/{
               /* localStorage.setItem('user_id',res.data.user_id);
                localStorage.setItem('token',res.data.token);*/
                navigate('../Dashboard');
            }
            else{
                
                setError(res.data.Error);
                setErrorStatus(true);
            }
        })
        .catch(err=>console.log(err));
    }
    const modeBox=event=>{
        setMode(event.target.value);
    }
   
    /*const[value,setValue]=useState("");
    const[pass,setPass]=useState("");
    const [buttonClicked,setButtonClicked]=useState(false);
    const [showError,setShowError]=useState(false);
    const textBox=event =>{
        setValue(event.target.value);
    }
    const passBox=event=>{
        setPass(event.target.value);
    }
    const portal=(event)=>{
        event.preventDefault();
        setButtonClicked(true);
        if(value && pass){
            navigate('../Portal');
        }
        else{
            setShowError(true);
            
            }
        };
        useEffect(()=>{
            console.log("showError changed:", showError);
            let timeoutId;
            if(showError){
                timeoutId=setTimeout(()=>{
                    setShowError(false);
                },7000);
            }
            return()=>{
                if(timeoutId){clearTimeout(timeoutId);}};
            },[showError]);

            React.useEffect(() => {
                document.body.classList.add(styles.body);
            
                // Clean up by removing the class when the component is unmounted
                return () => {
                  document.body.classList.remove(styles.body);
                };
              }, []);
        return(
            <div className={styles.container}>
                <Proxy value={value} pass={pass} onEmptyClick={portal} onEmailClick={textBox} onPassClick={passBox}/>
                {buttonClicked && showError && (<div className="error-msg">Please enter the fields</div>)}
            </div>*/
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
                    <option value="employee">Employee</option>
                </select>
                <fieldset className={styles.fieldset}>
                    <legend className={styles.legend}>Password </legend>
                     <input type="password"  ref={toText} id="password" className={`${styles.input} `} value={values.password} onChange={e=>setValues({...values, password:e.target.value})}/>
                </fieldset>
                    {/*<br/>*/}
                <label className={styles.label} htmlFor="checkbox">
                <input type="checkbox" id ="checkbox" className={styles.checkbox} onClick={passVisi} />
                show password
                </label>
                <button id="sign" className={styles.sign} >Sign in</button>
            </form>
            {/*<p>Forgot
                <Link style={{color:'rgb(8, 151, 151)'}}
                className="navbar-item"
                to="/PassWord">UserName/Password</Link>
    </p>*/}
            <p>Don't have an account?
                <Link 
                style={{color:'rgb(8, 151, 151)'}}
                className="navbar-item"
                to="/SignUp">Sign up
                </Link>
            </p>
            {errorStatus &&<div className={styles.errorBox}>{error}</div>}
        </div>
        </div>
    )
}
export default Login;
