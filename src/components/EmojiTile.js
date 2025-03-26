import React from 'react';

const EmojiTile = ({ emoji, isSelected, isSolved, colorClass, onClick }) => {
  // Build class name based on the tile's state
  const tileClassName = `emoji-tile ${isSelected ? 'selected' : ''} ${isSolved ? 'solved ' + colorClass : ''}`;

  return (
    <div className={tileClassName} onClick={onClick}>
      {emoji}
    </div>
  );
};

export default EmojiTile;
