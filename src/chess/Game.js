import React from 'react'
import Board from './Board';
import './game.css'
class Game extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      //历史步骤
      history: [{
        squares: Array(9).fill(null)
      }],
      xIsNext: true,
      //步数
      stepNumber: 0,
      chessIdx: []
    }
  }
  jumpTo(step) {
    this.setState({
      stepNumber: step,
      xIsNext: (step % 2) === 0,
    })
  }
  render() {
    const history = this.state.history;
    const current = history[this.state.stepNumber];
    const winner = calculateWinner(current.squares);
    let info;
    if (this.state.chessIdx.length === 2) {
      info = 'current position :(' + this.state.chessIdx[0] + ', ' + this.state.chessIdx[1] + ')'
    } else {
      info = ''
    }

    const moves = history.map((step, move) => {
      const desc = move ? 'Go to move #' + move : 'Go to game start';
      return ( <
        li key = {
          move
        }
        className = {
          move === this.state.stepNumber ? 'isActive' : null,
          'li-item'
        } >
        <
        div className = "list-btn"
        onClick = {
          () => this.jumpTo(move)
        } > {
          desc
        } < /div> <
        div className = "info" > {
          info
        } < /div> <
        /li>
      )
    })

    let status;
    if (winner) {
      status = 'Step:' + this.state.stepNumber + ', Winner: ' + winner;
    } else {
      status = 'Step:' + this.state.stepNumber + ', Next player: ' + (this.state.xIsNext ? 'X' : 'O');
    }

    return ( <
      div className = "game" >
      <
      div className = "game-board" >
      <
      Board squares = {
        current.squares
      }
      onClick = {
        (i) => this.handleClick(i)
      } > < /Board> <
      /div> <
      div className = "game-info" >
      <
      div > {
        status
      } < /div> <
      ol >
      <
      div className = "btn" > {
        moves
      } < /div> <
      /ol> <
      /div> <
      /div>
    )
  }
  handleClick(i) {
    const history = this.state.history;
    const current = history[this.state.stepNumber];
    const squares = current.squares.slice();
    const column = i % 3 + 1;
    const row = Math.ceil((i + 1) / 3);
    this.setState({
      chessIdx: [row, column]
    });
    if (calculateWinner(squares) || squares[i]) {
      return;
    }
    //判断是否游戏结束
    squares[i] = this.state.xIsNext ? 'X' : 'O';
    this.setState({
      history: history.concat([{
        squares: squares
      }]),
      xIsNext: !this.state.xIsNext,
      stepNumber: history.length
    })
  }
}

function calculateWinner(squares) {
  const lines = [ //能连成线的
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
      return squares[a];
    }
  }
  return null;
}
export default Game