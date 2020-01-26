import React, { Component } from "react";
import { connect } from "react-redux";
import Points from "./Points";

class ScoreBoard extends Component {
  render() {
    return (
      <div>
        {/* for each player (1 and 2) pass props and render  */}
        <Points points={this.props.points} />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    points: state.p1Score
  };
};

const mapDispatchToProps = dispatch => {
  return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(ScoreBoard);
