
import { useRef } from "react";
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

  const naviagte = useNavigate()

  const handleSignUp = () => {
    const acc = {
      username: userVal.current.value,
      password: userPass.current.value,
      passwordConfirm: userPassCon.current.value
    }

    localStorage.setItem('acc',JSON.stringify(acc))
    naviagte('/login')
  }
  return (
  
    <div className={cx('wrapper')}>
    <h1>Create a new account</h1>
    <form action="" className={cx('wrapper-form')}>
      <div class={cx("wrapper-input1")}>
        <label htmlFor="user" className={cx('user')}>User Name</label>
        <input id="user" 
        type="text" 
        placeholder="Please input your username" 
        className={cx('user-input')}
        ref={userVal}
        />
        

      
      </div>

      <div class={cx("wrapper-input2")}>
      <label htmlFor="password" className={cx('password')} >Password</label>
      <input 
      id="password" 
      type="password" 
      className={cx('password-input')}
      placeholder="Please input your password" 
      ref={userPass}
      />
       
      </div>

      <div class={cx("wrapper-input2")}>
      <label htmlFor="password" className={cx('password')} >Password Confirmation</label>
      <input 
      id="password" 
      type="password" 
      className={cx('password-input')}
      placeholder="Confirm your password" 
      ref={userPassCon}
      />
       
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