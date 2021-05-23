import React from 'react';
import styles from './Square.module.css';
import classNames from 'classnames';

function Square(props) {
  const squareClasses = classNames(styles.square, { [styles.highlighted]: props.isHighlighted });

  return (
    <button className={squareClasses} onClick={props.onClick}>
      {props.value}
    </button>
  )
}

export default Square;
