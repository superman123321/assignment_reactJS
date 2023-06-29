import { useRef } from "react";
import classNames from "classnames/bind";
import styles from "./Login.module.scss";
import Back from "~/features/back/Back";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "reactstrap";

const cx = classNames.bind(styles);

function LogIn({

  SetAccName,
  SetIsLogin
}) {

  const userVal1 = useRef()
  const userPass1 = useRef()

  const acc = JSON.parse(localStorage.getItem('acc'))
  const naviagte = useNavigate()
  const handleLogin = ()=>{
   

    if (userVal1.current.value === acc.username && userPass1.current.value === acc.password){
      SetAccName(userVal1.current.value)
      SetIsLogin(true)
      naviagte('/photo')
    }else{
      window.alert('aaaa')
    }
   
  }
  return (
    <div className={cx('wrapper')}>
      <h1>Please enter your username and password</h1>
      <form action="" className={cx('wrapper-form')}>
        <div class={cx("wrapper-input1")}>
          <label htmlFor="user" className={cx('user')}>User Name</label>
          <input id="user" 
          type="text" 
          placeholder="Please input your username" 
          className={cx('user-input')}
          ref={userVal1}
          />
          

        
        </div>

        <div class={cx("wrapper-input2")}>
        <label htmlFor="password" className={cx('password')} >Password</label>
        <input 
        id="password" 
        type="password" 
        className={cx('password-input')}
        placeholder="Please input your password" 
        ref={userPass1}
        />
         
        </div>



        <div className={cx('wrapper-action')}>
          <Button className={cx('btn')} 
          onClick={handleLogin}
          >Log in
          </Button>
          
          <Link to={'/'} className={cx('back')} ><Back title='Go back to Home' /></Link>
          </div>
      </form>
    </div>
  );
}

export default LogIn;
