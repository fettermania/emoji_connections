import React from 'react';
import EmojiTile from './EmojiTile';
import SolvedGroup from './SolvedGroup';

const GameBoard = ({ 
  gameData, 
  selectedEmojis, 
  solvedGroups, 
  availableEmojis,
  onEmojiSelect, 
  onSubmit, 
  onShuffle,
  isGameOver,
  isGameWon
}) => {
  // Check if tile is in a solved group and return the group color class
  const getSolvedGroupClass = (emoji) => {
    for (let i = 0; i < solvedGroups.length; i++) {
      if (solvedGroups[i].emojis.includes(emoji)) {
        const colorClasses = ['solved-yellow', 'solved-green', 'solved-blue', 'solved-purple'];
        return colorClasses[i % colorClasses.length];
      }
    }
    return '';
  };

  return (
    <div className="game-board">
      {/* Display solved groups */}
      <div className="solved-groups">
        {solvedGroups.map((group, index) => (
          <SolvedGroup 
            key={index}
            group={group}
            index={index}
          />
        ))}
      </div>

      {/* Display emoji grid */}
      <div className="emojis-grid">
        {availableEmojis.map((emoji, index) => (
          <EmojiTile
            key={index}
            emoji={emoji}
            isSelected={selectedEmojis.includes(emoji)}
            solvedGroupClass={getSolvedGroupClass(emoji)}
            onClick={() => onEmojiSelect(emoji)}
          />
        ))}
      </div>

      {/* Game controls */}
      <div className="game-controls">
        <button 
          className="btn btn-shuffle" 
          onClick={onShuffle}
          disabled={isGameOver || availableEmojis.length === 0}
        >
          Shuffle
        </button>
        <button 
          className="btn btn-submit" 
          onClick={onSubmit}
          disabled={selectedEmojis.length !== 4 || isGameOver}
        >
          Submit
        </button>
      </div>

      {/* Game over message */}
      {isGameOver && (
        <div className="game-over-overlay">
          <div className="game-over-message">
            <h2>{isGameWon ? 'Congratulations!' : 'Game Over!'}</h2>
            <p>
              {isGameWon 
                ? 'You successfully completed all connections!' 
                : 'You ran out of attempts. Better luck next time!'}
            </p>
            {!isGameWon && solvedGroups.length > 0 && (
              <p>You solved {solvedGroups.length} out of 4 connections.</p>
            )}
            <button className="btn" onClick={() => window.location.reload()}>
              Play Again
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default GameBoard;