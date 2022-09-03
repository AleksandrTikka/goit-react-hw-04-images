import { Component } from 'react';
import Searchbar from './Searchbar';
import ImageGallery from './ImageGallery';
// import Loader from './Loader';
import Button from './Button';
import Modal from './Modal';

export default class App extends Component {
  state = {
    page: null,
    query: '',
    loading: false,
  };

  handleSearchQuery = input => {
    this.setState({
      page: 1,
      query: input.trim(),
    });
  };

  componentDidMount() {}

  render() {
    return (
      <div>
        <Searchbar onSubmit={this.handleSearchQuery} />
        <ImageGallery />
        {/* <Loader /> */}
        <Button />
        <Modal />
      </div>
    );
  }
}
