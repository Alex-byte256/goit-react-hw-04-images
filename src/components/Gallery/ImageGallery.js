import css from './ImageGallery.module.css'
import ImageGalleryItem from './ImageGalleryItem';
import PropTypes from 'prop-types';

function ImageGallery (props){


    return(
      <ul className={css.ImageGallery}>
        {props.hits.map(el => {
        return  <ImageGalleryItem largeImg={el.largeImageURL} key={el.id}  webformatURL={el.webformatURL}/>
        })}
      </ul>
    )

}

ImageGallery.propTypes = {
  onSubmit: PropTypes.arrayOf(PropTypes.shape)
}

export default ImageGallery;
