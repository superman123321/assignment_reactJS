import classNames from "classnames/bind";
import styles from './addEdit.module.scss'
import Banner from "~/components/banner/Banner";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams, useResolvedPath } from "react-router-dom";

import { Link } from "react-router-dom";
import Cart from "~/features/cart/Cart";
import Back from "~/features/back/Back";
import PhotoForm from "../../component/photoForm/PhotoForm";
import { editPhoto, getListPhoto, postPhoto } from "../../photoThunk";
import { useEffect } from "react";

const cx = classNames.bind(styles)

function AddEdit(){
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const photos = useSelector((state) => state.photoReducer.photos);
  const { photoId } = useParams();
  const isAddMode = !photoId;
  console.log('111', photoId)

  const photoEdit = photos.find((photo) => photo.id === photoId);
  useEffect(() => {
    if (photos.length === 0) {
      dispatch(getListPhoto());
    }
  }, []);
  const initialValues = isAddMode
    ? {
        title: "",
        categoryId: null,
        photo: "",
      }
    : photoEdit;

  const handleSubmit = (values) => {
    if (isAddMode) {
      const action = postPhoto(values);
      dispatch(action);
    } else {
      const action = editPhoto(values);
      dispatch(action);
    }
    navigate("/photo");
  };
  return (
    <div className={cx('photo-edit')} >
      <Banner title="😎 Pick your amazing photo 😎" />
      <div className={cx('photo-edit__nav')} >
        <Link className={cx('photo-edit__nav-1')} to={ photoId ? `/photo/cart/${photoId}` : "/photo/cart"}>
          <Cart  />
        </Link>

        <Link className={cx('photo-edit__nav-2')} to={"/photo"}>
          <Back title='Go back to previous page'/>
        </Link>
      </div>
      <div className={cx('photo-edit__form')}>
        <PhotoForm 
          idAddMode={isAddMode}
          initialValues={initialValues}
          onSubmit={handleSubmit}
        />
      </div>
    </div>
  )
}

export default AddEdit