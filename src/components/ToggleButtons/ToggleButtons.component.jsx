import React from 'react';

class ToggleButtons extends React.PureComponent {

  render() {
    const { title, leftButton, rightButton } = this.props.buttonsProp;

    return (
      <div className="radio-wrapper">
        <span>{title}</span>
        <button
          type="button"
          onClick={this.props.leftButtonAction}
          className={
            `radio-button radio-button_left
            ${ this.props.activeMarker ? 'radio-button--active' : '' }`}
        >
          {leftButton}
        </button>
        <button
          type="button"
          onClick={this.props.rightButtonAction}
          className={
            `radio-button radio-button_right
            ${ this.props.activeMarker ? '' : 'radio-button--active' }`}
        >
          {rightButton}
        </button>
      </div>
    );
  }
}

export default ToggleButtons;
