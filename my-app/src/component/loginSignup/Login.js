import React from 'react';
import {useState,useEffect} from 'react';
import {useRef} from 'react';
import {Link} from 'react-router-dom';
import {useNavigate} from 'react-router-dom';
import styles from './loginSignup.module.css';

const Proxy=({value,pass,onEmptyClick,onEmailClick,onPassClick})=>{
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
        <>
            <p className={styles.heading}>LOGIN</p>
            <form className={styles.form}>
                <fieldset className={styles.fieldset}>
                    <legend className={styles.legend}>Email</legend>
                    <input type="email" id="email" className={styles.input} value={value}  onChange={onEmailClick}/>
                </fieldset>
                
                <label className={styles.label} htmlFor="user-type"></label>
                <select id="user-type" className={styles.userType} value={mode} onChange={modeBox}>
                    <option value="customer">Customer</option>
                    <option value="employee">Employee</option>
                </select>
                <fieldset className={styles.fieldset}>
                    <legend className={styles.legend}>Password </legend>
                     <input type="password"  ref={toText} id="password" className={styles.input} value={pass} onChange={onPassClick}/>
                </fieldset>
                    {/*<br/>*/}
                <label className={styles.label} htmlFor="checkbox">
                <input type="checkbox" id ="checkbox" className={styles.checkbox} onClick={passVisi} />
                show password
                </label>
                <button id="sign" className={styles.sign} onClick={onEmptyClick}>Sign in</button>
            </form>
            <p>Forgot
                <Link style={{color:'rgb(8, 151, 151)'}}
                className="navbar-item"
                to="/PassWord">UserName/Password</Link>
            </p>
            <p>Don't have an account?
                <Link 
                style={{color:'rgb(8, 151, 151)'}}
                className="navbar-item"
                to="/SignUp">Sign up
                </Link>
            </p>
        </>
        //</div>
    );
}
const Login=()=>{
    const navigate=useNavigate();
    const[value,setValue]=useState("");
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
            </div>
    );
}
export default Login;
