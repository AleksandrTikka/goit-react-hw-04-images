import { useState, useEffect } from 'react';
import Searchbar from '../Searchbar';
import ImageGallery from '../ImageGallery';
import Loader from '../Loader';
import Button from '../Button';
import Message from '../Message';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { fetchImages } from 'services/api';
import css from './App.module.css';

export default function App() {
  const [page, setPage] = useState(1);
  const [totalPage, setTotalPage] = useState(null);
  const [query, setQuery] = useState('');
  const [hits, setHits] = useState([]);
  const [status, setStatus] = useState('idle');
  const [error, setError] = useState(null);

  useEffect(() => {
    if (query === '') {
      return;
    }
    (async function getImages() {
      try {
        setStatus('pending');
        const images = await fetchImages(query, page);
        const { total, totalHits, hits } = images;
        if (total === 0) {
          toast.error(
            'Sorry, there are no images matching your search query. Please try again.'
          );
          setStatus('idle');
          return;
        }
        setHits(prevHits => [...prevHits, ...hits]);
        setStatus('resolved');

        setTotalPage(Math.ceil(totalHits / 12));

        if (totalPage === page) {
          toast.error(
            "We're sorry, but you've reached the end of search results."
          );
        }
      } catch (error) {
        setError(error);
        setStatus('rejected');
        console.log(error);
      }
    })();
  }, [page, query, totalPage]);

  const handleSearchQuery = input => {
    setPage(1);
    setHits([]);
    setQuery(input.trim());
    setStatus('idle');
  };

  const handleMoreClick = () => {
    setPage(prevPage => prevPage + 1);
  };

  return (
    <div className={css.app}>
      <Searchbar getSearchQuery={handleSearchQuery} />
      {hits.length > 0 && <ImageGallery images={hits} />}
      {status === 'pending' && <Loader />}
      {
        status === 'resolved' && (
          <Button onLoadMore={handleMoreClick}>Load more</Button>
        )
        // && totalPage > page
      }

      {status === 'rejected' && <Message>{error.message}</Message>}

      <ToastContainer position="top-center" autoClose={3000} />
    </div>
  );
}
