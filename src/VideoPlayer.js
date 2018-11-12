import React, { Component } from 'react';

export default class VideoPlayer extends Component {
  state = {
    playing: false,
  }

  playVideo = () => {
    const el = document.querySelector('#video');
    console.log(this.state.playing);

    if (this.state.playing) {
      el.pause();
      return this.setState({ playing: false });
    }

    el.play();
      return this.setState({ playing: true });
  }

  render() {
    return (
      <div>
        <video id="video" onClick={this.playVideo}>
          <source src="https://sample-videos.com/video123/mp4/720/big_buck_bunny_720p_5mb.mp4" />
        </video>
      </div>
    )
  }
}