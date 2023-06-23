import classNames from "classnames/bind";
import styles from './Header.module.scss'
import { NavLink } from "react-router-dom";


const cx = classNames.bind(styles)

function Header (){


  return (
    <header className={cx('header')} >
      <div className={cx('header__list')} >
        <a href="https://vtiacademy.edu.vn/"
           target="_blank"
           className={cx('header__left')}
        > VTI Academy </a>
      </div>

      <div className={cx('header__list')} >
        <NavLink
        exact="true"
        to="/"
        className={cx('header__home')}
        >
          
          Home </NavLink>
      </div>

      <div className={cx('header__list')} >
        <NavLink
        exact="true"
        to="/photo"
        className={cx('header__link')}
        >
          
          Photo app </NavLink>
      </div>
    </header>
  )
}
export default Header