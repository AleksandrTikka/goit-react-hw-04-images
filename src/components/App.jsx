import { Component } from 'react';
import Searchbar from './Searchbar';
import ImageGallery from './ImageGallery';
import Loader from './Loader';
import Button from './Button';
import Message from './Message';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { fetchImages } from 'services/api';

export default class App extends Component {
  state = {
    page: 1,
    totalPage: null,
    query: '',
    status: 'idle',
    hits: [],
    error: null,
    onModal: false,
  };

  async componentDidUpdate(prevProps, prevState) {
    const prevQuery = prevState.query;
    const newQuery = this.state.query;
    const prevPage = prevState.page;
    const newPage = this.state.page;
    if (newQuery !== prevQuery || newPage !== prevPage) {
      try {
        this.setState({ status: 'pending' });

        const images = await fetchImages(newQuery, newPage);
        const { total, totalHits, hits } = images;
        if (total === 0) {
          toast.error(
            'Sorry, there are no images matching your search query. Please try again.'
          );
          this.setState({
            status: 'idle',
          });
          return;
        }

        // if (images.totalHits > 0) {
        this.setState(prevState => ({
          hits: [...prevState.hits, ...hits],
        }));
        this.setState({ status: 'resolved' });

        this.setState({ totalPage: Math.ceil(totalHits / 12) });

        const { totalPage, page } = this.state;
        if (totalPage === page) {
          toast.error(
            "We're sorry, but you've reached the end of search results."
          );
        }

        // }
      } catch (error) {
        this.setState({ status: 'rejected', error: error });
        console.log(error);
      }
    }
  }

  handleSearchQuery = input => {
    this.setState({
      page: 1,
      totalPage: null,
      hits: [],
      query: input.trim(),
      status: 'idle',
    });
  };

  render() {
    const { page, totalPage, status, error, hits } = this.state;
    return (
      <div>
        <Searchbar getSearchQuery={this.handleSearchQuery} />
        {status === 'resolved' && <ImageGallery images={hits} />}
        {status === 'pending' && <Loader />}
        {status === 'resolved' && totalPage > page && <Button />}
        {status === 'rejected' && <Message>{error.message}</Message>}

        <ToastContainer position="top-center" autoClose={3000} />
      </div>
    );
  }
}
