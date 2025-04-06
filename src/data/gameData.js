import { generatePuzzle } from '../utils/emojiUtils';

// Game data with emoji groups
const puzzles = [
  {
    id: 1,
    groups: [
      {
        category: "Fruits",
        emojis: ["🍎", "🍌", "🍊", "🍇"]
      },
      {
        category: "Animals",
        emojis: ["🐶", "🐱", "🐭", "🐰"]
      },
      {
        category: "Weather",
        emojis: ["☀️", "🌧️", "❄️", "🌪️"]
      },
      {
        category: "Sports",
        emojis: ["⚽", "🏀", "🎾", "🏈"]
      }
    ]
  },
  {
    id: 2,
    groups: [
      {
        category: "Vehicles",
        emojis: ["🚗", "🚂", "✈️", "🚢"]
      },
      {
        category: "Food",
        emojis: ["🍕", "🍔", "🌮", "🍣"]
      },
      {
        category: "Celestial Bodies",
        emojis: ["🌞", "🌙", "⭐", "🪐"]
      },
      {
        category: "Music",
        emojis: ["🎸", "🎹", "🎺", "🥁"]
      }
    ]
  },
  {
    id: 3,
    groups: [
      {
        category: "Buildings",
        emojis: ["🏠", "🏢", "🏫", "🏰"]
      },
      {
        category: "Drinks",
        emojis: ["☕", "🍵", "🍷", "🍺"]
      },
      {
        category: "Face Expressions",
        emojis: ["😀", "😢", "😡", "😴"]
      },
      {
        category: "Time",
        emojis: ["⏰", "📅", "⌛", "🕰️"]
      }
    ]
  },
  {
    id: 4,
    groups: [
      {
        category: "Plants",
        emojis: ["🌵", "🌴", "🌲", "🌻"]
      },
      {
        category: "Communication",
        emojis: ["📱", "💻", "📞", "📧"]
      },
      {
        category: "Water",
        emojis: ["🌊", "💧", "🚿", "🏊"]
      },
      {
        category: "Seasons",
        emojis: ["🍂", "❄️", "🌱", "🌞"]
      }
    ]
  },
  {
    id: 5,
    groups: [
      {
        category: "Flying Things",
        emojis: ["🦅", "🦋", "✈️", "🚁"]
      },
      {
        category: "Desserts",
        emojis: ["🍦", "🍰", "🍩", "🍪"]
      },
      {
        category: "Light Sources",
        emojis: ["💡", "🔦", "🕯️", "🔥"]
      },
      {
        category: "Clothing",
        emojis: ["👕", "👖", "🧦", "👒"]
      }
    ]
  }
];

// Fisher-Yates shuffle algorithm
const shuffleArray = (array) => {
  const newArray = [...array];
  for (let i = newArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
  }
  return newArray;
};

// Function to generate a dynamic puzzle
const createDynamicPuzzle = () => {
  try {
    // Use our emoji mapping to create a new puzzle
    const dynamicGroups = generatePuzzle();
    return {
      id: Date.now(), // Use timestamp as ID
      groups: dynamicGroups
    };
  } catch (error) {
    console.error("Error generating dynamic puzzle:", error);
    // Fall back to a predefined puzzle
    return puzzles[0];
  }
};

// Function to get a random puzzle and shuffle emojis
export const getGameData = () => {
  let puzzle;
  
  // 30% chance to generate a dynamic puzzle, 70% to use predefined
  if (Math.random() < 0.3) {
    puzzle = createDynamicPuzzle();
  } else {
    // Select random puzzle from predefined ones
    const randomIndex = Math.floor(Math.random() * puzzles.length);
    puzzle = JSON.parse(JSON.stringify(puzzles[randomIndex]));
  }
  
  // Create a flat array of all emojis
  const allEmojis = puzzle.groups.flatMap(group => group.emojis);
  
  // Return puzzle with shuffled emojis
  return {
    id: puzzle.id,
    groups: puzzle.groups,
    emojis: shuffleArray(allEmojis)
  };
};

// Function to shuffle existing emojis
export const shuffleEmojis = (emojis) => {
  return shuffleArray(emojis);
};
