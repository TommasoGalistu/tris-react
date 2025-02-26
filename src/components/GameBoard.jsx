import { useState } from "react";



export default function GameBoard({onSelectSquare, board}){
    
    // const [gameBoard, setGameBoard] = useState(initialGameboard);
    // function handleSelectSquare(rowIndex, square){
    //     setGameBoard((prevGameBoard) =>{
    //         const updateBoard = [...prevGameBoard.map((innerArray) => [...innerArray])]
    //         updateBoard[rowIndex][square] = activePlayerSymbol;
    //         return updateBoard;
    //     });
    //     onSelectSquare()
    // }
    return (
        <ol id="game-board">
            {board.map((row, rowIndex) => <li key={rowIndex}>
                <ol>
                    {row.map((playerSymbol, squareIndex) => 
                    <li key={squareIndex}>
                        <button onClick={() => onSelectSquare(rowIndex, squareIndex)} disabled={playerSymbol}>{playerSymbol}</button>
                    </li>)}
                </ol>
            </li>)}
        </ol>
    )
}