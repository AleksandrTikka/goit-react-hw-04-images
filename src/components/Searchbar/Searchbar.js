import React, { Component } from 'react';
import { IoIosSearch } from 'react-icons/io';
import { toast } from 'react-toastify';

export default class Searchbar extends Component {
  state = {
    input: '',
  };

  handleInputChange = e => {
    this.setState({ input: e.currentTarget.value.toLowerCase() });
  };

  reset() {
    this.setState({ input: '' });
  }

  handleSabmit = e => {
    e.preventDefault();
    this.state.input.trim() === ''
      ? toast.error('Search input is empty... Please enter a new word')
      : this.props.getSearchQuery(this.state.input);

    this.reset();
  };

  render() {
    return (
      <header className="searchbar">
        <form className="form" onSubmit={this.handleSabmit}>
          <button type="submit" className="button">
            <IoIosSearch />
            <span className="button-label">Search</span>
          </button>

          <input
            className="input"
            name="input"
            value={this.state.input}
            onChange={this.handleInputChange}
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
          />
        </form>
      </header>
    );
  }
}
