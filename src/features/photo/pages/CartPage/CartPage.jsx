import classNames from "classnames/bind";
import styles from "./CartPage.module.scss";
import Back from "~/features/back/Back";

import Image from "~/constants/images";
import { Link, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";


import { Suspense, useEffect, useLayoutEffect, useState } from "react";
import Loading from "~/components/loading/Loading";
import { postPhoto } from "../../photoThunk";

const cx = classNames.bind(styles);

function CartPage() {
  // set stat hiển thị
  const [photoList, setPhotoList] = useState(Image);

  

  const { photoId } = useParams();
  const dispatch = useDispatch();
  const handleBuy = (id) => {
    let newImage = [...photoList];
    const indexImg = newImage.findIndex((img) => img.id === id);
    
    if (indexImg !== -1){
      dispatch(postPhoto(newImage[indexImg]))
      newImage.splice(indexImg, 1);
    console.log(newImage);

    setPhotoList(newImage);}
    
    
  };

  return (
    <div className={cx("cart-page")}>
      <div className={cx("back")}>
        <Link
          className={cx("cart-link")}
          to={photoId ? `/photos/${photoId}` : "/photo/add"}
        >
          {" "}
          <Back  title='Go back to previous page' />{" "}
        </Link>
      </div>

      <div>
        <h1>Buy premium photos</h1>

        <Suspense fallback={<Loading />}>
          <div className={cx("photo-list")}>
      { photoList.length > 0 ?      (<div className={cx("photo-list__wrapper")}>
              {photoList.map((photo) => {
                return (
                  <div className={cx("photo-list__item")} key={photo.id}>
                    {" "}
                    <img
                      src={photo.photo}
                      alt="hinhanh"
                      className={cx("photo-list__img")}
                    />
                    <div
                      className={cx("photo-list__btn")}
                      onClick={() => handleBuy(photo.id)}
                    >
                      Buy this image
                    </div>
                  </div>
                );
              })}
            </div>) :(<div className={cx('no-more')} >No more premium pics</div>) }
          </div>
        </Suspense>
      </div>
    </div>
  );
}

export default CartPage;
