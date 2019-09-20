import React from 'react'


const closeHandler = ()=>{
    window.location.reload();
}


export default function GameOver(props) {
    return (
        <div id ="result">
            <div id="gameoverbox">
                <p id="gameover">Game over ! Your final score is : {props.score}</p>
                <button onClick={closeHandler}>Close</button>
            </div>
        </div>
    )
}
