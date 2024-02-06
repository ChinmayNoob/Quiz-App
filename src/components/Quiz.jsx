import '../App.css'
import { useState } from 'react'
import {Questions} from '../helpers/Questions'
import { useContext } from 'react'
import {GameStateContext} from '../helpers/Context'

function Quiz(){
    const [curr,setCurr]=useState(0);
    const [option,setOption]=useState("");
    const {score,setScore,gameStat,setGamestat} =useContext(GameStateContext);

    const chooseOpt =(option) =>{
        setOption(option);
    }
    const nextQuestion = () =>{
        if(Questions[curr].answer==option){
            setScore(score+1)
        }
        setCurr(curr+1);
    }
    const FinishedQuiz = () => {
        if(Questions[curr].answer==option){
            setScore(score+1)
        }
        setGamestat("finished");
    }
    // try {
    //     console.log(score)
    // }
    // catch(error)
    // {
    //     console.error(`Error ${error}`)
    // }
    return (
        <>
        <div className='Quiz'>
            <h1>{Questions[curr].prompt}</h1>
            <div className='questions'>
                <button onClick={()=>{
                    chooseOpt("optA")
                }}>{Questions[curr].optA}</button>
                <button onClick={()=>{
                    chooseOpt("optB")
                }}>{Questions[curr].optB}</button>
                <button onClick={()=>{
                    chooseOpt("optC")
                }}>{Questions[curr].optC}</button>
                <button onClick={()=>{
                    chooseOpt("optD")
                }}>{Questions[curr].optD}</button>
            </div>
            {
                curr == Questions.length-1 ? (<button onClick={FinishedQuiz} id = "nextQuestion">Finish Quiz</button>) :
                 (<button onClick={nextQuestion} id="nextQuestion">Next Question</button>)
            }
        </div>
        </>
    )
}

export default Quiz