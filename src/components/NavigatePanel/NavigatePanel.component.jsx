import React from 'react';
import ToggleButtons from '../ToggleButtons/ToggleButtons.component';

class NavigatePanel extends React.Component {
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
      <header className="navigate-panel">
        <ToggleButtons toggleButtons={this.state.toggleButtons} />
      </header>
    );
  }
}

export default NavigatePanel;
