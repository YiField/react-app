import React from 'react';
import Board from './Board';
import './game.css';
class Game extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      //历史步骤
      history: [
        {
          squares: Array(9).fill(null),
        },
      ],
      xIsNext: true,
      //步数
      stepNumber: 0,
      chessIdx: [],
      historyPosition: [],
      listDirection: 1, //1正序 -1:逆序
      winnerIdx: [],
    };
  }
  jumpTo(step) {
    this.setState({
      stepNumber: step,
      xIsNext: step % 2 === 0,
    });
  }
  render() {
    const history = this.state.history;
    const current = history[this.state.stepNumber];
    const winner = calculateWinner(current.squares);
    let status;
    if (winner && winner.length === 2) {
      status = 'Step:' + this.state.stepNumber + ', Winner: ' + winner[0];
      this.winnerIdx = winner[1];
    } else if (history && history.length === 10) {
      status = 'No Winner GameOver';
    } else {
      status =
        'Step:' + this.state.stepNumber + ', Next player: ' + (this.state.xIsNext ? 'X' : 'O');
    }

    const moves = history.map((step, move) => {
      const desc = move ? 'Go to move #' + move : 'Go to game start';
      return (
        <li
          key={move}
          className={(move === this.state.stepNumber ? 'isActive' : null) + ' li-item '}>
          <div className="list-btn" onClick={() => this.jumpTo(move)}>
            {desc}
          </div>
          <div className="info">
            {move !== 0
              ? 'current position:(' +
                this.state.historyPosition[move - 1][0] +
                ', ' +
                this.state.historyPosition[move - 1][1] +
                ')'
              : ''}
          </div>
        </li>
      );
    });

    return (
      <div className="game">
        <div className="game-board">
          <Board
            squares={current.squares}
            onClick={(i) => this.handleClick(i)}
            winners={this.winnerIdx}></Board>
        </div>
        <div className="game-info">
          <div> {status} </div>
          <span
            className="info-btn"
            onClick={() => {
              this.sortHistory();
            }}>
            生序
          </span>
          <span
            className="info-btn"
            onClick={() => {
              this.sortHistory(-1);
            }}>
            降序
          </span>
          <ol>
            <div className="btn"> {this.state.listDirection === 1 ? moves : moves.reverse()} </div>
          </ol>
        </div>
      </div>
    );
  }
  sortHistory(dir) {
    if (!dir) dir = 1; //默认生序
    this.setState({
      listDirection: dir,
    });
  }
  handleClick(i) {
    const history = this.state.history;
    const current = history[this.state.stepNumber];
    const squares = current.squares.slice();

    if (calculateWinner(squares) || squares[i]) {
      return;
    }
    //判断是否游戏结束
    squares[i] = this.state.xIsNext ? 'X' : 'O';
    let hostoryPosition = this.state.historyPosition.slice(0);
    const column = (i % 3) + 1;
    const row = Math.ceil((i + 1) / 3);
    let position = [row, column];
    hostoryPosition.push(position);
    this.setState({
      history: history.concat([
        {
          squares: squares,
        },
      ]),
      xIsNext: !this.state.xIsNext,
      stepNumber: history.length,
      historyPosition: hostoryPosition,
    });
  }
}

function calculateWinner(squares) {
  const lines = [
    //能连成线的
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      //win
      return [squares[a], lines[i]];
    }
  }
  return null;
}
export default Game;
