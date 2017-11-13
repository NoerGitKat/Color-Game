import React from "react";

const Color = ({ color, guessColor }) => {
  const thisColor = {
    backgroundColor: color
  };
  const { backgroundColor } = thisColor;
  return (
    <div
      onClick={() => {
        alert(`The color is ${backgroundColor}`);
        backgroundColor === guessColor
          ? alert("You chose correctly!")
          : alert("Are you color blind???");
      }}
      className="color-container"
      style={thisColor}
    />
  );
};

export default Color;
