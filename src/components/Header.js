import React from 'react';

const Header = ({ mistakesCount, maxMistakes }) => {
  // Create an array for mistake dots
  const mistakeDots = Array.from({ length: maxMistakes }, (_, index) => (
    <div 
      key={index} 
      className={`mistake-dot ${index < mistakesCount ? 'active' : ''}`}
    ></div>
  ));

  return (
    <div className="header">
      <h1>Emoji Connections</h1>
      <p>Group the emojis into four categories.</p>
      <div className="mistake-counter">
        {mistakeDots}
      </div>
      <p>Mistakes: {mistakesCount}/{maxMistakes}</p>
    </div>
  );
};

export default Header;