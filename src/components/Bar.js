import React from "react";

const Bar = ({
  newColorsEasy,
  newColorsHard,
  difficulty,
  correctColorsArray,
  changeDifficulty,
  message
}) => {
  return (
    <div className="bar-container">
      <div
        onClick={() => {
          alert("new game started!");
          {
            difficulty === "easy" ? newColorsEasy() : newColorsHard();
          }
        }}
        className="newgame"
      >
        <p>NEW COLORS</p>
      </div>
      <div className="message-container">
        <span id="message">{message}</span>
      </div>
      <div className="difficulty">
        <p
          onClick={() => {
            alert("whaat, you can't even handle some colors?");
            changeDifficulty("easy");
            newColorsEasy();
          }}
          className={difficulty === "easy" ? "active" : ""}
        >
          EASY
        </p>
        <p
          onClick={() => {
            alert("yeahhh, that's more like it!");
            changeDifficulty("hard");
            newColorsHard();
          }}
          className={difficulty === "hard" ? "active" : ""}
        >
          HARD
        </p>
      </div>
    </div>
  );
};

export default Bar;
