import "./style/Timer.css";
import React, { Component } from "react";
// import ReactDOM from 'react-dom';
import CountdownTimer from "react-component-countdown-timer";
// import Countdown from 'react-countdown';
//https://www.npmjs.com/package/react-component-countdown-timer
//https://www.npmjs.com/package/react-component-countdown-timer?activeTab=readme

export default class Timer extends Component {
  render() {
    let settings = {
      className: "timer",
      count: 180,
      border: true,
      showTitle: false,
      noPoints: false,
      hideDay: true,
      hideHours: true,
      direction: "left",
      // labelSize: 18,
      size: 35
      // onEnd: this is a function.
      //there is something called on-end as a property that may give us the ability to end the game when it hits 0
    };
    return <CountdownTimer {...settings} />;
  }
}
