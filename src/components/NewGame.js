import React from "react";

const NewGame = ({ difficulty, changeDifficulty }) => {
  return (
    <div className="newgame-container">
      <div onClick={() => alert("new game started!")} className="newgame">
        <p>NEW COLORS</p>
      </div>
      <div className="difficulty">
        <p
          onClick={() => {
            alert("whaat, you can't even handle some colors?");
            console.log("difficulty", difficulty);
            changeDifficulty("easy");
          }}
          className={difficulty === "easy" ? "active" : ""}
        >
          EASY
        </p>
        <p
          onClick={() => {
            alert("yeahhh, that's more like it!");
            console.log("difficulty", difficulty);
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

export default NewGame;
