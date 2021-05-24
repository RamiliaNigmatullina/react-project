import React from 'react';
import Board from '../components/Board';
import HistoryOrderSwitcher from '../components/HistoryOrderSwitcher';
import MovesList from '../components/MovesList';
import Status from '../components/Status';
import styles from '../styles/Game.module.css';

const SQUARE_SIZE = 3;

class Game extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      history: [{ squares: Array(9).fill(null) }],
      isAscOrder: true,
      selectedStep: null,
      stepNumber: 0,
      xIsNext: true,
    };
  }

  calculateRow = (i) => (i - i % SQUARE_SIZE) / SQUARE_SIZE + 1

  calculateColumn = (i) => i % SQUARE_SIZE + 1

  jumpTo = (step) => this.setState({ stepNumber: step, xIsNext: (step % 2) === 0, isEnded: false })

  highlightStep = (step) => this.setState({ selectedStep: step.i })

  removeHighlight = () => this.setState({ selectedStep: null })

  changeHistoryOrder = () => this.setState({ isAscOrder: !this.state.isAscOrder })

  handleClick(i) {
    const history = this.state.history.slice(0, this.state.stepNumber + 1);
    const current = history[history.length - 1];
    const squares = current.squares.slice(); // .slice() — создает копию массива (иммутабельность)

    if (calculateWinner(squares) || squares[i]) { return; }

    squares[i] = this.state.xIsNext ? 'X' : 'O';

    let elements = squares.filter((element) => element != null);
    let isEnded = elements.length == SQUARE_SIZE * SQUARE_SIZE;

    this.setState({
      history: history.concat([{
        column: this.calculateColumn(i),
        i: i,
        row: this.calculateRow(i),
        squares: squares,
      }]),
      stepNumber: history.length,
      xIsNext: !this.state.xIsNext,
      isEnded: isEnded,
    });
  }

  render() {
    const history = this.state.history;
    const current = history[this.state.stepNumber];
    const winner = calculateWinner(current.squares);

    const selectedMoves = () => {
      let moves = [];

      if (this.state.selectedStep !== null) {
        moves = [this.state.selectedStep];
      } else if (winner) {
        moves = winner.line;
      } else {
        moves = []
      }

      return moves;
    }

    return (
      <div className={styles.game}>
        <div className="gameBoard">
          <Board
            selectedMoves={selectedMoves()}
            squares={current.squares}
            onClick={(i) => this.handleClick(i)}
          />
        </div>
        <div className={styles.gameInfo}>
          <div>
            <Status isEnded={this.state.isEnded} winner={winner} xIsNext={this.state.xIsNext} />
          </div>
          <div>
            <HistoryOrderSwitcher isAscOrder={this.state.isAscOrder} onClick={this.changeHistoryOrder} />
          </div>
          <div>
            <MovesList
              history={history}
              isAscOrder={this.state.isAscOrder}
              onClick={this.jumpTo}
              onMouseOut={this.removeHighlight}
              onMouseOver={this.highlightStep}
            />
          </div>
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
      return { line: [a, b, c], name: squares[a] };
    }
  }
  return null;
}

export default Game;
