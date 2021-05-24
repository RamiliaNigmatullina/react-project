import React from 'react';

function Status({ isEnded, xIsNext, winner }) {
  let status;

  if (winner) {
    status = `${winner.name} Won!`;
  } else if (isEnded) {
    status = 'Draw!';
  } else {
    status = `Next player: ${xIsNext ? 'X' : 'O'}`;
  }

  return status;
}

export default Status;
