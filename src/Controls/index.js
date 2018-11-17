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
    return Math.round(this.props.duration);
  }

  render() {
    return (
      <ControlsContainer>
        <div className="inner">
          <button onClick={this.props.playPause}>
            {this.props.playing ? 'pause' : 'play'}
          </button>
          {this.displayCurrentTime()}/{this.displayDuration()}
        </div>
      </ControlsContainer>
    )
  }
}
