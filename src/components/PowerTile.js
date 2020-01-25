import React from "react";

const PowerTile = props => {
  let powerStyle = {
    width: "50px",
    height: "50px",
    border: "1px solid #000",
    display: "inline-block",
		margin: "15px",
		background: props.img
  };
  console.log("!!!!!!!!!!!!!!!!!!!!!");
  console.log(props);
  return (
    
      <button
        type="image"
        src="./smokeScreen.png"
        alt="Submit"
        style={powerStyle}
      />
    
  );
};

export default PowerTile;
