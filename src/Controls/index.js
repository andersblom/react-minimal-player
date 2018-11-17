import React, { Component } from 'react';

import { ControlsContainer } from './styles';

export default class Controls extends React.Component {
  /**
   * Display current time, formatted to rounded seconds 
   */
  displayCurrentTime = () => {
    return Math.floor(this.props.currentTime);
  }
  
  /**
   * Display video total duration, formatted to rounded seconds
   */
  displayDuration = () => {
    return Math.floor(this.props.duration);
  }

  render() {
    return (
      <ControlsContainer
        visible={this.props.controlsAreVisible}
      >
        <div className="inner">
          <button onClick={this.props.playPause}>
            {this.props.playing ? 'pause' : 'play'}
          </button>
          <span className="time">
            {this.displayCurrentTime()}/{this.displayDuration()}
          </span>
        </div>
      </ControlsContainer>
    )
  }
}
