import classNames from "classnames/bind";
import styles from './Loading.module.scss'






const cx = classNames.bind(styles)

function Loading() {

  return (
    <div className={cx('loading')}>
      Loading... Please wait!!!
    </div>
  )
}

export default Loading