import React from 'react';

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <header className="header">
        <div className="header_search-wrapper">
          <input 
            type="text"
            className="header_search-input"
            placeholder="Search"
          />
          <button
            className="header_search-button"
          >Search</button>
        </div>
        <div className="radio-wrapper">
          <span>Search by</span>
          <button
            type="button"
            className="radio-button radio-button_left radio-button--active"
          >Title</button>
          <button
            type="button"
            className="radio-button radio-button_right"
          >Gengre</button>
        </div>
      </header>
    );
  }
}

export default Header;