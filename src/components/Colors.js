import React from "react";
import Color from "./Color";

const Colors = ({ correctColorsArray, colors, guessColor, changeMessage }) => {
  return (
    <div className="allcolors-container">
      <Color
        correctColorsArray={correctColorsArray}
        colorsArray={colors}
        color={colors[0]}
        guessColor={guessColor}
        changeMessage={changeMessage}
      />
      <Color
        correctColorsArray={correctColorsArray}
        colorsArray={colors}
        color={colors[1]}
        guessColor={guessColor}
        changeMessage={changeMessage}
      />
      <Color
        correctColorsArray={correctColorsArray}
        colorsArray={colors}
        color={colors[2]}
        guessColor={guessColor}
        changeMessage={changeMessage}
      />
      <Color
        correctColorsArray={correctColorsArray}
        color={colors[3]}
        guessColor={guessColor}
        changeMessage={changeMessage}
      />
      <Color
        correctColorsArray={correctColorsArray}
        colorsArray={colors}
        color={colors[4]}
        guessColor={guessColor}
        changeMessage={changeMessage}
      />
      <Color
        correctColorsArray={correctColorsArray}
        colorsArray={colors}
        color={colors[5]}
        guessColor={guessColor}
        changeMessage={changeMessage}
      />
    </div>
  );
};

export default Colors;
