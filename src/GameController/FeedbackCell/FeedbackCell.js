import React from "react";
const FeedbackCell = props => {
        const style = {
            height: "2vmin",
            width: "2vmin",
            borderRadius: "100%",
            border: "1px solid black",
            backgroundColor: `${props.color}`,
            margin: "2.5vmin 1vmin"
          };
    
    return (
           <section className={props.color} style={style}></section>
      );
}

export default FeedbackCell;