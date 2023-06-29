import classNames from "classnames/bind";
import styles from './Cart.module.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";

import Tippy from "@tippyjs/react";

const cx = classNames.bind(styles)

function Cart (){
  return (
    <div
    // placement="Bottom"
    // followCursor={true}
    // theme="material"
    // arrow={true}
    >
    <div className={cx('cart')} >
      <FontAwesomeIcon icon={faCartShopping}  />
      </div>
     
    
    </div>
  )
}

export default Cart