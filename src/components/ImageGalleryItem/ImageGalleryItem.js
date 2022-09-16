import { useState } from 'react';
import Modal from 'components/Modal';
import css from './ImageGalleryItem.module.css';
import PropTypes from 'prop-types';

export default function ImageGalleryItem({ image }) {
  const { webformatURL, tags, largeImageURL } = image;
  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleModal = () => setIsModalOpen(isModalOpen => !isModalOpen);

  return (
    <li className={css.imageGalleryItem}>
      <img
        src={webformatURL}
        alt={tags}
        className={css.imageGalleryItem__image}
        onClick={toggleModal}
      />
      {isModalOpen && (
        <Modal onClose={toggleModal}>
          <img src={largeImageURL} alt={tags} />
        </Modal>
      )}
    </li>
  );
}

ImageGalleryItem.propTypes = {
  image: PropTypes.shape({
    webformatURL: PropTypes.string.isRequired,
    tags: PropTypes.string.isRequired,
    largeImageURL: PropTypes.string.isRequired,
  }),
};
