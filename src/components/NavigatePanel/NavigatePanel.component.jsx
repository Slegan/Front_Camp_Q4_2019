import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { setSortBy, fetchAllFilms } from '../../actions/films.actions';
import ToggleButtons from '../ToggleButtons/ToggleButtons.component';
import GenreLabel from '../GenreLabel/GenreLabel.component';
import ErrorBoundary from '../ErrorBoundary/ErrorBoundary.component';

class NavigatePanel extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      toggleButtons: {
        title: 'Sort by',
        leftButton: 'Release date',
        rightButton: 'Rating',
      },
    };

    this.setSortByReleaseDate = this.setSortByReleaseDate.bind(this);
    this.setSortByRating = this.setSortByRating.bind(this);
  }

  setSortByReleaseDate() {
    this.props.history.push(`/sortByRelease/`, this.props.location.state);
    this.props.setSortBy(true);
  }

  setSortByRating() {
    this.props.history.push(`/sortByRating/`, this.props.location.state);
    this.props.setSortBy(false);
  }

  render() {
    let genre;

    if(this.props.selectedFilm
      && this.props.selectedFilm.genres
      && this.props.selectedFilm.genres[0]) {
      genre = this.props.selectedFilm.genres[0];
    } else if (this.props.searchGenre) {
      genre = this.props.searchGenre;
    }

    return (
      <ErrorBoundary>
        <section className="navigate-panel">
          <GenreLabel 
            activeMarker={this.props.searchByTtile}
            genre={genre}
            count={this.props.films.length}
          />
          <ToggleButtons 
            buttonsProp={this.state.toggleButtons}
            leftButtonAction={this.setSortByReleaseDate}
            rightButtonAction={this.setSortByRating}
            activeMarker={this.props.sortByDate}
          />
        </section>
      </ErrorBoundary>
    );
  }
}

NavigatePanel.propTypes = {
  sortByDate: PropTypes.bool,
  searchByTtile: PropTypes.bool,
  selectedFilm: PropTypes.object,
  films: PropTypes.array,
  searchGenre: PropTypes.string || null,
};

const mapStateToProps = state => ({
  sortByDate: state.sortByDate,
  searchByTtile: state.searchByTtile,
  selectedFilm: state.selectedFilm,
  films: state.films,
  searchGenre: state.searchGenre,
});

const mapDispatchToProps = {
  fetchAllFilms,
  setSortBy,
};

export default connect(mapStateToProps, mapDispatchToProps)(NavigatePanel);
