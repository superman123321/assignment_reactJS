import classNames from "classnames/bind";
import styles from './Cart.module.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";



const cx = classNames.bind(styles)

function Cart (){
  return (
    <>
    <div className={cx('cart')} ><FontAwesomeIcon icon={faCartShopping}  /></div>
     
    
    </>
  )
}

export default Cart