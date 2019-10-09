import React from "react";
import "./Restart.css"

const restartGame = props => {
    return <button className="restart-button" onClick={props.click}>Restart Game</button>    
}

export default restartGame;