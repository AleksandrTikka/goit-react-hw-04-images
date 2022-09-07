import ImageGalleryItem from 'components/ImageGalleryItem';
import css from './ImageGallery.module.css';
const ImageGallery = ({ images }) => {
  return (
    <ul className={css.imageGallery}>
      {images.map(image => {
        return <ImageGalleryItem image={image} key={image.id} />;
      })}
    </ul>
  );
};

export default ImageGallery;
