import { Component } from 'react';
import Searchbar from './Searchbar';
import ImageGallery from './ImageGallery';
import Loader from './Loader';
import Button from './Button';
import Message from './Message';
import Modal from './Modal';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { fetchImages } from '../services/api';

export default class App extends Component {
  state = {
    page: 1,
    totalPage: null,
    query: '',
    status: 'idle',
    hits: [],
    error: null,
  };

  handleSearchQuery = input => {
    this.setState({
      page: 1,
      hits: [],
      query: input.trim(),
    });
  };

  async componentDidUpdate(prevProps, prevState) {
    const prevQuery = prevState.query;
    const newQuery = this.state.query;
    const prevPage = prevState.page;
    const newPage = this.state.page;
    if (prevQuery !== newQuery || prevPage !== newPage) {
      try {
        this.state({ status: 'pending' });
        const images = await fetchImages(newQuery, newPage);

        if (images.totalHits === 0) {
          toast.error(
            'Sorry, there are no images matching your search query. Please try again.'
          );
          this.state({ status: 'idle' });
          return;
        }

        if (images.totalHits > 0) {
          this.setState({ status: 'resolved' });
          this.setState({ totalPage: Math.ceil(images.totalHits / 12) });
          const { totalPage, page } = this.state;
          if (totalPage === page) {
            toast.error(
              "We're sorry, but you've reached the end of search results."
            );
          }
          this.setState(prevState => ({
            hits: [...prevState.hits, ...images.hits],
          }));
        }
      } catch (error) {
        this.setState({ error: error, status: 'rejected' });
        console.error(error.message);
      }
    }
  }

  render() {
    const { page, totalPage, status, error } = this.state;
    return (
      <div>
        <Searchbar getSearchQuery={this.handleSearchQuery} />
        {status === 'resolved' && <ImageGallery />}
        {status === 'pending' && <Loader />}
        {status === 'resolved' && totalPage > page && <Button />}
        {status === 'rejected' && <Message>{error.message}</Message>}
        <Modal />
        <ToastContainer position="top-center" autoClose={3000} />
      </div>
    );
  }
}
