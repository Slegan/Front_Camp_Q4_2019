import React from 'react';
import { Link } from 'react-router-dom';
import ErrorBoundary from '../ErrorBoundary/ErrorBoundary.component';

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <ErrorBoundary>
        <section className="chosen-film">
          <div className="metabar">
            <Link to="/">
              <button type="button" className="back-to-search">Back to search</button>
            </Link>
          </div>
          <div className="film-details-wrapper">
            <img className="film-image" src="http://t2.gstatic.com/images?q=tbn:ANd9GcQA_-tL18_rj9zEcjN6n41NEaJm-kRNF9UeOtvksZ4z_OW6jRA9" alt="" />
            <div className="film-details">
              <div className="film-name-rating-wrapper">
                <span className="film-name">Kill Bill: Vol 2</span>
                <span className="film-rating">4.3</span>
              </div>
              <span className="film-awards">Oscar winning Movie</span>
              <div className="film-name-year-duration">
                <span className="film-year">1994 year</span>
                <span className="film-duration">154 min</span>
              </div>
              <div className="film-description">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed dignissimos nobis cupiditate sint amet, ea autem voluptates expedita, vel exercitationem illum distinctio totam consequatur facilis id tempora voluptatibus assumenda ex.
              </div>
            </div>
          </div>
        </section>
      </ErrorBoundary>
    );
  }
}

export default Header;
