import React, { Component } from "react";
// import ReactDOM from 'react-dom';
import CountdownTimer from "react-component-countdown-timer";
// import Countdown from 'react-countdown';
//https://www.npmjs.com/package/react-component-countdown-timer
//https://www.npmjs.com/package/react-component-countdown-timer?activeTab=readme

export default class Timer extends Component {
  render() {
    let settings = {
      count: 5432,
      border: true,
      showTitle: true,
      noPoints: true
    };
    return <CountdownTimer {...settings} />;
  }
}
