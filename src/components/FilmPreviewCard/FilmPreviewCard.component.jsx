import React from 'react';
import ErrorBoundary from '../ErrorBoundary/ErrorBoundary.component';

class FilmPreviewCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <ErrorBoundary>
        <div className="film-preview-card">
          <img src="http://t2.gstatic.com/images?q=tbn:ANd9GcQA_-tL18_rj9zEcjN6n41NEaJm-kRNF9UeOtvksZ4z_OW6jRA9" alt="" />
          <div className="film-caption">
            <div className="card-caption-wrapper">
              <span className="film-name">Kill Bill</span>
              <span className="film-year">2004</span>
            </div>
            <span className="film-genre">Action & Adventure</span>
          </div>
        </div>
      </ErrorBoundary>
    );
  }
}

export default FilmPreviewCard;
