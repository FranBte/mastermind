import React, { Component } from "react";
import ColorOptions from "./ColorOptions/ColorOptions";
import GameFeedback from "./GameFeedback/GameFeedback";
import "./GameController.css";
import GuessAttempt from "./GameAttempt/GameAttempt";
import Modal from "./LaunchModal/LaunchModal";
import WinModal from "./Win/Win";
import RestartGame from "./Restart/Restart";

function generateRandomColors(colors, numberOfColors) {
  let randomColors = [];
  for (let i = 0; i < numberOfColors; i++) {
    randomColors.push(colors[Math.floor(Math.random() * colors.length)]);
  }
  console.log("code:", randomColors);
  return randomColors;
}

function generateGameBoard(attempts, numberOfCells) {
  let dynamicCells = [];
  for (let i = 0; i < attempts; i++) {
    dynamicCells.push([]);
    for (let j = 0; j < numberOfCells; j++) {
      dynamicCells[i].push({
        color: "",
        feedback: ""
      });
    }
  }
  console.log(numberOfCells);
  return dynamicCells;
}
class GameController extends Component {
  colors = ["red", "orange", "yellow", "green", "blue", "indigo", "violet"];
  correctConsecutiveCells = 0;

  state = {
    //Build this dynamically to support easy/hard mode
    codeLength: 0,
    attemptsLength: 0,
    gameAttempts: [],
    show: true,
    randomColors: [],
    isWon: false,
    winPosition: 0
  };

  getCodeValue = e => {
    this.setState({
      codeLength: e.target.value
    });
    return e.target.value;
  };

  getAttemptsValue = e => {
    this.setState({
      attemptsLength: e.target.value
    });
    return e.target.value;
  };

  handleGameLaunch = () => {
    const codeLength = this.state.codeLength;
    const attemptsLength = this.state.attemptsLength;
    if (codeLength > 0 && attemptsLength > 0) {
      this.setState({
        gameAttempts: generateGameBoard(attemptsLength, codeLength),
        show: false,
        randomColors: generateRandomColors(this.colors, codeLength)
      });
    }
  };

  restartGame = () => {
    this.setState({
      codeLength: 0,
      attemptsLength: 0,
      gameAttempts: [],
      show: true,
      randomColors: [],
      isWon: false,
      winPosition: 0
    });
    this.correctConsecutiveCells = 0;
  };

  takeTurn = event => {
    const gameAttemptsCopy = [...this.state.gameAttempts];

    //Loops through all possible attempts, then loops through each guess in the attempt.
    for (let i = 0; i < gameAttemptsCopy.length; i++) {
      let isRowComplete = true;

      for (let j = 0; j < gameAttemptsCopy[i].length; j++) {
        if (gameAttemptsCopy[i][j].color === "") {
          // If the color guess is empty, then it assigns the color that was clicked
          gameAttemptsCopy[i][j].color = event.target.className;
          //If a color is assigned, then the feedback is updated
          if (gameAttemptsCopy[i][j].color === this.state.randomColors[j]) {
            gameAttemptsCopy[i][j].feedback = "black";
            //keeps count of correct consecutive cells in an attempt
            // this.correctConsecutiveCells++;
          } else {
            gameAttemptsCopy[i][j].feedback = "white";
          }
          //isRowComplete is set to false so the outer loop will break once a color is set
          isRowComplete = false;
          break;
        }
      }
      //reset match break outer loop
      if (!isRowComplete) {
        gameAttemptsCopy[i].map(guess => {
          if (guess.feedback === "black") {
            this.correctConsecutiveCells++;
          }
        });

        if (this.correctConsecutiveCells === gameAttemptsCopy[i].length) {
          this.setState({
            isWon: true,
            winPosition: i + 1
          });
        } else {
          this.correctConsecutiveCells = 0;
        }
        break;
      }
    }
    this.setState({
      gameAttempts: gameAttemptsCopy
    });
  };

  render() {
    return (
      <section className="controller">
        <Modal
          onClose={this.onClose}
          show={this.state.show}
          changeCode={this.getCodeValue}
          changeAttempts={this.getAttemptsValue}
          click={this.handleGameLaunch}
          codeLength={this.state.codeLength}
          attemptsLength={this.state.attemptsLength}
        />
        <ColorOptions
          colors={this.colors}
          click={event => this.takeTurn(event)}
        />
        <section className="main">
          <section className="attempts">
            {this.state.gameAttempts.map((attempt, index) => {
              return (
                <GuessAttempt
                  attempt={attempt}
                  color={attempt}
                  key={`guessAttempt-${index}`}
                  //   check={this.checkAttempt(attempt, this.randomColors)}
                />
              );
            })}
          </section>
          <section className="feedback">
            {this.state.gameAttempts.map((feedback, index) => {
              return (
                <GameFeedback
                  feedback={feedback}
                  key={`gameFeedback-${index}`}
                />
              );
            })}
          </section>
        </section>
        <RestartGame click={this.restartGame} />
        <WinModal
          isWon={this.state.isWon}
          winPosition={this.state.winPosition}
          code={this.state.randomColors}
          click={this.restartGame}
        />
      </section>
    );
  }
}

export default GameController;
