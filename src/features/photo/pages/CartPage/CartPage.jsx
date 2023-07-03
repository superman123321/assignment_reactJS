import React, {
  Suspense,
  memo,
  useEffect,
  useLayoutEffect,
  useState,
} from "react";
import classNames from "classnames/bind";
import styles from "./CartPage.module.scss";
import Back from "~/features/back/Back";

import Image from "~/constants/images";
import { Link, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import Loading from "~/components/loading/Loading";
import { getListPhoto, postPhoto } from "../../photoThunk";
import { Button } from "reactstrap";

const cx = classNames.bind(styles);

function CartPage() {
  let [checkPhotoList, setCheckPhotoList] = useState([]);
  const [photoList, setPhotoList] = useState(Image);
  let newImage = [...photoList];
  const dispatch = useDispatch();
  const { photoId } = useParams();
  const photos = useSelector((state) => {
    return state.photoReducer.photos;
  });

  useEffect(() => {
    if (photos.length === 0) {
      dispatch(getListPhoto());
    }
    checkArrPhoto();
  }, [dispatch, photos.length]);

  const checkArrPhoto = () => {
    console.log("photos", photos);
    console.log("photoList", photoList);
    const idSet = new Set(photos.map((item) => item.photo));
    const filteredB = photoList.filter((item) => !idSet.has(item.photo));
    console.log("filteredB", filteredB);
    setCheckPhotoList(filteredB);
  };

  const handleBuy = (photo) => {
    const indexImg = newImage.findIndex((img) => img.photo === photo);
    if (indexImg !== -1) {
      dispatch(postPhoto(newImage[indexImg]));
      newImage.splice(indexImg, 1);
      checkPhotoList.splice(indexImg, 1);
      setPhotoList(newImage);
    }
  };

  return (
    <div className={cx("cart-page")}>
      <div className={cx("back")}>
        <Link
          className={cx("cart-link")}
          to={photoId ? `/photos/${photoId}` : "/photo/add"}
        >
          {" "}
          <Back title="Go back to previous page" />{" "}
        </Link>
      </div>

      <div>
        <h1>Buy premium photos</h1>

        <Suspense fallback={<Loading />}>
          <div className={cx("photo-list")}>
            {checkPhotoList.length > 0 ? (
              <div className={cx("photo-list__wrapper")}>
                {checkPhotoList.map((photo) => {
                  return (
                    <div className={cx("photo-list__item")} key={photo.photo}>
                      {" "}
                      <img
                        src={photo.photo}
                        alt="hinhanh"
                        className={cx("photo-list__img")}
                      />
                      <Button
                        className={cx("photo-list__btn")}
                        onClick={() => handleBuy(photo.photo)}
                      >
                        Buy this image
                      </Button>
                    </div>
                  );
                })}
              </div>
            ) : (
              <div className={cx("no-more")}>No more premium pics</div>
            )}
          </div>
        </Suspense>
      </div>
    </div>
  );
}

export default React.memo(CartPage);
