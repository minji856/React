import React, { useState } from 'react';
import Square from './Square';
import "./Board.css";

// 부모에게 받아서 다시 자식에게 전달해주는
const Board = ({squares, onClick}) => {
    // 넘버링 해주기 위해서 함수로 만듦.
    // 각각의 자식에게 전달 해 줄 수 있다
    const renderSquare = (i) => {
        // 초기화 진행
        return <Square value={squares[i]} 
                        onClick={()=>onClick(i)}/>
    }

    return (
        <div className='board-wrapper'>
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