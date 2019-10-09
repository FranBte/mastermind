import React, { Component } from "react";
import "./LaunchModal.css";

class Modal extends Component {
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
      backgroundColor: "rgba(0,0,0,0.4)",
    };

    const styleModalContainer = {
      backgroundColor: "#fefefe",
      margin: "15% auto",
      padding: "20px",
      border: "1px solid #888",
      width: "80%", 
      borderRadius: "10px"
    };

    const styleSliderContainer = {
      width: "50%", 
      display: "flex", 
      alignItems: "center"
    };

    const styleContainer = {
      display: "flex",
      flexFlow: "column",
      alignItems: "center"
    };

    if (!this.props.show) {
      return null;
    }
    return (
      <section style={styleModal}>
        <section style={styleModalContainer}>
          <section style={styleContainer}>
            <h2>Customize your game</h2>
            <label>Choose the length of the secret code!</label>
            <section className="sliderContainer" style={styleSliderContainer}>
              <span>0</span>
              <input
                onChange={this.props.changeCode}
                type="range"
                className="codeLength"
                min="2"
                max="30"
                defaultValue="0"
              />
              <span>{this.props.codeLength}</span>
            </section>
            <label>Choose your number of attempts!</label>
            <section className="sliderContainer" style={styleSliderContainer}>
              <span>0</span>
              <input
                onChange={this.props.changeAttempts}
                className="attemptsLength"
                type="range"
                min="2"
                max="30"
                defaultValue="0"
              />
              <span>{this.props.attemptsLength}</span>
            </section>
            <button onClick={this.props.click} className="start-button">
              Start Game
            </button>
          </section>
        </section>
      </section>
    );
  }
}

export default Modal;
