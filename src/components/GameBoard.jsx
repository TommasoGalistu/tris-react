import { useState } from "react";

const initialGameboard = [
    [null, null, null],
    [null, null, null],
    [null, null, null]
];

export default function GameBoard({onSelectSquare, activePlayerSymbol}){
    const [gameBoard, setGameBoard] = useState(initialGameboard);
    function handleSelectSquare(rowIndex, square){
        setGameBoard((prevGameBoard) =>{
            const updateBoard = [...prevGameBoard.map((innerArray) => [...innerArray])]
            updateBoard[rowIndex][square] = activePlayerSymbol;
            return updateBoard;
        });
        onSelectSquare()
    }
    return (
        <ol id="game-board">
            {gameBoard.map((row, rowIndex) => <li key={rowIndex}>
                <ol>
                    {row.map((playerSymbol, squareIndex) => 
                    <li key={squareIndex}>
                        <button onClick={() => handleSelectSquare(rowIndex, squareIndex)}>{playerSymbol}</button>
                    </li>)}
                </ol>
            </li>)}
        </ol>
    )
}