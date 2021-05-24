import React from 'react';
import Square from '../Square';
import styles from './Board.module.css';

const SQUARE_SIZE = 3;

function Board(props) {
  const renderSquare = (i) => {
    const isHighlighted = props.selectedMoves.includes(i);

    return (
      <Square
        key={i}
        isHighlighted={isHighlighted}
        onClick={() => props.onClick(i)}
        value={props.squares[i]}
      />
    )
  }

  const generateRowHtml = (row) => {
    let rowHtml = [];

    for(let column = 0; column < SQUARE_SIZE; column++) {
      const i = row * SQUARE_SIZE + column;

      rowHtml = rowHtml.concat(renderSquare(i))
    }

    return rowHtml;
  }

  const generateSquareHtml = () => {
    let squareHtml = [];

    for(let row = 0; row < SQUARE_SIZE; row++) {
      squareHtml = squareHtml.concat(<div className={styles.boardRow} key={row}>{generateRowHtml(row)}</div>);
    }

    return squareHtml;
  }

  return (
    <div>
      {generateSquareHtml()}
    </div>
  )
}

export default Board;
