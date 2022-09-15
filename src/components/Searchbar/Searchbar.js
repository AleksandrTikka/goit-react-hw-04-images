import { useState } from 'react';
import { IoIosSearch } from 'react-icons/io';
import { toast } from 'react-toastify';
import css from './Searchbar.module.css';
import PropTypes from 'prop-types';

export default function Searchbar({ getSearchQuery }) {
  const [input, setInput] = useState('');

  const handleInputChange = e => {
    setInput(e.currentTarget.value.toLowerCase());
  };

  const handleSabmit = e => {
    e.preventDefault();
    input.trim() === ''
      ? toast.error('Search input is empty... Please enter a new word')
      : getSearchQuery(input);

    e.currentTarget.reset();
  };

  return (
    <header className={css.searchbar}>
      <form className={css.searchForm} onSubmit={handleSabmit}>
        <button type="submit" className={css.searchForm__button}>
          <IoIosSearch size={24} />
          {/* <span className="button-label">Search</span> */}
        </button>

        <input
          className={css.searchForm__input}
          name="input"
          value={input}
          onChange={handleInputChange}
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
        />
      </form>
    </header>
  );
}

Searchbar.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
