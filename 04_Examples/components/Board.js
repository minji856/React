import React, { Component } from 'react';
import Square from './Square';
import "./Board.css";

export default class Board extends Component {
    constructor(props){
        super(props);

        this.state = {
            squares: Array(9).fill(null)
        }
    }

    handleClick(i){
        const squares = this.state.squares.slice();
        squares[i] = 'X';
        this.setState({squares: squares});
    }

    // 넘버링 해주기 위해서 함수로 만듦.
    // 각각의 자식에게 전달 해 줄 수 있다
    renderSquare(i){
        // 초기화 진행
        return <Square value={this.state.squares[i]} 
                        onClick={()=>this.handleClick(i)}/>
    }

    render() {
        return (
            <div>
                <div className='status'> Next Player : X, O</div>
                <div className='board-row'>
                    {/* <Square /> */}
                    {this.renderSquare(0)}
                    {this.renderSquare(1)}
                    {this.renderSquare(2)}
                </div>
                <div className='board-row'>
                    {this.renderSquare(3)}
                    {this.renderSquare(4)}
                    {this.renderSquare(5)}
                </div>
                <div className='board-row'>
                    {this.renderSquare(6)}
                    {this.renderSquare(7)}
                    {this.renderSquare(8)}
                </div>
            </div>
         );
     }
}
