import React from 'react';
import { Link } from 'react-router-dom';
import ToggleButtons from '../ToggleButtons/ToggleButtons.component';
import ErrorBoundary from '../ErrorBoundary/ErrorBoundary.component';

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      toggleButtons: {
        title: 'Search by',
        leftButton: 'Title',
        rightButton: 'Genre',
      },
    };
  }

  render() {
    return (
      <ErrorBoundary>
        <section className="header">
          <div className="header_search-wrapper">
            <input
              type="text"
              className="header_search-input"
              placeholder="Search"
            />
            <Link to="/film:123">
              <button
                type="button"
                className="header_search-button"
              >
                Search
              </button>
            </Link>
          </div>
          <ToggleButtons buttonsProp={this.state.toggleButtons} />
        </section>
      </ErrorBoundary>
    );
  }
}

export default Header;
