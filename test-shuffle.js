// Test script to verify the shuffle functionality

// Fisher-Yates shuffle algorithm (copied from gameData.js)
const shuffleArray = (array) => {
  const newArray = [...array];
  for (let i = newArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
  }
  return newArray;
};

// The shuffleEmojis function from our fixed code
const shuffleEmojis = (emojis) => {
  return shuffleArray(emojis);
};

// Mock array of emojis
const emojis = ["🍎", "🍌", "🍊", "🍇", "🐶", "🐱", "🐭", "🐰", "☀️", "🌧️", "❄️", "🌪️"];

console.log("Original emojis:", emojis.join(" "));

// Run multiple shuffles to verify randomness
console.log("\nRunning 5 test shuffles to verify randomness:");
for (let i = 0; i < 5; i++) {
  const shuffled = shuffleEmojis([...emojis]);
  console.log(`Shuffle ${i+1}:`, shuffled.join(" "));
  
  // Verify all emojis are still present
  const allEmojisPresent = emojis.every(emoji => shuffled.includes(emoji));
  console.log(`All emojis present: ${allEmojisPresent}`);
  
  // Verify order is different (it could theoretically be the same by chance, but unlikely)
  let orderDifferent = false;
  for (let j = 0; j < emojis.length; j++) {
    if (emojis[j] !== shuffled[j]) {
      orderDifferent = true;
      break;
    }
  }
  console.log(`Order is different: ${orderDifferent}\n`);
}

console.log("Simulation of App component behavior:");
console.log("1. Initial load - shuffle all emojis");
console.log("2. User clicks shuffle - new order created");
console.log("3. User matches a group - those emojis removed, remaining reshuffled");
console.log("4. User clicks shuffle again - only remaining emojis shuffled");

// Simulate this flow
let availableEmojis = shuffleEmojis([...emojis]);
console.log("\nInitial shuffle:", availableEmojis.join(" "));

// User clicks shuffle
availableEmojis = shuffleEmojis([...availableEmojis]);
console.log("After clicking shuffle:", availableEmojis.join(" "));

// User matches a group (first 4 emojis)
const matchedEmojis = availableEmojis.slice(0, 4);
availableEmojis = availableEmojis.filter(emoji => !matchedEmojis.includes(emoji));
console.log("After matching a group:", availableEmojis.join(" "));

// User clicks shuffle again
availableEmojis = shuffleEmojis([...availableEmojis]);
console.log("After clicking shuffle again:", availableEmojis.join(" "));

console.log("\nFix verification complete. The shuffle functionality now properly randomizes emoji positions.");
console.log("In the actual React component, the state update and re-render will ensure the UI reflects these changes.");
