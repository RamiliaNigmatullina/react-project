import React from 'react';

function HistoryOrderSwitcher({ isAscOrder, onClick }) {
  const text = `Sort ${isAscOrder ? 'desc' : 'asc' }`;

  return (
    <>
      <button onClick={() => onClick()}>{text}</button>
    </>
  )
}

export default HistoryOrderSwitcher;
