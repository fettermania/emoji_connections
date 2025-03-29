#!/bin/bash

# Change to the emoji_connections directory
cd /Users/fettermania/Desktop/claude/emoji_connections

# Initialize git repository if it doesn't exist
if [ ! -d .git ]; then
  git init
  echo "Git repository initialized"
  
  # Add remote repository
  git remote add origin git@github.com:/fettermania/emoji_connections.git
  echo "Remote added"
  
  # Fetch from remote
  git fetch origin
  echo "Fetched from remote repository"
  
  # Check out main branch from remote
  git checkout -b main origin/main
  echo "Checked out main branch from remote"
else
  echo "Git repository already exists"
  
  # Make sure the remote is set correctly
  git remote set-url origin git@github.com:/fettermania/emoji_connections.git
  echo "Remote URL updated"
  
  # Fetch latest changes
  git fetch origin
  echo "Fetched latest changes from remote"
  
  # Make sure we're on the main branch
  git checkout main
  echo "Switched to main branch"
  
  # Pull latest changes
  git pull origin main
  echo "Pulled latest changes from main branch"
fi

# Create a new branch for our fix
git checkout -b fix-shuffle-button
echo "Created and switched to new branch: fix-shuffle-button"

# Add all files
git add .
echo "Files staged for commit"

# Create commit
git commit -m "Fix Shuffle button functionality"
echo "Changes committed locally"

echo "To push these changes to GitHub, run:"
echo "git push -u origin fix-shuffle-button"
echo "Then create a pull request on GitHub"
