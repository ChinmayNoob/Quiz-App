import '../App.css'
import { useContext } from 'react';
import {GameStateContext} from '../helpers/Context'

function Menu() {
    const {gamestat,setGamestat,userName,setUsername}=useContext(GameStateContext)
    return(
        <>
        <div className='Menu'>
            <label>Enter Your Name</label>
            <input type="text" placeholder="Ex Jim Halpert" onChange={(e)=>{
                setUsername(e.target.value);
            }}/>
            <button onClick={()=>{setGamestat("playing")}}>Start Quiz</button>
        </div>
        </>
    )
}
export default Menu;