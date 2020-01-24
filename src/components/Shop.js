import React from "react";
import Power from "./Power"

class Shop extends React.Component {
  constructor() { 
    super(),
  }
  render() {
    return (
      <div className="shop">
        <h3 className="shopTitle"> Ye ol' Shoppe!</h3>
        <div className="powerTiles">
          return (
          {props.powers.map(power => (
            <Power />
          ))}
        </div>
        )
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

export default connect(mapStateToProps, mapDispatchToProps)(Shop);
