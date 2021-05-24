import React from 'react';
import styles from './MovesList.module.css';

function MovesList({ history, isAscOrder, onClick, onMouseOut, onMouseOver }) {
  let movesList = [];

  const moveButton = (move, step, text) => (
    <button className={styles.moveButton} onClick={() => onClick(move)}>
      {text}
    </button>
  )

  const moveItem = (move, step) => {
    const goToBeginningText = 'To the beginning of the game';
    const goToMoveText = `Go to move #${move} (row: ${step.row}, column: ${step.column})`;
    const text = move ? goToMoveText : goToBeginningText;
    const moveNumber = `${move + 1}. `;

    return (
      <div className={styles.moveItem} key={move} onMouseOut={() => onMouseOut()} onMouseOver={() => onMouseOver(step)}>
        <div className={styles.moveNumber}>
          {moveNumber}
        </div>
        <div>
          {moveButton(move, step, text)}
        </div>
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
