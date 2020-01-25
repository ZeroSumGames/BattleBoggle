import React from "react";
import CountdownTimer from "react-component-countdown-timer";

class Timer extends React.Component {
  render() {
    let settings = {
      count: 5432,
      border: true,
      showTitle: true,
      noPoints: true
    };
    return (
      <CountdownTimer {...settings} />
    );
  }
}
