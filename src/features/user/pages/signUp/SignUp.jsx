
import { useRef, useState } from "react";
import classNames from "classnames/bind";
import styles from "./SignUp.module.scss";
import Back from "~/features/back/Back";
import { Form, Link, Router } from "react-router-dom";
import { useNavigate } from "react-router-dom";



const cx = classNames.bind(styles);


function SignUp() {

  const userVal = useRef()
  const userPass = useRef()
  const userPassCon = useRef()
  const [span1, setSpan1] = useState(false)
  const [span2, setSpan2] = useState(false)
  const [span3, setSpan3] = useState(false)

  const handleSpan1 = (value)=>{

    if(value.trim('').length === value.length && value.length >=3){
      setSpan1(true)
    }else {
      setSpan1(false)
    }
  }
const handleSpan2 = (value)=>{
    if(value.length > 5){
      setSpan2(true)

    }else {
      setSpan2(false)
    
    }

    if(userPassCon.current.value.length > 0){
      if (userPassCon.current.value === userPass.current.value){
        setSpan2(true)
      } else {
        setSpan2(false)
      }
    }
  }
  const handleSpan3 = (value)=>{
    if(value === userPass.current.value){
      setSpan3(true)

    }else {
      setSpan3(false)
    
    
    }
  }
  const naviagte = useNavigate()

  
  const handleSignUp = () => {
    const acc = {
      username: userVal.current.value,
      password: userPass.current.value,
      passwordConfirm: userPassCon.current.value
    }

    if( userPass.current.value === userPassCon.current.value &&
       userVal.current.value.length > 2 && userPass.current.value.length > 5
        && userVal.current.value.trim('').length === userVal.current.value.length 
          ){
      localStorage.setItem('acc',JSON.stringify(acc))
      naviagte('/login')

    } else {
      window.alert('please reinput your password')
    }

  }
  return (
  
    <div className={cx('wrapper')}>
    <h1>Create a new account</h1>
    <form action="" className={cx('wrapper-form')}>
      <div className={cx("wrapper-input1")}>
        <label htmlFor="user" className={cx('user')}>User Name</label>
        <input id="user" 
        type="text" 
        placeholder="Min 3 letters" 
        className={cx('user-input')}
        ref={userVal}
        onChange={(e)=>{handleSpan1(e.target.value)}}
        />
        <span className={cx("wrapper-input1-label")}>{ span1 && (<div>&#10003;</div>)}</span>

      
      </div>

      <div className={cx("wrapper-input2")}>
      <label htmlFor="password" className={cx('password')} >Password</label>
      <input 
      id="password" 
      type="password" 
      className={cx('password-input')}
      placeholder="Min 6 letters" 
      ref={userPass}
      onChange={(e)=>{handleSpan2(e.target.value)}}
      />
        <span className={cx("wrapper-input2-label")}>{ span2 && (<div>&#10003;</div>)}</span>

      </div>

      <div className={cx("wrapper-input2")}>
      <label htmlFor="password" className={cx('password')} >Password Confirmation</label>
      <input 
      id="password" 
      type="password" 
      className={cx('password-input')}
      placeholder="Confirm your password" 
      ref={userPassCon}
      onChange={(e)=>{handleSpan3(e.target.value)}}
      />
        <span className={cx("wrapper-input2-label")}>{ span3 && (<div>&#10003;</div>)}</span>
       
      </div>



      <div className={cx('wrapper-action')}>
        <button 
        className={cx('btn')} 
        onClick={handleSignUp}
        >Sign Up</button>
        
        <Link to={'/'} className={cx('back')} ><Back title='Go back to Home' /></Link>
        </div>
    </form>
  </div>
    
  );
}

export default SignUp