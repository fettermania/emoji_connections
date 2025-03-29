import React from 'react';

const EmojiTile = ({ emoji, isSelected, solvedGroupClass, onClick }) => {
  const isSolved = solvedGroupClass !== '';
  
  // Build class names
  let className = 'emoji-tile';
  if (isSelected) className += ' selected';
  if (isSolved) className += ' solved ' + solvedGroupClass;
  
  return (
    <div 
      className={className}
      onClick={isSolved ? null : onClick}
    >
      {emoji}
    </div>
  );
};

export default EmojiTile;