import React, { Component, useState } from 'react';
import Square from './Square';
import "./Board.css";

const Board = () => {
    const [squares, setSquares] = useState(Array(9).fill(null));
    const [xIsNext, setxIsNext] = useState(true);

    const calcWinner = (squares) => {
        const lines = [
            [0, 1, 2], [3, 4, 5], [6, 7, 8],
            [0, 3, 5], [1, 4, 7], [2, 5, 8],
            [0, 4, 8], [2, 4, 6]
        ]

        for(let index=0; index<lines.length; index++){
            const [a, b, c] = lines[index];
            if(squares[a] && squares[a] === squares[b] &&
                squares[a] === squares[c]){
                    return squares[a];
                }
        }
        return null; // 승자가 아직 없다
    }

    // 누가 이겼는지 넘겨 받는
    const winner = calcWinner(squares);
    let status;
    if(winner){
        status = 'Winner : ' + winner;
    }
    else{
        status = `Next Player : ${xIsNext ? 'X' : 'O'}`;
    }

    const handleClick = (i) => {
        const newSquares = squares.slice();
        newSquares[i] = xIsNext ? 'X' : 'O';
        setSquares(newSquares);
        setxIsNext(!xIsNext);
    }

    // 넘버링 해주기 위해서 함수로 만듦.
    // 각각의 자식에게 전달 해 줄 수 있다
    const renderSquare = (i) => {
        // 초기화 진행
        return <Square value={squares[i]} 
                        onClick={()=>handleClick(i)}/>
    }

    return (
        <div>
            <div className='status'> {status}</div>
            <div className='board-row'>
                {/* <Square /> */}
                {renderSquare(0)}
                {renderSquare(1)}
                {renderSquare(2)}
            </div>
            <div className='board-row'>
                {renderSquare(3)}
                {renderSquare(4)}
                {renderSquare(5)}
            </div>
            <div className='board-row'>
                {renderSquare(6)}
                {renderSquare(7)}
                {renderSquare(8)}
            </div>
        </div>
    );
}   

export default Board;