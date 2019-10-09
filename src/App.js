import React, { Component } from "react";
import "./App.css";
import GameController from "./GameController/GameController"


class App extends Component {
   render() {
    return (
      <section className="App">
        <GameController />
      </section>
    );
  }
}

export default App;
