import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { setSearchBy, requestSearch } from '../../actions/films.actions';
import ToggleButtons from '../ToggleButtons/ToggleButtons.component';
import ErrorBoundary from '../ErrorBoundary/ErrorBoundary.component';

class SearchBox extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      toggleButtons: {
        title: 'Search by',
        leftButton: 'Title',
        rightButton: 'Genre',
      },
      inputValue: '',
    };

    this.searchByTitle = this.searchByTitle.bind(this);
    this.searchByGenre = this.searchByGenre.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
    this.requestSearch = this.requestSearch.bind(this);
  }

  searchByTitle() {
    this.props.setSearchBy(true);
  }

  searchByGenre() {
    this.props.setSearchBy(false);
  }

  handleInputChange(event) {
    this.setState({inputValue: event.target.value});
  }

  requestSearch() {
    const { sortByDate, searchByTtile } = this.props;
    this.props.requestSearch(sortByDate, searchByTtile, this.state.inputValue);
    this.props.history.push(`/search/Search${this.state.inputValue}/`, this.props.location.state);
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
              onChange={this.handleInputChange}
              value={this.state.inputValue}
            />
            <button
              type="button"
              className="header_search-button"
              onClick={this.requestSearch}
            >
              Search
            </button>
          </div>
          <ToggleButtons
            buttonsProp={this.state.toggleButtons}
            leftButtonAction={this.searchByTitle}
            rightButtonAction={this.searchByGenre}
            activeMarker={this.props.searchByTtile}
          />
        </section>
      </ErrorBoundary>
    );
  }
}

SearchBox.propTypes = {
  searchByTtile: PropTypes.bool,
  sortByDate: PropTypes.bool,
};

const mapStateToProps = state => ({
  searchByTtile: state.searchByTtile,
  sortByDate: state.sortByDate,
});

const mapDispatchToProps = {
  setSearchBy,
  requestSearch,
};

export default connect(mapStateToProps, mapDispatchToProps)(SearchBox);
