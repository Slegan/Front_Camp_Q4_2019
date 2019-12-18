import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import FilmPreviewCard from '../FilmPreviewCard/FilmPreviewCard.component';
import EmptyPaga from '../EmptyPaga/EmptyPaga.component';
import { fetchAllFilms, fetchSelectedFilm } from '../../actions/films.actions';

class FilmsPreviewBox extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {};

    this.fetchSelectedFilm = this.fetchSelectedFilm.bind(this);
  }

  componentDidMount() {
    // this.props.fetchAllFilms(this.props.sortByDate);
  }

  fetchSelectedFilm (id) {
    this.props.fetchSelectedFilm(id);
  }

  render() {
    const { films } = this.props;
    if (!films.length) {
      return (
        <EmptyPaga />
      );
    }
    const arrToRender = [];
    for (let index = 0; index < films.length; index++) {
      arrToRender.push(
        <FilmPreviewCard 
          film={films[index]}
          selectFilm={this.fetchSelectedFilm}
          key={index}
        />
      );
    }
    return (
      <section className="films-preview-box">
        {arrToRender}
      </section>
    );
  }
}

FilmsPreviewBox.propTypes = {
  films: PropTypes.array,
  sortByDate: PropTypes.bool,
};

const mapStateToProps = state => ({
  films: state.films,
  sortByDate: state.sortByDate,
});

const mapDispatchToProps = {
  fetchAllFilms,
  fetchSelectedFilm,
};

export default connect(mapStateToProps, mapDispatchToProps)(FilmsPreviewBox);
