import { useSelector } from "react-redux";
import Banner from "../../../../components/banner/Banner";
import classNames from "classnames/bind";
import styles from './MainPage.module.scss'
import { Link } from "react-router-dom";


const cx = classNames.bind(styles)

function MainPage(){
 

 
  return (
    <div>
      <Banner title="Your photo libary" />
  
      <div className={cx('box-link')}><Link className={cx('btn')} to="/photo/add" >Add new photos</Link></div>
    </div>
  )
}

export default MainPage