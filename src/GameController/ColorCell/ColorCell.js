import React from "react";
// import "./Color.css"
const ColorCell = props => {
        const style = {
            height: "5vmin",
            width: "5vmin",
            borderRadius: "100%",
            border: "1px solid black",
            backgroundColor: `${props.color}`,
            margin: "1vmin"
          };
    
    return (
           <section className={props.color} style={style} onClick={props.click}></section>
      );
}

export default ColorCell;