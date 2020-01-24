import React from "react";
import {connect} from 'react-redux'




class Shop extends React.Component {
  // constructor() { // probably event listeners will be here
  //   super(),
  // }
  render() {
    return (
      <div className="shop">
        <h3 className='shopTitle'> Ye ol' Shoppe!</h3>
        <div className='powerTiles'>

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

export default connect(mapStateToProps, mapDispatchToProps)(Shop);
