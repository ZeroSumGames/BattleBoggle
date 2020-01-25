import React from "react";
import { connect } from "react-redux";
import PowerTile from "./PowerTile";

class Shop extends React.Component {
  componentDidMount() {}

  render() {
    let powers = this.props.powers;

    return (
      <div className="shop">
        <h3 className="shopTitle"> Ye ol' Shoppe!</h3>
        <div className="powerTiles">
          {powers &&
            powers.map((power, i) => {
              return <PowerTile img={power.img} key={i} name={power.name}/>;
            })}
        </div>
        
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    powers: state.powers
  };
};

const mapDispatchToProps = dispatch => {
  return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(Shop);
