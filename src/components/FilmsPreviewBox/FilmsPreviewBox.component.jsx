import React from 'react';

class FilmsPreviewBox extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      toggleButtons: {
        title: 'Search by',
        leftButton: 'Title',
        rightButton: 'Gengre',
      },
    };
  }

  render() {
    return (
      <section className="films-preview-box">
      </section>
    );
  }
}

export default FilmsPreviewBox;
