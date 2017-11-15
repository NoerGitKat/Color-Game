import React from "react";

const Color = ({ color, guessColor, changeMessage }) => {
  const thisColor = {
    backgroundColor: color
  };
  const { backgroundColor } = thisColor;

  return (
    <div
      onClick={() => {
        alert(`The color is ${backgroundColor}`);
        if (backgroundColor === guessColor) {
          changeMessage("You nailed it amigo!");
        } else {
          changeMessage("Are you color blind???");
        }
      }}
      className="color-container"
      style={thisColor}
    />
  );
};

export default Color;
