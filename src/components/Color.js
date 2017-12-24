import React from "react";

const Color = ({
  correctColorsArray,
  colorsArray,
  color,
  guessColor,
  changeMessage
}) => {
  let thisColor = {
    backgroundColor: color
  };
  let { backgroundColor } = thisColor;

  return (
    <div
      onClick={event => {
        if (backgroundColor === guessColor) {
          changeMessage("You nailed it amigo!");
          correctColorsArray();
        } else {
          changeMessage("Are you color blind???");
          console.log("event", event);
        }
      }}
      className="color-container"
      style={thisColor}
    />
  );
};

export default Color;
