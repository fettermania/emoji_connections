import React from 'react';

const Footer = ({ onReset, isGameOver, isGameWon }) => {
  return (
    <footer className="footer">
      {isGameOver && (
        <button 
          className="game-button play-again-button" 
          onClick={onReset}
        >
          Play Again
        </button>
      )}
      <p>
        Emoji Connections is a game where you group emojis with common connections.
      </p>
      <p>
        &copy; {new Date().getFullYear()} Emoji Connections
      </p>
    </footer>
  );
};

export default Footer;
