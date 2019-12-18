import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import ErrorBoundary from '../ErrorBoundary/ErrorBoundary.component';

class FilmDescription extends React.PureComponent {
  constructor(props) {
    super(props);
  }

  render() {
    const { film } = this.props;
    
    return (
      <ErrorBoundary>
        <section className="chosen-film">
          <div className="metabar">
            <Link to="/">
              <button type="button" className="back-to-search">Back to search</button>
            </Link>
          </div>
          <div className="film-details-wrapper">
            <img className="film-image" src={film.poster_path} alt="" />
            <div className="film-details">
              <div className="film-name-rating-wrapper">
                <span className="film-name">{film.title}</span>
                <span className="film-rating">{film.vote_average}</span>
              </div>
              <span className="film-awards">Oscar winning Movie</span>
              <div className="film-name-year-duration">
                <span className="film-year">{film.release_date}</span>
                <span className="film-duration">{film.runtime} min</span>
              </div>
              <div className="film-description">
                {film.overview}
              </div>
            </div>
          </div>
        </section>
      </ErrorBoundary>
    );
  }
}

FilmDescription.propTypes = {
  selectedFilm: PropTypes.object,
};

const mapStateToProps = state => ({
  film: state.selectedFilm,
});

const mapDispatchToProps = {
};

export default connect(mapStateToProps, mapDispatchToProps)(FilmDescription);
