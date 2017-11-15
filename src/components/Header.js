import React from "react";

const Header = ({ guessColor }) => {
  return (
    <div className="header-container">
      <p>
        THE GREAT HEX COLOR <br /> <span className="rgb">{guessColor}</span>
        <br />
        GUESSING GAME
      </p>
    </div>
  );
};

export default Header;
