# Emoji Connections: Shuffle Button Fix

This document explains the steps to fix the Shuffle button functionality in the Emoji Connections game and submit the changes to the GitHub repository.

## Changes Made

The Shuffle button wasn't properly randomizing the emoji positions. The original implementation tried to trigger a re-render by creating a new reference to the gameData object, but this didn't effectively change the display order.

We've fixed this by:

1. Adding a dedicated `shuffleEmojis` function in gameData.js
2. Managing available emojis as a separate state in App.js
3. Updating the `handleShuffle` function to properly shuffle only available emojis
4. Modifying the GameBoard component to receive and render availableEmojis from props

## Files Changed

1. `src/data/gameData.js` - Added shuffleEmojis export function
2. `src/App.js` - Added availableEmojis state and updated handleShuffle
3. `src/components/GameBoard.js` - Updated to use availableEmojis from props
4. `README.md` - Updated to mention the shuffle fix

## How to Apply the Changes

### Option 1: Execute the git-setup.sh script

1. Make the script executable:
   ```
   chmod +x git-setup.sh
   ```

2. Run the script:
   ```
   ./git-setup.sh
   ```

3. Push the changes to GitHub:
   ```
   git push -u origin fix-shuffle-button
   ```

4. Go to the GitHub repository and create a pull request from the fix-shuffle-button branch to main.

### Option 2: Manual Steps

1. Initialize git and set the remote (if not already done):
   ```
   git init
   git remote add origin https://github.com/fettermania/emoji_connections.git
   ```

2. Pull the latest changes from the main branch:
   ```
   git fetch origin
   git checkout -b main origin/main
   ```

3. Create a new branch for the fix:
   ```
   git checkout -b fix-shuffle-button
   ```

4. Add and commit your changes:
   ```
   git add .
   git commit -m "Fix Shuffle button functionality"
   ```

5. Push to GitHub and create a pull request:
   ```
   git push -u origin fix-shuffle-button
   ```

## Verification

After applying the changes, you can start the development server to verify the fix:

```
npm install  # Install dependencies if not done already
npm start    # Start the development server
```

The Shuffle button should now properly randomize the emojis on the game board. You can test this by:

1. Clicking the Shuffle button to see the emojis change position
2. Successfully matching a group
3. Clicking Shuffle again to verify it still works with the remaining emojis

If everything works as expected, the fix is successful!
