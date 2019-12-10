import React from 'react';
import FilmPreviewCard from '../FilmPreviewCard/FilmPreviewCard.component';

class FilmsPreviewBox extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const arrToRender = [];
    for (let index = 0; index < 10; index++) {
      arrToRender.push(<FilmPreviewCard />);
    }
    return (
      <section className="films-preview-box">
        {arrToRender}
      </section>
    );
  }
}

export default FilmsPreviewBox;
