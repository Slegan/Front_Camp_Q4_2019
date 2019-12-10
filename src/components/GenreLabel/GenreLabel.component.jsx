import React from 'react';
import PropTypes from 'prop-types';

class GenreLabel extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      drama: 'Drama',
    };
  }

  render() {
    return (
      <span className="genre-label">Films by {this.state.drama} genre</span>
    );
  }
}

export default GenreLabel;
