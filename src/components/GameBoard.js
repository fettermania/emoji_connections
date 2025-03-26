import React from 'react';
import EmojiTile from './EmojiTile';
import SolvedGroup from './SolvedGroup';
import GameOverModal from './GameOverModal';

const GameBoard = ({ 
  gameData, 
  selectedEmojis, 
  solvedGroups, 
  onEmojiSelect, 
  onSubmit, 
  onShuffle,
  isGameOver,
  isGameWon
}) => {
  // Get all unsolved emojis
  const getUnsolvedEmojis = () => {
    // Get all emojis that are not part of a solved group
    const solvedEmojis = solvedGroups.flatMap(group => group.emojis);
    
    // Create an array of all emojis from all groups in the game data
    const allEmojis = gameData.groups.flatMap(group => group.emojis);
    
    // Filter out the solved emojis
    return allEmojis.filter(emoji => !solvedEmojis.includes(emoji));
  };

  const unsolvedEmojis = getUnsolvedEmojis();

  // Color classes for solved groups
  const colorClasses = [
    'solved-yellow',
    'solved-green', 
    'solved-blue', 
    'solved-purple'
  ];

  return (
    <div className="game-board">
      {/* Unsolved emojis grid */}
      <div className="emojis-grid">
        {unsolvedEmojis.map((emoji, index) => (
          <EmojiTile 
            key={index}
            emoji={emoji}
            isSelected={selectedEmojis.includes(emoji)}
            isSolved={false}
            onClick={() => onEmojiSelect(emoji)}
          />
        ))}
      </div>

      {/* Game controls */}
      <div className="game-controls">
        <button 
          className="game-button submit-button"
          onClick={onSubmit}
          disabled={selectedEmojis.length !== 4 || isGameOver}
        >
          Submit
        </button>
        <button 
          className="game-button shuffle-button"
          onClick={onShuffle}
          disabled={isGameOver}
        >
          Shuffle
        </button>
      </div>

      {/* Display solved groups */}
      <div className="solved-groups">
        {solvedGroups.map((group, index) => (
          <SolvedGroup 
            key={index}
            group={group}
            colorClass={colorClasses[index]} 
          />
        ))}
      </div>

      {/* Game over modal */}
      {isGameOver && (
        <GameOverModal 
          isWinner={isGameWon}
          solvedGroupsCount={solvedGroups.length}
        />
      )}
    </div>
  );
};

export default GameBoard;
