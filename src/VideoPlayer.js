import React, { Component } from 'react';

const VIDEO_EL_ID = '#rv-video-element';

export default class VideoPlayer extends Component {
  state = {
    playing: false,
  }

  playVideo = () => {
    const el = document.querySelector(VIDEO_EL_ID);
    el.play();
    this.setState({ playing: true });
  }

  pauseVideo = () => {
    const el = document.querySelector(VIDEO_EL_ID);
    el.pause();
    this.setState({ playing: false });
  }

  playPause = () => {
    if (this.state.playing) {
      return this.pauseVideo();
    }
    return this.playVideo();
  }

  render() {
    return (
      <div>
        <video id="rv-video-element" onClick={this.playPause}>
          <source src="https://sample-videos.com/video123/mp4/720/big_buck_bunny_720p_5mb.mp4" />
        </video>
      </div>
    )
  }
}