import './App.css'
import { useState } from 'react'
import Menu from './components/Menu'
import Quiz from './components/Quiz'
import EndScreen from './components/EndScreen'
import {GameStateContext} from './helpers/Context'
function App() {

  const [gameStat,setGamestat]=useState("menu");
  const [userName,setUsername]=useState("");
  const [score,setScore]= useState(0);
  //different states -> menu,playing,finished

  return (
    <>
    <div className='App'> 
      <h1>Quiz-App</h1>
      <GameStateContext.Provider value={{gameStat,setGamestat,userName,setUsername,score,setScore}}>
      {
        gameStat==="menu" && <Menu/>
      }
      {
        gameStat==="playing" && <Quiz/>
      }
      {
        gameStat === "finished" && <EndScreen />
      }
      </GameStateContext.Provider>
    </div>
    </>
  )
}

export default App
