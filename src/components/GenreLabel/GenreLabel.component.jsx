import React, { Fragment } from 'react';

class GenreLabel extends React.PureComponent {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Fragment>
        { this.props.activeMarker
          ? <span className="genre-label">{this.props.count} movie found</span>
          : <span className="genre-label">Films by {this.props.genre} genre</span> }
      </Fragment>
    );
  }
}

export default GenreLabel;
