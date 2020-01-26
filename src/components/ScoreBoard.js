import React, { Component } from "react";
import Points from "./Points"

export default class ScoreBoard extends Component {
  render() {
    return (
      <div>
        {/* for each player (1 and 2) pass props and render  */}
        <Points />
      </div>
    );
  }
}
