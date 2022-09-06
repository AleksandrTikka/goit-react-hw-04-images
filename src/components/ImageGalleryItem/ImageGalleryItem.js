import { Component } from 'react';
import Modal from 'components/Modal';

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
      <li className="gallery-item">
        <img src={webformatURL} alt={tags} onClick={this.toggleModal} />
        {this.state.isModalOpen && (
          <Modal onClose={this.toggleModal}>
            <img src={largeImageURL} alt={tags} />
          </Modal>
        )}
      </li>
    );
  }
}
