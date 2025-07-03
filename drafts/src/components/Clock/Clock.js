import React from "react";
import './Clock.css';

export default class Clock extends React.Component {
  state = {
    time:new Date().toLocaleTimeString(),
  }

  intervalId = null;

  componentDidMount() {
     this.intervalId = setInterval(
      () => this.setState({time: new Date().toLocaleTimeString()}),
      1000,
     );
  }

  render() {
    return <div className="Clock__face">{this.state.time}</div>
  }
}