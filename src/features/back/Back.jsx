import classNames from "classnames/bind";
import styles from './Back.module.scss'
import { faArrowLeft, faBackspace, faBackward } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Tippy from "@tippyjs/react";
const cx = classNames.bind(styles)

function Back({title}){
  
  return (
   <Tippy content={title}
  
   arrow={true}
   theme='material'
  placement="bottom"
   
   >
      <div className={cx('back')} >
        <FontAwesomeIcon icon={faArrowLeft} >
          </FontAwesomeIcon>
          </div>
   </Tippy>
  )
}

export default Back