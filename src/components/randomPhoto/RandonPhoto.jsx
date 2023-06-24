import classNames from "classnames/bind";
import styles from './RandomPhoto.module.scss'
import Image from '../../constants/images'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";



const cx = classNames.bind(styles)


function RandomPhoto(props) {
  const { name, imageUrl, onImageUrlChange, onRandomButtonBlur } = props;

  const handleRandomPhotoClick = () => {
    if (onImageUrlChange) {
      const randomImageUrl = getRandomImageUrl();
      onImageUrlChange(randomImageUrl);
    }
  };
  const getRandomImageUrl = () => {
    const randomId = Math.trunc(Math.random() * 2000);
  
     return `https://picsum.photos/id/${randomId}/300/300`;
  };
  return (
    <div className={cx('random-photo')}>
      <button className={cx('btn-random')} 
      onClick={handleRandomPhotoClick}
     
      
      
      >Click to random a photo</button>

      <div>
      <div>{imageUrl && <img src={imageUrl} alt={name} />}</div>
      </div>
    </div>
  )
}

export default RandomPhoto