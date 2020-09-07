import React from 'react'
import Square from './Square'
/*棋盘*/
class Board extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      squares: Array(9).fill(null),
      xIsNext: true
    }
  }
  renderSquare(i) {
    return <Square value={i}/> 
  }
  render() {
    return (
      <div>
        {this.renderSquare(1)}
        {this.renderSquare(1)}
        {this.renderSquare(1)}
        {this.renderSquare(1)}
        {this.renderSquare(1)}
      </div>
    )
  }
}

export default Board
