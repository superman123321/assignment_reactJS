import classNames from "classnames/bind";
import styles from './addEdit.module.scss'
import Banner from "../../../../components/banner/Banner";
import PhotoForm from "../../component/photoForm/PhotoForm";
import Cart from "../../../cart/Cart";
import Back from "../../../back/Back";
import { Link } from "react-router-dom";
const cx = classNames.bind(styles)

function AddEdit(){

  return (
    <div className={cx('photo-edit')} >
      <Banner title="😎 Pick your amazing photo 😎" />
      <div className={cx('photo-edit__nav')} >
        <div className={cx('photo-edit__nav-1')}>
          <Cart />
        </div>

        <Link className={cx('photo-edit__nav-2')} to={"/photo"}>
          <Back />
        </Link>
      </div>
      <div className={cx('photo-edit__form')}>
        <PhotoForm />
      </div>
    </div>
  )
}

export default AddEdit