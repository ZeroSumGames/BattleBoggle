import React, { Component } from "react";
import { connect } from "react-redux";
import Points from "./Points";
import "./style/Score.css";

class ScoreBoard extends Component {
  render() {
    return (
      <div className="scoreBoardContainer">
        <div className="scoreBoard">
          <div className="points">
            Home:
            <Points points={this.props.p1Score} />
          </div>
          <div className="points">|</div>
          <div className="points">
            <div>Away:</div>
            <Points points={this.props.p2Score} />
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    p1Score: state.p1Score,
    p2Score: state.p2Score
  };
};

const mapDispatchToProps = dispatch => {
  return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(ScoreBoard);
