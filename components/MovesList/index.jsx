import React from 'react';
import styles from './MovesList.module.css';

function MovesList({ history, isAscOrder, onClick, onMouseOut, onMouseOver }) {
  let movesList = [];

  const moveButton = (move, step, text) => (
    <button
      className={styles.moveButton}
      onClick={() => onClick(move)}
      onMouseOut={() => onMouseOut()}
      onMouseOver={() => onMouseOver(step)}>
      {text}
    </button>
  )

  const moveItem = (move, step) => {
    const goToBeginningText = 'To the beginning of the game';
    const goToMoveText = `Go to move #${move} (row: ${step.row}, column: ${step.column})`;
    const text = move ? goToMoveText : goToBeginningText;
    const moveNumber = `${move + 1}. `;

    return (
      <div key={move} className={styles.moveItem}>
        {moveNumber}
        {moveButton(move, step, text)}
      </div>
    );
  }

  history.map((step, move) => {
    movesList = movesList.concat(moveItem(move, step));
  });

  if (!isAscOrder) { movesList = movesList.reverse() }

  return movesList;
}

export default MovesList;
