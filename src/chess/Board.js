import React from 'react';
import Square from './Square';
/*棋盘*/
class Board extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      chess: [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
      ],
    };
  }
  renderSquare(i) {
    return (
      <Square
        value={this.props.squares[i]}
        clickHandler={() => this.props.onClick(i)}
        key={i}
        isWinner={this.checkIsWinner(this.props.winners, i)}
      />
    );
  }
  checkIsWinner(winners, i) {
    if (winners && winners.length) {
      if (winners.indexOf(i) !== -1) return true;
    }
    return false;
  }
  render() {
    //使用循环
    const chesses = this.state.chess.map((chessRow, index) => {
      return (
        <div key={index}>
          {chessRow.map((chess) => {
            return this.renderSquare(chess);
          })}
        </div>
      );
    });
    return (
      <div>
        {chesses}
        {/* <div className="board-row">
          {this.renderSquare(0)}
          {this.renderSquare(1)}
          {this.renderSquare(2)}
        </div>
        <div className="board-row">
          {this.renderSquare(3)}
          {this.renderSquare(4)}
          {this.renderSquare(5)}
        </div>
        <div className="board-row">
          {this.renderSquare(6)}
          {this.renderSquare(7)}
          {this.renderSquare(8)}
        </div> */}
      </div>
    );
  }
}

export default Board;
