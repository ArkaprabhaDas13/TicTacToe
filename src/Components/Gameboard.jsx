import React from "react";
import { useState } from "react";

const initialGameBoard = [
    [null, null, null],
    [null, null, null],
    [null, null, null]
];




function Gameboard({ onSelectSquare }){
    
    // const [gameBoard, setGameBoard] = useState(initialGameBoard);
    
    // function handleSelectSquare(rowIndex, colIndex){
    
    //     setGameBoard((prevBoard)=>{
    //         const updatedBoard = [...prevBoard];
    //         updatedBoard[rowIndex][colIndex] = activePlayerSymbol;
    //         return updatedBoard;
    //     })

    //     onSelectSquare();
    
    // }

    return(
        <>

            <ol id="game-board">
                {initialGameBoard.map((row, rowIndex)=><li key={rowIndex}>
                    <ol>
                        {row.map((playerSymbol, colIndex)=><li key={colIndex}>
                                <button onClick={onSelectSquare} >{playerSymbol}</button>
                            </li>)}
                    </ol>
                </li>)}
            </ol>

        </>
    )
}

export default Gameboard;