import { useDispatch, useSelector } from "react-redux";
import Banner from "../../../../components/banner/Banner";
import classNames from "classnames/bind";
import styles from "./MainPage.module.scss";
import { Link, useNavigate } from "react-router-dom";

import PhotoList from "../../component/photoList/PhotoList";
import { deletePhoto, getListPhoto } from "../../photoThunk";
import { useEffect } from "react";
import Loading from "~/components/loading/Loading";

const cx = classNames.bind(styles);

function MainPage({ isLogin, accName }) {
  const photos = useSelector((state) => {
    console.log("12312", state);
    return state.photoReducer.photos;
  });
  const isLoading = useSelector((state) => state.photoReducer.isLoading);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleRemove = (photo) => {
    const action = deletePhoto(photo.id);
    dispatch(action);
  };

  useEffect(() => {
    dispatch(getListPhoto());
  }, []);

  const handleEdit = (photo) => {
    navigate(`/photos/${photo.id}`);
  };

  return (
    <div className={cx("photo-main")}>
      {isLogin ? (
        <Banner title={`${accName}'s album `} />
      ) : (
        <Banner title="Your photo libary" />
      )}

      {isLogin ? (
        <div className={cx("box-link")}>
          <Link className={cx("btn")} to="/photo/add">
            Add new photos
          </Link>
        </div>
      ) : (
        <div className={cx("box-link")}>
          <div className={cx("btn-disabled")}>Add new photos</div>
        </div>
      )}

      <div>
        {isLoading ? (
          <Loading />
        ) : photos.length > 0 && isLogin ? (
          <PhotoList
            photoList={photos}
            onPhotoEditClick={handleEdit}
            onPhotoRemoveClick={handleRemove}
          />
        ) : isLogin ? (
          <div className={cx("album")}>No photo in your album</div>
        ) : (
          <div className={cx("album-not")}> Please Login to see photo </div>
        )}
      </div>
    </div>
  );
}

export default MainPage;
