import React, { Component } from "react";
import ColorCell from "../ColorCell/ColorCell";

class ColorOptions extends Component {
  render() {
    const style = {
      display: "flex",
      flexFlow: "column",
      alignItems: "center",
      margin: "0"
    };
    const styleColors = {
      display: "flex",
      flexFlow: "row nowrap",
      marginBottom: "1vmin"
    }
    const Colors = (
      <section style={style}>
        <p style={style}>Click the colors to break the code!</p>
        <section style={styleColors}>
          {this.props.colors.map(color => {
            return (
              <ColorCell key={color} color={color} click={this.props.click} />
            );
          })}
        </section>
      </section>
    );
    return (
      //unneeded class
      <section className="ColorOptions">{Colors}</section>
    );
  }
}

export default ColorOptions;
