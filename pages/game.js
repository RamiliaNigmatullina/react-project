import React from 'react';
import Board from '../components/Board';
import styles from '../styles/Game.module.css';

const SQUARE_SIZE = 3;

class Game extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      history: [{
        squares: Array(9).fill(null),
      }],
      historyOrderAsc: true,
      stepNumber: 0,
      xIsNext: true,
    };
  }

  calculateRow(i) {
    return (i - i % SQUARE_SIZE) / SQUARE_SIZE + 1;
  }

  calculateColumn(i) {
    return i % SQUARE_SIZE + 1;
  }

  handleClick(i) {
    const history = this.state.history.slice(0, this.state.stepNumber + 1);
    const current = history[history.length - 1];
    // .slice() — создает копию массива (иммутабельность)
    const squares = current.squares.slice();
    if (calculateWinner(squares) || squares[i]) {
      return;
    }
    squares[i] = this.state.xIsNext ? 'X' : 'O';
    this.setState({
      history: history.concat([{
        column: this.calculateColumn(i),
        i: i,
        row: this.calculateRow(i),
        squares: squares,
      }]),
      stepNumber: history.length,
      xIsNext: !this.state.xIsNext,
    });
  }

  jumpTo(step) {
    this.setState({
      stepNumber: step,
      xIsNext: (step % 2) === 0,
    });
  }

  highlightStep(step) {
    this.setState({
      highlightI: step.i,
    });
  }

  removeHighlight() {
    this.setState({
      highlightI: null,
    });
  }

  changeHistoryOrder() {
    this.setState({
      historyOrderAsc: !this.state.historyOrderAsc,
    });
  }

  generateMoveHtml(move, step) {
    const desc = move ?
      `Go to move #${move} (row: ${step.row}, column: ${step.column})` :
      'To the beginning of the game';
    const moveText = `${move + 1}. `;

    return (
      <div key={move}>
        {moveText}
        <button
          onClick={() => this.jumpTo(move)}
          onMouseOver={() => this.highlightStep(step)}
          onMouseOut={() => this.removeHighlight()}>
          {desc}
        </button>
      </div>
    );
  }

  render() {
    const history = this.state.history;
    const current = history[this.state.stepNumber];
    const winner = calculateWinner(current.squares);

    let moves = [];

    history.map((step, move) => {
      moves = moves.concat(this.generateMoveHtml(move, step));
    });

    if (!this.state.historyOrderAsc) { moves = moves.reverse() }

    let status;
    if (winner) {
      status = winner + ' Won!';
    } else {
      status = 'Next player: ' + (this.state.xIsNext ? 'X' : 'O');
    }

    const historyOrderSwitcher = () => {
      const text = `Sort ${this.state.historyOrderAsc ? 'desc' : 'asc' }`;

      return (
        <button onClick={() => this.changeHistoryOrder()}>{text}</button>
      )
    }

    return (
      <div className={styles.game}>
        <div className="gameBoard">
          <Board
            i={this.state.highlightI}
            squares={current.squares}
            onClick={(i) => this.handleClick(i)}
          />
        </div>
        <div className={styles.gameInfo}>
          <div>{status}</div>
          <div>{historyOrderSwitcher()}</div>
          <div>{moves}</div>
        </div>
      </div>
    );
  }
}

function calculateWinner(squares) {
  const lines = [
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

export default Game;
