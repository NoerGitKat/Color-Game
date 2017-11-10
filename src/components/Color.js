import React from "react";

const Color = ({ color }) => {
  const thisColor = {
    backgroundColor: color
  };
  return <div className="color-container" style={thisColor} />;
};

export default Color;
