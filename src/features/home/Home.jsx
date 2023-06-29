
import classNames from "classnames/bind";
import styles from './Home.module.scss'
import Image from "../../constants/images";
const cx = classNames.bind(styles)
function Home(){
    const landscape=  Image.landscape
  return (
    <>
    <div className={cx('title')} >Welcome to Home page</div>
    <div className={cx('img')} >
      <img className={cx('img__fix')} 
      src={Image[0].photo} 
      alt="Hinhanh" 
      />
       </div>
    </>
   
  )
}

export default Home