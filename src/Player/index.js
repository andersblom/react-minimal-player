import React, { Component } from 'react';

import Controls from '../Controls';

import { PlayerContainer } from './styles';

export default class VideoPlayer extends Component {
  constructor(props) {
    super(props);

    /**
     * Ref that allows for easy access to the HTML5 <video> element without
     * having to run document.querySelector().
     */
    this.videoRootRef = React.createRef();
  }

  /**
   * Initial state
   */
  state = {
    playing: false,
    currentTime: 0,
    playerIsReady: false,
    duration: 0,
    controlsAreVisible: false,
  }

  componentDidMount = () => {
    this.initializeVideo();
  }

  /**
   * Initializes video. Sets interval to start listening for <video> element
   * to appear in the DOM. When finished, set ready state and set video duration
   * to match <video>'s.
   */
  initializeVideo = () => {
    const durationInterval = setInterval(() => {
      const el = this.getVideoElement();
      const currentDuration = el.duration;
      console.dir(el);
      if (!isNaN(currentDuration)) {
        // this.showBuffer();

        // Set duration in state to be displayed in UI
        this.setDuration(currentDuration);
        // Clear interval now that element is loaded
        clearInterval(durationInterval);

        return this.setState({
          ...this.state,
          playerIsReady: true,
        })
      }
    }, 100);
  }

  showBuffer = () => {
    const el = this.getVideoElement();
    this.bufferInterval = setInterval(() => {
      console.log(Math.round((el.buffered.end(0) / el.duration) * 100));
      if (el.buffered.end(0) / el.duration === 1) {
        clearInterval(this.bufferInterval);
      }
    }, 50)
  }

  /**
   * Set a duraton in state
   * @param duration (number)
   */
  setDuration = (duration) => {
    this.setState({
      ...this.state,
      duration,
    })
  }

  /**
   * Reads video element from ref and returns the html element
   */
  getVideoElement = () => {
    return this.videoRootRef.current;
  }

  /**
   * Starts video
   */
  playVideo = () => {
    const el = this.getVideoElement();
    el.play();
    this.startTicking();
    this.setState({ playing: true });
  }

  /**
   * Pauses video
   */
  pauseVideo = () => {
    const el = this.getVideoElement();
    el.pause();
    this.stopTicking();
    this.setState({ playing: false });
  }

  /**
   * Play/pause video depending on current play-state.
   */
  playPause = () => {
    if (this.state.playing) {
      return this.pauseVideo();
    }
    return this.playVideo();
  }

  /**
   * Starts interval that runs 'tick' every second
   */
  startTicking = () => {
    this.tickInterval = setInterval(this.tick, 1000);
  }

  /**
   * Stops interval that runs every second and sets current video time to match
   * video elements 'currentTime' for precisions sake.
   */
  stopTicking = () => {
    const el = this.getVideoElement();
    clearInterval(this.tickInterval);
    this.setState({
      ...this.state, 
      currentTime: el.currentTime,
    });
  }

  /**
   * When called with `startTicking`, sets current video time every second in state
   * to allow displaying the elapsed time in the render method.
   */
  tick = () => {
    this.setState({
      ...this.state, 
      currentTime: this.state.currentTime += 1,
    });
  }

  /**
   * Toggle controls visibility.
   * Kept as top level state to allow
   * player-hover to trigger controls visibility.
   */
  toggleVisible = () => {
    this.setState({
      ...this.state,
      controlsAreVisible: !this.state.controlsAreVisible,
    })
  }

  render() {
    return (
      <PlayerContainer
        width={this.props.width}
        onMouseEnter={this.toggleVisible}
        onMouseLeave={this.toggleVisible}
      >
        {this.state.playerIsReady ? "ready" : "nope"}
        <video controls={false} id="rv-video-element" ref={this.videoRootRef} style={{ width: this.props.width }}>
          <source src="https://sample-videos.com/video123/mp4/720/big_buck_bunny_720p_5mb.mp4" />
        </video>
        <Controls
          playPause={this.playPause}
          playing={this.state.playing}
          currentTime={this.state.currentTime}
          duration={this.state.duration}
          controlsAreVisible={this.state.controlsAreVisible}
        />
      </PlayerContainer>
    )
  }
}