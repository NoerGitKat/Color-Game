import React, { Component } from "react";
import Header from "../components/Header";
import NewGame from "../components/NewGame";
import Colors from "../components/Colors";

const colors = [
  "rgb(255, 0, 0)",
  "rgb(255, 255, 0)",
  "rgb(255, 0, 255)",
  "rgb(0, 255, 255)",
  "rgb(0, 255, 0)",
  "rgb(0, 0, 255)"
];

class AppContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      guessColor: "rgb(255, 255, 0)",
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
    const { changeDifficulty, difficulty, guessColor } = this.state;
    console.log("guessColor", guessColor);
    return (
      <div>
        <Header guessColor={guessColor} />
        <NewGame changeDifficulty={changeDifficulty} difficulty={difficulty} />
        <Colors colors={colors} guessColor={guessColor} />
      </div>
    );
  }
}

export default AppContainer;
