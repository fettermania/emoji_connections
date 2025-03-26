import React from 'react';

const Footer = ({ onReset, isGameOver, isGameWon }) => {
  return (
    <footer className="footer">
      {isGameOver && (
        <button className="btn" onClick={onReset}>
          Play Again
        </button>
      )}
      <p>
        Group emojis into categories to solve the puzzle!
      </p>
      <p>
        <small>&copy; {new Date().getFullYear()} Emoji Connections</small>
      </p>
    </footer>
  );
};

export default Footer;
