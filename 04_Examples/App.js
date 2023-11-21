import { useState } from 'react';
import './App.css';
import Board from './components/Board';

// 여러개의 Board를 관리하기 위해 최상위 App으로 이동
const App = () => {
  const [history, setHistory] = useState([{squares:Array(9).fill(null)}]);
  const [xIsNext, setxIsNext] = useState(true);
  const [stepNumber, setStepNumber] = useState(0);

  const calcWinner = (squares) => {
    const lines = [
        [0, 1, 2], [3, 4, 5], [6, 7, 8],
        [0, 3, 5], [1, 4, 7], [2, 5, 8],
        [0, 4, 8], [2, 4, 6]
    ]

    for (let index = 0; index < lines.length; index++) {
      const [a, b, c] = lines[index];
      if (squares[a] && squares[a] === squares[b] &&
        squares[a] === squares[c]) {
        return squares[a];
      }
    }
    return null;
  }

  const current = history[stepNumber]; // 현재 게임하고 있는 게임판
  const winner = calcWinner(current.squares); // 누가 이겼는지 넘겨 받는

    let status;
    if (winner) {
        status = 'Winner : ' + winner;
    }
    else {
        status = `Next Player : ${xIsNext ? 'X' : 'O'}`;
    }

  const handleClick = (i) => {
    const newHistory = history.slice(0, stepNumber + 1); // 잘라낸 만큼 내가 이동한 수를 복사
    const newCurrent = newHistory[newHistory.length -1];
    const newSquares = newCurrent.squares.slice();

    if (calcWinner(newSquares) || newSquares[i]) {
        return;
    }

    newSquares[i] = xIsNext ? 'X' : 'O';
    setxIsNext(!xIsNext);
    setHistory([...newHistory, {squares:newSquares}]);
    setStepNumber(newHistory.length);
  }

  const jumpTo = (step) => {
    setStepNumber(step);
    setxIsNext((step%2) === 0);
  }

  const moves = history.map((step, move) => {
    const desc = move ? "Go to move # " + move : "Go to start";
    return (
      <li key={move}>
          <button className="move-button" onClick={()=>jumpTo(move)}>{desc}</button>
      </li>
    )
  })

  return (
    <div className="game">
      <div className="game-board">
        <Board squares={current.squares} onClick={(i) => handleClick(i)}/>
      </div>
      <div className="game-info">
        <div className='status'>{status}</div>
        <ol style={{listStyle:'none'}}>{moves}</ol>
      </div>
    </div>
  )
}

export default App;
