import React from "react";

class Board extends React.Component {
  // constructor() { // probably event listeners will be here
  //   super(),
  // }
  render() {
    return (
      <div className="gameBoard">
        <h1 className="title">Battle Boggle!</h1>
        <div className="head">
          <div>{`Round${'#'}`}</div>
          <div classname="playerScore">
            <div classname="player1Score"></div>
            <div classname="player2Score"></div>
          </div>
          <div classname="timer"></div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {};
};

const mapDispatchToProps = dispatch => {
  return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(SingleFlower);
