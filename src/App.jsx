import Player from "./Components/Player"
import Gameboard from "./Components/Gameboard"
import { useState } from "react"
import Log from "./Components/Log";

function App() {
  
  const [gameTurns, setGameTurns] = useState([]);
  const [activePlayer, setActivePlayer] = useState('X');

  function handleSelectSquare(rowIndex, colIndex){
    setActivePlayer((currentPlayer)=>currentPlayer==='X'?'O':'X')
    setGameTurns(prevTurns => {
      const updatedTurns = [{square:{row:rowIndex, col:colIndex}, player:activePlayer}, ...prevTurns]
    })
  }

  return (

    <menu>

      <div id="game-container">
        <ol id="players" className="highlight-player">
          <Player initialName="Player1" symbol="X" isActive={activePlayer==='X'?true:false} />
          <Player initialName="Player2" symbol="O" isActive={activePlayer==='O'?true:false} />
        </ol>

        <Gameboard onSelectSquare={handleSelectSquare} activePlayerSymbol={activePlayer}/>

      </div>

      <Log/>

    </menu>

  )
}

export default App
