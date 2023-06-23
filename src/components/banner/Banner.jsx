import classNames from "classnames/bind";
import styles from './Banner.module.scss'

const cx = classNames.bind(styles)


function Banner ({
  title
}){

  
  return (
    <section className={cx("banner")} >
      <h1 className={cx("banner__title")}>{title}</h1>
    </section>
  );
}

export default Banner