import React, { Fragment } from 'react';

class GenreLabel extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      drama: 'Drama',
    };
  }

  render() {
    return (
      <Fragment>
        <span className="genre-label">Films by {this.state.drama} genre</span>
        <span className="genre-label hide">{this.state.drama} movie found</span>
      </Fragment>
    );
  }
}

export default GenreLabel;
