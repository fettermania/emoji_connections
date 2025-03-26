import React from 'react';

const Header = ({ mistakesCount, maxMistakes }) => {
  // Create an array of dots to display the mistake counter
  const mistakeDots = Array(maxMistakes).fill().map((_, index) => (
    <div 
      key={index}
      className={`mistake-dot ${index < mistakesCount ? 'active' : ''}`}
    />
  ));

  return (
    <header className="header">
      <h1>Emoji Connections</h1>
      <p>Find groups of 4 emojis with a common theme</p>
      <div className="mistake-counter">
        {mistakeDots}
      </div>
    </header>
  );
};

export default Header;
