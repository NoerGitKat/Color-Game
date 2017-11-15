import React from "react";

const Bar = ({ difficulty, changeDifficulty, message }) => {
  return (
    <div className="bar-container">
      <div onClick={() => alert("new game started!")} className="newgame">
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
          }}
          className={difficulty === "easy" ? "active" : ""}
        >
          EASY
        </p>
        <p
          onClick={() => {
            alert("yeahhh, that's more like it!");
            changeDifficulty("hard");
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
