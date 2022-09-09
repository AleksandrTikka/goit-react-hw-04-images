import ImageGalleryItem from 'components/ImageGalleryItem';
import css from './ImageGallery.module.css';
import PropTypes from 'prop-types';
const ImageGallery = ({ images }) => {
  return (
    <ul className={css.imageGallery}>
      {images.map(image => {
        return <ImageGalleryItem image={image} key={image.id} />;
      })}
    </ul>
  );
};
ImageGallery.propTypes = {
  images: PropTypes.array.isRequired,
};
export default ImageGallery;
