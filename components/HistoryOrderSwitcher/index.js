import React from 'react';
import styles from './HistoryOrderSwitcher.module.css';

function HistoryOrderSwitcher({ isAscOrder, onClick }) {
  const text = `Sort ${isAscOrder ? 'desc' : 'asc' }`;

  return (
    <>
      <button className={styles.button} onClick={() => onClick()}>{text}</button>
    </>
  )
}

export default HistoryOrderSwitcher;
