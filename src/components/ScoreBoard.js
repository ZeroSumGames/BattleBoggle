import React, { Component } from "react";
import { connect } from "react-redux";
import Points from "./Points";

class ScoreBoard extends Component {
  render() {
    return (
      <div className="scoreBoard">
        <div>
          <Points points={this.props.p1Score} />
        </div>
        <div>
          <Points points={this.props.p2Score} />
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
