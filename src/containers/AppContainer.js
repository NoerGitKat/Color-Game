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
  render() {
    return (
      <div>
        <Header />
        <NewGame />
        <Colors colors={colors} />
      </div>
    );
  }
}

export default AppContainer;
