import React from 'react';
import ToggleButtons from '../ToggleButtons/ToggleButtons.component';

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
      // <section className="header">
      //   <div className="header_search-wrapper">
      //     <input
      //       type="text"
      //       className="header_search-input"
      //       placeholder="Search"
      //     />
      //     <button
      //       type="button"
      //       className="header_search-button"
      //     >
      //       Search
      //     </button>
      //   </div>
      //   <ToggleButtons buttonsProp={this.state.toggleButtons} />
      // </section>

      <section className="chosen-film">
        <div className="metabar">
          <button className="back-to-search">Back to search</button>
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
    );
  }
}

export default Header;
