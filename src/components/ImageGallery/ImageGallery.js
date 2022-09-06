import ImageGalleryItem from 'components/ImageGalleryItem';
const ImageGallery = ({ images }) => {
  return (
    <ul className="gallery">
      {images.map(image => {
        return <ImageGalleryItem image={image} key={image.id} />;
      })}
    </ul>
  );
};

export default ImageGallery;
