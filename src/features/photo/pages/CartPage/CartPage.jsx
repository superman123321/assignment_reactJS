
import React,{ Suspense, memo, useEffect, useLayoutEffect, useState, } from "react";
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
  
  const [photoList, setPhotoList] = useState(Image);
  let newImage = [...photoList];

  const photos = useSelector((state) => {
  
    return state.photoReducer.photos;
  });

  
  useEffect(()=>{
    if (photos.length === 0) {
      dispatch(getListPhoto());
    }
    checkArrPhoto();
  }, [newImage])

  const checkArrPhoto = () =>{
    console.log('photos',photos);
  photoList.forEach(element1 => {
    photos.forEach(element2 => {
     const isEle =  element1.id === element2.id
      if(isEle){
         photoList.filter(element => element.id !== element2.id)
  console.log('photoList', photoList);

         setPhotoList(photoList)
      }
    });
  });
  }

  

  const { photoId } = useParams();
  const dispatch = useDispatch();
  const handleBuy = (id) => {
    const indexImg = newImage.findIndex((img) => img.id === id);
    if (indexImg !== -1){
      dispatch(postPhoto(newImage[indexImg]))
      newImage.splice(indexImg, 1);
    
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
                    <Button
                      className={cx("photo-list__btn")}
                      onClick={() => handleBuy(photo.id)}
                    >
                      Buy this image
                    </Button>
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

export default React.memo(CartPage);
