import React from "react";
import FeedbackCell from "../FeedbackCell/FeedbackCell";

const GameFeedback = props => {
    const style = {
      border: "1px solid black",
      display: "flex",
      flexFlow: "row nowrap"
    };

    return (
      <section className="GameFeedback" style={style}>
        {props.feedback.map((guess, index) => {
          return <FeedbackCell color={guess.feedback} key={`FeedbackCell-${index}`}/>;
        })}
      </section>
    );
  
}

export default GameFeedback;
