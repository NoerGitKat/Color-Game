import React from "react";
import Color from "./Color";

const Colors = ({ colors }) => {
  return (
    <div>
      <Color color={colors[0]} />
      <Color color={colors[1]} />
      <Color color={colors[2]} />
      <Color color={colors[3]} />
      <Color color={colors[4]} />
      <Color color={colors[5]} />
    </div>
  );
};

export default Colors;
