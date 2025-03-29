# Emoji Connections

A word association game similar to the New York Times Connections, but using emojis as clues.

## Overview

Emoji Connections is a web-based game where players need to group emojis into four categories of four items each. Each category has a common theme or connection.

## How to Play

1. You'll see 16 emojis on the game board
2. Select emojis that you think belong to the same category
3. When you've selected 4 emojis, click "Submit" to check your answer
4. If correct, those emojis will be grouped together
5. If incorrect, you'll get a mistake (you can make up to 4 mistakes)
6. The goal is to find all four groups before making too many mistakes
7. Use the "Shuffle" button to rearrange emojis if you're stuck

## Features

- Web-based interface built with React
- Static assets for easy deployment to cloud storage like AWS S3 or Google Cloud Storage
- Mobile-responsive design
- Multiple puzzle levels
- Randomized emoji placement with shuffle functionality

## Development

This project is built using:
- React for the UI framework
- JavaScript for game logic
- CSS for styling

### Setup

1. Clone the repository:
   ```
   git clone https://github.com/fettermania/emoji_connections.git
   cd emoji_connections
   ```

2. Install dependencies:
   ```
   npm install
   ```

3. Run the development server:
   ```
   npm start
   ```

## Deployment

The game can be deployed on any static web hosting service, including:
- AWS S3
- Google Cloud Storage
- GitHub Pages
- Netlify
- Vercel

To build for production:
```
npm run build
```

Then upload the contents of the `build` folder to your preferred hosting service.

## Recent Fixes

### Shuffle Button Fix

We've improved the Shuffle button functionality to properly randomize the position of emojis on the game board:

- Added a dedicated `shuffleEmojis` function in gameData.js
- Implemented state management for available emojis in App.js
- Updated the GameBoard component to correctly display shuffled emojis

## Future Enhancements

- Backend database integration for user progress tracking
- Daily puzzles
- User-generated puzzles
- Difficulty levels
