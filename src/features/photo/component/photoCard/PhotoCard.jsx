import classNames from "classnames/bind";
import styles from './PhotoCard.module.scss'
import { Button } from "reactstrap";

const cx = classNames.bind(styles)

function PhotoCard (props) {
  const {photo, onEditClick, onRemoveClick} =props
  const isPremium = photo.title ==='Premium'
  console.log('asd',isPremium)
  const handleEditClick = () => {
    if (onEditClick) onEditClick(photo);
  };

  const handleRemoveClick = () => {
    if(isPremium){
      const confirmed = window.confirm("Are you sure you want to delete this photo?");
      if (confirmed) {
        onRemoveClick(photo)
      } else {
        return
      }
      
    }
    if (!isPremium) onRemoveClick(photo);
  };
  return (
    <div className={cx('photo')}>
      <img src={photo.photo} alt={photo.title} />

      <div className={cx('photo__overlay')} >
        <h3 className={cx('photo__tile')} >{photo.title}</h3>

        <div className={cx('photo_actions')} >
             {isPremium ? (<div></div>) : (

            
               <div >
                <button className={cx('btn-edit')}
                  onClick={handleEditClick}
                
                >
                  <div className={cx('white')}>Edit</div>
                </button>
              </div>
    
            

             )}
              
              <div>
                <button className={cx('btn-del')}
                  onClick={handleRemoveClick}
                 
                
                >
                  {isPremium ? (<div className={cx('red')}>Discard this image</div>) :
                   (<div className={cx('red')}>Remove</div>)
                  }
                </button>
              </div> 
          
        
        </div>


      </div>
    </div>
  )
}

export default PhotoCard