import React, { Component } from "react";
import Header from "../components/Header";
import Bar from "../components/Bar";
import Colors from "../components/Colors";
import { shuffleArray, generateColor } from "./../utils";

class AppContainer extends Component {
  constructor(props) {
    super(props);

    const randomColor = generateColor();

    const colors = [
      randomColor,
      "rgb(255, 255, 0)",
      "rgb(255, 0, 255)",
      "rgb(0, 255, 255)",
      "rgb(0, 255, 0)",
      "rgb(0, 0, 255)"
    ];

    shuffleArray(colors);

    let colorArray = [randomColor];
    for (var i = 0; i < 5; i++) {
      colorArray.push(generateColor());
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
      },
      newColorsEasy: () => {
        this.setState({
          colors: colors,
          message: ""
        });
      },
      newColorsHard: () => {
        this.setState({
          colors: colorArray,
          message: ""
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
      correctColorsArray,
      newColorsHard,
      newColorsEasy
    } = this.state;

    console.log("guessColor", guessColor);
    return (
      <div>
        <Header guessColor={guessColor} />
        <Bar
          message={message}
          changeDifficulty={changeDifficulty}
          difficulty={difficulty}
          correctColorsArray={correctColorsArray}
          newColorsHard={newColorsHard}
          newColorsEasy={newColorsEasy}
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

  componentWillReceiveProps(nextProps) {
    const randomColor = generateColor();
  }
}

export default AppContainer;
