import React from 'react';
import Square from '../Square';
import styles from './Board.module.css';

function Board(props) {
  const renderSquare = (i) => {
    const isHighlighted = props.i == i;

    return (
      <Square
        isHighlighted={isHighlighted}
        onClick={() => props.onClick(i)}
        value={props.squares[i]}
      />
    )
  }

  return (
    <div>
      <div className={styles.boardRow}>
        {renderSquare(0)}
        {renderSquare(1)}
        {renderSquare(2)}
      </div>
      <div className={styles.boardRow}>
        {renderSquare(3)}
        {renderSquare(4)}
        {renderSquare(5)}
      </div>
      <div className={styles.boardRow}>
        {renderSquare(6)}
        {renderSquare(7)}
        {renderSquare(8)}
      </div>
    </div>
  )
}

export default Board;
