import classNames from "classnames/bind";
import styles from './RandomPhoto.module.scss'
import { Button } from "reactstrap";





const cx = classNames.bind(styles)


function RandomPhoto(props) {
  const { name, imageUrl, onImageUrlChange, onRandomButtonBlur } = props;

  const getRandomImageUrl = () => {
    const randomId = Math.trunc(Math.random() * 2000);
  
     return `https://picsum.photos/id/${randomId}/500/300`;
  };
  const handleRandomPhotoClick = () => {
    if (onImageUrlChange) {
      const randomImageUrl = getRandomImageUrl();
      onImageUrlChange(randomImageUrl);
    }
  };
  
  return (
    <div className={cx('random-photo')}>
      <Button 
      
      className={cx('btn-random')} 
      onClick={handleRandomPhotoClick}
     
      
      
      >Click to random a photo</Button>

      <div className={cx('pic')} >
      <div>{imageUrl && <img src={imageUrl} alt={name} onError={handleRandomPhotoClick}/>}</div>
      </div>
    </div>
  )
}

export default RandomPhoto