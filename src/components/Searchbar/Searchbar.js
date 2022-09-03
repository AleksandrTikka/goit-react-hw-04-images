import React, { Component } from 'react';
import { IoIosSearch } from 'react-icons/io';

export default class Searchbar extends Component {
  state = {
    input: '',
  };

  handleInputChange = e => {
    console.log(e.crrentTarget);
    this.setState({ input: e.currentTarget.value.toLowerCase() });
  };
  handleSabmit = e => {
    e.preventDefault();

    this.state.input.trim() === ''
      ? alert('Search input is empty... Please enter a new word')
      : this.props.onSubmit(this.state.input);

    // this.setState({ input: e.crrentTarget.value });
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
