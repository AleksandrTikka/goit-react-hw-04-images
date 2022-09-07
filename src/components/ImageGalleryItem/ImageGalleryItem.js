import { Component } from 'react';
import Modal from 'components/Modal';
import css from './ImageGalleryItem.module.css';

export default class ImageGalleryItem extends Component {
  state = {
    isModalOpen: false,
  };

  toggleModal = () => this.setState({ isModalOpen: !this.state.isModalOpen });

  render() {
    const {
      image: { webformatURL, tags, largeImageURL },
    } = this.props;
    return (
      <li className={css.imageGalleryItem}>
        <img
          src={webformatURL}
          alt={tags}
          className={css.imageGalleryItem__image}
          onClick={this.toggleModal}
        />
        {this.state.isModalOpen && (
          <Modal onClose={this.toggleModal}>
            <img src={largeImageURL} alt={tags} />
          </Modal>
        )}
      </li>
    );
  }
}
