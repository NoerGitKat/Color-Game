import React, { Component } from "react";
import Header from "../components/Header";
import Bar from "../components/Bar";
import Colors from "../components/Colors";

class AppContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      message: "",
      changeMessage: message => {
        this.setState({
          message
        });
      },
      guessColor: `#${Math.random()
        .toString(16)
        .slice(2, 8)
        .toUpperCase()}`,
      newgame: false,
      difficulty: "easy",
      changeDifficulty: difficulty => {
        this.setState({
          difficulty
        });
      }
    };
  }
  render() {
    const {
      changeDifficulty,
      difficulty,
      guessColor,
      message,
      changeMessage
    } = this.state;

    const colors = [
      guessColor,
      "rgb(255, 255, 0)",
      "rgb(255, 0, 255)",
      "rgb(0, 255, 255)",
      "rgb(0, 255, 0)",
      "rgb(0, 0, 255)"
    ];

    console.log("guessColor", guessColor);
    return (
      <div>
        <Header guessColor={guessColor} />
        <Bar
          message={message}
          changeDifficulty={changeDifficulty}
          difficulty={difficulty}
        />
        <Colors
          colors={colors}
          guessColor={guessColor}
          changeMessage={changeMessage}
        />
      </div>
    );
  }
}

export default AppContainer;
