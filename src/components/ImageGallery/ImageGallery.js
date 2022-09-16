import ImageGalleryItem from 'components/ImageGalleryItem';
import css from './ImageGallery.module.css';
import PropTypes from 'prop-types';
const ImageGallery = ({ images }) => {
  return (
    <ul className={css.imageGallery}>
      {images.map((image, index) => {
        return <ImageGalleryItem image={image} key={index} />;
      })}
    </ul>
  );
};
ImageGallery.propTypes = {
  images: PropTypes.array,
  image: PropTypes.shape({
    key: PropTypes.number.isRequired,
  }),
};
export default ImageGallery;
