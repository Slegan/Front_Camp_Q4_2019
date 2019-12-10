import React from 'react';
import PropTypes from 'prop-types';

class ToggleButtons extends React.PureComponent {

  render() {
    const { title, leftButton, rightButton } = this.props.buttonsProp;

    return (
      <div className="radio-wrapper">
        <span>{title}</span>
        <button
          type="button"
          className="radio-button radio-button_left radio-button--active"
        >
          {leftButton}
        </button>
        <button
          type="button"
          className="radio-button radio-button_right"
        >
          {rightButton}
        </button>
      </div>
    );
  }
}

// ToggleButtons.prototype = {
//   // toggleButtons: PropTypes.object,
//   // title: PropTypes.string,
//   // leftButton: PropTypes.string,
//   // rightButton: PropTypes.string,
// };

export default ToggleButtons;
