import React from 'react';

const SolvedGroup = ({ group, colorClass }) => {
  return (
    <div className={`solved-group ${colorClass}`}>
      <div className="solved-group-title">
        {group.name}
      </div>
      <div className="solved-group-emojis">
        {group.emojis.map((emoji, index) => (
          <span key={index}>{emoji}</span>
        ))}
      </div>
    </div>
  );
};

export default SolvedGroup;
