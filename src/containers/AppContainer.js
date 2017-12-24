import React, { Component } from "react";
import Header from "../components/Header";
import Bar from "../components/Bar";
import Colors from "../components/Colors";

class AppContainer extends Component {
  

  constructor(props) {
    super(props);

    const randomColor = `#${Math.random()
      .toString(16)
      .slice(2, 8)
      .toUpperCase()}`;

    const colors = [
      randomColor,
      "rgb(255, 255, 0)",
      "rgb(255, 0, 255)",
      "rgb(0, 255, 255)",
      "rgb(0, 255, 0)",
      "rgb(0, 0, 255)"
    ];

    let colorArray = [randomColor];
    for (var i = 0; i < 6; i++) {
      colorArray.push(
        `#${Math.random()
          .toString(16)
          .slice(2, 8)
          .toUpperCase()}`
      );
    }

    const correctColor = [
      randomColor,
      randomColor,
      randomColor,
      randomColor,
      randomColor,
      randomColor
    ];

    this.state = {
      message: "",
      changeMessage: message => {
        this.setState({
          message
        });
      },
      guessColor: randomColor,
      newgame: false,
      difficulty: "easy",
      colors: colors,
      changeDifficulty: difficulty => {
        this.setState({
          difficulty
        });
      },
      correctColorsArray: () => {
        this.setState({
          colors: correctColor
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
      changeMessage,
      colors,
      correctColorsArray
    } = this.state;

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
          correctColorsArray={correctColorsArray}
          colors={colors}
          guessColor={guessColor}
          changeMessage={changeMessage}
        />
      </div>
    );
  }
}

export default AppContainer;
