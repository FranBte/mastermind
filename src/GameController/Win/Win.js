import React, { Component } from "react";
import ColorCell from "../ColorCell/ColorCell";
import RestartGame from "../Restart/Restart";

class WonGame extends Component {
  render() {
    const styleModal = {
      display: "block",
      position: "fixed",
      zIndex: "1",
      left: "0",
      top: "0",
      width: "100%",
      height: "100%",
      overflow: "auto",
      backgroundColor: "rgba(0,0,0,0.4)"
    };

    const styleReset = {
      margin: "1vmin"
    };

    const styleModalContainer = {
      backgroundColor: "#fefefe",
      margin: "15% auto",
      padding: "20px",
      border: "1px solid #888",
      width: "80%",
      borderRadius: "1vmin"
    };

    const styleContainer = {
      display: "flex",
      flexFlow: "column",
      alignItems: "center",
      justifyContent: "center"
    };

    const styleCode = {
      display: "flex",
      flexFlow: "row",
      margin: "1vmin"
    };

    if (!this.props.isWon) {
      return null;
    }
    return (
      <section style={styleModal}>
        <section style={styleModalContainer}>
          <section style={styleContainer}>
            <h2 style={styleReset}>You won the game! Wooooo!</h2>
            <h3 style={styleReset}>Attempts: {this.props.winPosition}</h3>
            <p style={styleReset}>The correct code:</p>
            <section style={styleCode}>
              {this.props.code.map((codeColor, index) => {
                return <ColorCell color={codeColor} key={`ColorCode-${index}`}/>;
              })}
            </section>
            <RestartGame
            click={this.props.click}
            />
          </section>
        </section>
      </section>

    );
  }
}

export default WonGame;
