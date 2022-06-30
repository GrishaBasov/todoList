import React, { Component } from 'react';

export default class Timer extends Component {
  state = {
    minutes: 0,
    seconds: 0,
    running: false,
  };

  componentDidMount() {
    this.setTime();
  }

  setTime = () => {
    let { min, sec } = this.props;
    min ? this.setState({ minutes: min }) : null;
    sec ? this.setState({ seconds: sec }) : null;
  };

  setTimer = () => {
    const interval = setInterval(() => {
      if (this.state.running) {
        if (this.state.seconds !== 0) {
          this.setState({ seconds: this.state.seconds - 1 });
        }
        if (this.state.seconds === 0 && this.state.minutes > 0) {
          this.setState({
            seconds: 59,
            minutes: this.state.minutes - 1,
          });
        }
      }
      if (!this.state.running) {
        clearInterval(interval);
      }
    }, 1000);
  };

  changeThisStateRunning = () => {
    this.setState({
      running: !this.state.running,
    });
    this.setTimer();
  };

  render() {
    let { minutes, seconds } = this.state;
    minutes < 10 ? (minutes = '0' + minutes) : null;
    seconds < 10 ? (seconds = '0' + seconds) : null;
    return (
      <span className="description">
        <button onClick={this.changeThisStateRunning} className="icon icon-play" />
        <button onClick={this.changeThisStateRunning} className="icon icon-pause" />
        &nbsp;&nbsp;&nbsp;&nbsp;
        {minutes}:{seconds}
      </span>
    );
  }
}
