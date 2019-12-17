import React from 'react';
import ErrorBoundary from '../ErrorBoundary/ErrorBoundary.component';
import { Link } from 'react-router-dom';

class FilmPreviewCard extends React.PureComponent {
  constructor(props) {
    super(props);

    this.selectFilm = this.selectFilm.bind(this);
  }

  selectFilm () {
    console.log(this.props, 'la');
    
    this.props.selectFilm(this.props.film.id);
  }

  render() {
    const { film } = this.props;
    const filmGenre = film.genres.join(', ');   
    
    return (
      <ErrorBoundary>
        <div className="film-preview-card">
          <Link 
            onClick={this.selectFilm}
            to={`/film/${film.id}`}>
              <img src={film.poster_path} alt="" />
          </Link>
          <div className="film-caption">
            <div className="card-caption-wrapper">
              <span className="film-name">{film.title}</span>
              <span className="film-year">{film.release_date}</span>
            </div>
            <span className="film-genre">{filmGenre}</span>
          </div>
        </div>
      </ErrorBoundary>
    );
  }
}

export default FilmPreviewCard;
