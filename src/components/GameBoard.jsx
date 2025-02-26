import { useState } from "react";

const initialGameboard = [
    [null, null, null],
    [null, null, null],
    [null, null, null]
];

export default function GameBoard({onSelectSquare, turns}){
    let gameBoard = initialGameboard;
    for(const turn of turns){
        const {square, player} = turn;
        const {row, col} = square;

        gameBoard[row][col] = player
    }
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
            {gameBoard.map((row, rowIndex) => <li key={rowIndex}>
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