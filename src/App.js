import React, { useState, useEffect } from 'react';
import './styles/App.css';
import Header from './components/Header';
import GameBoard from './components/GameBoard';
import Footer from './components/Footer';
import { getGameData } from './data/gameData';

function App() {
  const [gameData, setGameData] = useState(null);
  const [selectedEmojis, setSelectedEmojis] = useState([]);
  const [solvedGroups, setSolvedGroups] = useState([]);
  const [mistakesCount, setMistakesCount] = useState(0);
  const [isGameOver, setIsGameOver] = useState(false);
  const [isGameWon, setIsGameWon] = useState(false);

  // Initialize game data
  useEffect(() => {
    const data = getGameData();
    setGameData(data);
  }, []);

  // Check if game is won
  useEffect(() => {
    if (solvedGroups.length === 4) {
      setIsGameOver(true);
      setIsGameWon(true);
    }
  }, [solvedGroups]);

  // Handle emoji selection
  const handleEmojiSelect = (emoji) => {
    if (isGameOver) return;

    // If emoji is in a solved group, ignore the click
    for (const group of solvedGroups) {
      if (group.emojis.includes(emoji)) {
        return;
      }
    }

    // Toggle selection
    if (selectedEmojis.includes(emoji)) {
      setSelectedEmojis(selectedEmojis.filter(item => item !== emoji));
    } else {
      // Can select up to 4 emojis
      if (selectedEmojis.length < 4) {
        setSelectedEmojis([...selectedEmojis, emoji]);
      }
    }
  };

  // Submit a selection
  const handleSubmit = () => {
    if (selectedEmojis.length !== 4 || isGameOver) return;

    // Check if selection is a valid group
    const isCorrect = gameData?.groups.some(group => {
      const groupEmojis = group.emojis;
      return selectedEmojis.every(emoji => groupEmojis.includes(emoji)) && 
             groupEmojis.every(emoji => selectedEmojis.includes(emoji));
    });

    if (isCorrect) {
      // Find the matching group
      const matchedGroup = gameData.groups.find(group => {
        const groupEmojis = group.emojis;
        return selectedEmojis.every(emoji => groupEmojis.includes(emoji)) && 
               groupEmojis.every(emoji => selectedEmojis.includes(emoji));
      });
      
      // Add to solved groups
      setSolvedGroups([...solvedGroups, matchedGroup]);
      
      // Clear selection
      setSelectedEmojis([]);
    } else {
      // Incorrect - increment mistake counter
      setMistakesCount(mistakesCount + 1);
      
      // Check for game over (4 mistakes)
      if (mistakesCount + 1 >= 4) {
        setIsGameOver(true);
      }
    }
  };

  // Shuffle all remaining emojis
  const handleShuffle = () => {
    if (isGameOver) return;
    // This will trigger a re-render with the emojis in a new order
    setGameData({...gameData});
  };

  // Reset the game
  const handleReset = () => {
    setSelectedEmojis([]);
    setSolvedGroups([]);
    setMistakesCount(0);
    setIsGameOver(false);
    setIsGameWon(false);
    setGameData(getGameData());
  };

  return (
    <div className="app">
      <Header 
        mistakesCount={mistakesCount} 
        maxMistakes={4}
      />
      {gameData && (
        <GameBoard 
          gameData={gameData}
          selectedEmojis={selectedEmojis}
          solvedGroups={solvedGroups}
          onEmojiSelect={handleEmojiSelect}
          onSubmit={handleSubmit}
          onShuffle={handleShuffle}
          isGameOver={isGameOver}
          isGameWon={isGameWon}
        />
      )}
      <Footer 
        onReset={handleReset}
        isGameOver={isGameOver}
        isGameWon={isGameWon}
      />
    </div>
  );
}

export default App;
