import React from 'react';
import Board from '../components/Board';
import styles from '../styles/Game.module.css';

class Game extends React.Component {
  render() {
    return (
      <div className={styles.game}>
        <div className="gameBoard">
          <Board />
        </div>
        <div className="gameInfo">
          <div>{/* status */ }</div>
          <div>{/* TODO */ }</div>
        </div>
      </div>
    );
  }
}

export default Game;
