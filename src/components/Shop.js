import React from "react";

// class Shop extends React.Component {
  // constructor() { // probably event listeners will be here
  //   super(),
  // }
  //trying out making the shop dumb.
  export default function Shop(props) {
  render() {
    return (
      <div className="shop">
        <h3 className="shopTitle"> Ye ol' Shoppe!</h3>
        <div className="powerTiles">
          return (
          {props.powers.map(flower => (
            <Power />
          ))}
        </div>
        )
      </div>
    );
  }
}

// const mapStateToProps = state => {
//   return {};
// };

// const mapDispatchToProps = dispatch => {
//   return {};
// };

// export default connect(mapStateToProps, mapDispatchToProps)(Shop);
