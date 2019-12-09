import React from 'react';
import ToggleButtons from '../ToggleButtons/ToggleButtons.component';

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      toggleButtons: {
        title: 'Search by',
        leftButton: 'Title',
        rightButton: 'Gengre',
      },
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
            type="button"
            className="header_search-button"
          >
            Search
          </button>
        </div>
        <ToggleButtons toggleButtons={this.state.toggleButtons} />
      </header>
    );
  }
}

export default Header;
