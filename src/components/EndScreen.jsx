import React from "react";
import '../App.css'
import {Questions} from '../helpers/Questions'
import { useContext } from 'react'
import {GameStateContext} from '../helpers/Context'

const EndScreen = () =>{
    const {score,setScore,setGamestat,userName} =useContext(GameStateContext);

    const restartQuiz = () => {
        setScore(0);
        setGamestat("menu");
    }

    return(
        <>
        <div className="Endscreen">
            <h1>
                Quiz Finished
            </h1>
            <h3>{userName}</h3>
            <h1>{score}/{Questions.length}</h1>
            <button onClick={restartQuiz}>Restart Quiz</button>
        </div>
        {/* <h1>Quiz Finished</h1> */}
        </>
    )
}

export default EndScreen