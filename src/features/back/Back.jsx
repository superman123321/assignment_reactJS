import classNames from "classnames/bind";
import styles from './Back.module.scss'
import { faArrowLeft, faBackspace, faBackward } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const cx = classNames.bind(styles)

function Back(){

  return (
    <div className={cx('back')} ><FontAwesomeIcon icon={faArrowLeft} ></FontAwesomeIcon></div>
  )
}

export default Back