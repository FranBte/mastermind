import React from "react";
import ColorCell from "../ColorCell/ColorCell";

const GuessAttempt = props => {
  const style = {
    border: "1px solid black",
    display: "flex",
    flexFlow: "row nowrap"
  };
  
  return (
    <section className="GuessAttempt" style={style}>
      {props.attempt.map((guess, index) => {
        return <ColorCell color={guess.color} key={`ColorCell-${index}`}/>;
      })}
      
    </section>
  );
};

export default GuessAttempt;
