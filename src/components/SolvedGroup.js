import React from 'react';

const SolvedGroup = ({ group, index }) => {
  const colorClasses = ['solved-yellow', 'solved-green', 'solved-blue', 'solved-purple'];
  const colorClass = colorClasses[index % colorClasses.length];
  
  return (
    <div className={`solved-group ${colorClass}`}>
      <div className="solved-group-title">{group.category}</div>
      <div className="solved-group-emojis">
        {group.emojis.map((emoji, i) => (
          <span key={i}>{emoji}</span>
        ))}
      </div>
    </div>
  );
};

export default SolvedGroup;