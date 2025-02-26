
import Player from './components/Player'
import GameBoard from './components/GameBoard'
import Log from './components/Log';
import { useState } from 'react';
import { WINNING_COMBINATIONS } from './winning-combination';

function deriveActivePlayer(gameTurn){
  let currentPlayer = "X";
  if(gameTurn.length > 0 && gameTurn[0].player === "X"){
    currentPlayer = "O";
  }
  return currentPlayer
}
function App() {
  const [gameTurns, setGameTurns] = useState([])
  // const [activePlayer, setActivePlayer] = useState('X')
  const activePlayer = deriveActivePlayer(gameTurns)

  function handleSelectSquare(rowIndex, colIndex){
    setGameTurns(prevTurns => {

      const currentPlayer = deriveActivePlayer(prevTurns)
      
      const updatetedTurns = [{ square: {row: rowIndex, col: colIndex}, player: currentPlayer},...prevTurns];
      return updatetedTurns
    });
  }

  return (
    <main>
      <div id="game-container">
        <ol id="players" className='highlight-player'>
          <Player initialName="Player 1" symbol="X" isActive={activePlayer === "X"}/>
          <Player initialName="Player 2" symbol="O" isActive={activePlayer === "O"}/>
          
        </ol>
        <GameBoard onSelectSquare={handleSelectSquare} turns={gameTurns}/>
      </div>
      <Log turns={gameTurns}/>
    </main>
  )
}

export default App
