import React,{useState} from 'react';
import {useRef} from 'react';
import {useNavigate} from "react-router-dom";
import {useEffect} from 'react';
import axios from 'axios';
import styles from './loginSignup.module.css';
/*const Proxy=({name,pass,mail,add,num,mode,onNameClick,onPassClick,onMailClick,onAddClick,onNumClick,onModeChange,onEmptyClick})=>{
    //const[valueMode,setValueMode]=useState("");
    const toText=useRef(null);
    function passVisi(){
        if(toText.current && toText.current.type==="password")
        toText.current.type="text";
        else if (toText.current)
        toText.current.type="password";
    }
    
    return(
        <>
            <p className={styles.heading}>SIGN UP</p>
            <form>
                <fieldset className={styles.fieldset}>
                    <legend className={styles.legend}>Name</legend>
                    <input type="text" id="text" className={styles.input} value={name} placeholder="Name" onChange={onNameClick}/>
                </fieldset>
                <fieldset className={styles.fieldset}>
                    <legend className={styles.legend}>Email</legend>
                    <input type="email" id="email" className={styles.input} value={mail} placeholder ="Email" onChange={onMailClick}/>
                </fieldset>
                <fieldset className={styles.fieldset}>
                    <legend className={styles.legend}>Address</legend>
                    <input type="address" id="address"  className={styles.input} value={add} placeholder="Address" onChange={onAddClick}/>
                </fieldset>
                <fieldset className={styles.fieldset}>
                    <legend className={styles.legend}>Number</legend>
                    <input type="number" id="number" className={styles.input} value={num} placeholder="Numbers" onChange={onNumClick}/>
                </fieldset>
                <label className={styles.label} htmlFor="user-type"></label>
                <select id="user-type" className={styles.userType} value={mode} onChange={onModeChange}>
                <option value="customer">Customer</option>
                <option value="employee">Employee</option>
                </select>
                <fieldset className={styles.fieldset}>
                    <legend className={styles.legend}>Password</legend>
                    <input type="password"  id="password" className={styles.input} value={pass} ref={toText} placeholder="Password" onChange={onPassClick}/>
                </fieldset>
                <label className={styles.label} htmlFor="checkbox">
                    <input type="checkbox" id ="checkbox" className={styles.checkbox} onClick={passVisi} />
                        Show Password
                </label>
                <button id="sign" className={styles.sign} onClick={onEmptyClick}>Submit</button>
            </form>
        </>
    
    )
}*/
const  SignUp=()=>{
    const [values, setValues]=useState({
        name:'',
        email:'',
        address:'',
        number:'',
        password:''
    });
    const toText=useRef(null);
    const navigate=useNavigate();
    const [error,setError]=useState('');
    const [errorStatus, setErrorStatus]=useState(false);
    const[mode,setMode]=useState("");
    function passVisi(){
        if(toText.current.type==="password")
        toText.current.type="text";
        else
        toText.current.type="password";
    }
    const onModeChange=event=>{
        setMode(event.target.value);
    }
    const handleSubmit=(event)=>{
        event.preventDefault();
        if(values.name && values.email && values.address && values.number  && values.password)
        {
            axios.post('http://localhost:8000/signUp',values)
            .then(res=>{
                if(res.data.Status==="Success")
                {
                    
                    navigate('../Dashboard');
                }
                
            })
            .catch(err=>console.log(err));
        }
        else
        {
            setError('plz fill all the fields')
            setErrorStatus(true);
        }
    }
    /*const[valueName,setValueName]=useState("");
    const[valuePass,setValuePass]=useState("");
    const[valueMail,setValueMail]=useState("");
    const[valueAdd,setValueAdd]=useState("");
    const[valueNum,setValueNum]=useState("");
    const[valueMode,setValueMode]=useState("");
    const [buttonClicked,setButtonClicked]=useState(false);
    const [showError,setShowError]=useState(false);
   
    const nameBox=event =>{
        setValueName(event.target.value);
    }
    const passBox=event=>{
        setValuePass(event.target.value);
    }
    const emailBox=event =>{
        setValueMail(event.target.value);
    }
    const addBox=event=>{
        setValueAdd(event.target.value);
    }
    const noBox=event =>{
        setValueNum(event.target.value);
    }
    const modeBox=event=>{
        setValueMode(event.target.value);
    }*/
    /*const portal=(event)=>{
        event.preventDefault();
        setButtonClicked(true);
        if(valueName&& valuePass && valueMail && valueAdd && valueNum ){
            navigate('../Portal');
        }
        else{
            setShowError(true);
            
            }
        };*/
        useEffect(()=>{
            /*console.log("showError changed:", showError);*/
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
                    <label className={styles.label} htmlFor="user-type"></label>
                    <select id="user-type" className={styles.userType} value={mode} onChange={onModeChange}>
                    <option value="customer">Customer</option>
                    <option value="employee">Employee</option>
                    </select>
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
                {/*<Proxy name={valueName} 
                pass={valuePass}
                mail={valueMail}
                add={valueAdd}
                num={valueNum}
                mode={valueMode}
                onNameClick={nameBox}
                onPassClick={passBox}
                onMailClick={emailBox}
                onAddClick={addBox}
                onNumClick={noBox}
                onModeChange={modeBox}
                onEmptyClick={portal}
        />              
                {buttonClicked && showError && (<div className="error-msg">Please enter the fields</div>)}
            </div>
            */} 
            {errorStatus && <div className={styles.errorBox}>{error}</div>}
        </div>)
    
}
export default SignUp;
    