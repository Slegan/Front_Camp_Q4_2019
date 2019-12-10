import React from 'react';
import ToggleButtons from '../ToggleButtons/ToggleButtons.component';
import GenreLabel from '../GenreLabel/GenreLabel.component';

class NavigatePanel extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      toggleButtons: {
        title: 'Sort by',
        leftButton: 'Release date',
        rightButton: 'Rating',
      },
    };
  }

  render() {
    return (
      <section className="navigate-panel">
        <GenreLabel />
        <ToggleButtons buttonsProp={this.state.toggleButtons} />
      </section>
    );
  }
}

export default NavigatePanel;
