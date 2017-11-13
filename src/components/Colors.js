import React from "react";
import Color from "./Color";

const Colors = ({ colors, guessColor }) => {
  return (
    <div className="allcolors-container">
      <Color color={colors[0]} guessColor={guessColor} />
      <Color color={colors[1]} guessColor={guessColor} />
      <Color color={colors[2]} guessColor={guessColor} />
      <Color color={colors[3]} guessColor={guessColor} />
      <Color color={colors[4]} guessColor={guessColor} />
      <Color color={colors[5]} guessColor={guessColor} />
    </div>
  );
};

export default Colors;
