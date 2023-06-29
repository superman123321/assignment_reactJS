import classNames from "classnames/bind";
import styles from './PhotoList.module.scss'
import PhotoCard from "../photoCard/PhotoCard";
import { Col, Row } from "reactstrap";

const cx =classNames.bind(styles)

function PhotoList(props) {

  const { photoList, onPhotoEditClick, onPhotoRemoveClick } = props;


  return (
    <div className={cx('photo-List')}>
        {photoList.map((photo) => (
        <div key={photo.title} className={cx('photo-item')} >
          <PhotoCard
            photo={photo}
            onEditClick={onPhotoEditClick}
            onRemoveClick={onPhotoRemoveClick}
          />
        </div>
      ))}
    </div>
  )
}

export default PhotoList