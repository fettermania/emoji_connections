import { emojiMap, getEmojiByCharacter, searchEmojis, getEmojisByKeyword } from '../data/emojiMap';

/**
 * Generate a hint for an emoji based on its meaning
 * @param {string} emoji - The emoji character
 * @returns {string} A hint about the emoji
 */
export const generateEmojiHint = (emoji) => {
  const emojiData = getEmojiByCharacter(emoji);
  if (!emojiData) {
    return "No hint available";
  }
  
  // Create a hint from the keywords
  const keywords = emojiData.keywords;
  if (keywords.length === 0) {
    return "No hint available";
  }
  
  // We'll use the first 3 keywords to create a hint
  const selectedKeywords = keywords.slice(0, Math.min(3, keywords.length));
  return `This emoji represents: ${selectedKeywords.join(', ')}`;
};

/**
 * Find the common theme among a set of emojis
 * @param {Array} emojis - Array of emoji characters
 * @returns {Array} Array of possible common themes (keywords)
 */
export const findCommonTheme = (emojis) => {
  if (!emojis || emojis.length === 0) {
    return [];
  }
  
  // Get the emoji data for each emoji
  const emojiDataList = emojis.map(emoji => getEmojiByCharacter(emoji)).filter(Boolean);
  
  if (emojiDataList.length === 0) {
    return [];
  }
  
  // Find keywords that appear in all emojis
  const firstEmojiKeywords = emojiDataList[0].keywords;
  const commonKeywords = firstEmojiKeywords.filter(keyword => 
    emojiDataList.every(emojiData => 
      emojiData.keywords.includes(keyword)
    )
  );
  
  return commonKeywords;
};

/**
 * Get a set of emojis that match a theme
 * @param {string} theme - The theme/keyword to match
 * @param {number} count - Number of emojis to return
 * @returns {Array} Array of emoji characters
 */
export const getEmojisByTheme = (theme, count = 4) => {
  const matchingEmojis = getEmojisByKeyword(theme);
  
  if (matchingEmojis.length < count) {
    return matchingEmojis.map(e => e.emoji);
  }
  
  // Shuffle and select random emojis
  const shuffled = [...matchingEmojis].sort(() => 0.5 - Math.random());
  return shuffled.slice(0, count).map(e => e.emoji);
};

/**
 * Generate a complete puzzle set with 4 groups of 4 emojis
 * @returns {Array} Array of groups, each with category and emojis
 */
export const generatePuzzle = () => {
  // Common themes we know have enough emojis
  const themes = [
    ['animal', 'fruit', 'weather', 'vehicle'],
    ['face', 'plant', 'food', 'building'],
    ['sport', 'animal', 'drink', 'weather'],
    ['tool', 'face', 'vehicle', 'fruit'],
    ['plant', 'building', 'sport', 'food']
  ];
  
  // Select a random theme set
  const selectedThemes = themes[Math.floor(Math.random() * themes.length)];
  
  return selectedThemes.map(theme => ({
    category: theme.charAt(0).toUpperCase() + theme.slice(1) + 's',
    emojis: getEmojisByTheme(theme, 4)
  }));
};

/**
 * Get a readable name for an emoji
 * @param {string} emoji - The emoji character
 * @returns {string} The readable name
 */
export const getEmojiName = (emoji) => {
  const emojiData = getEmojiByCharacter(emoji);
  if (!emojiData) {
    return "Unknown Emoji";
  }
  
  // Convert snake_case to Title Case
  return emojiData.name
    .split('_')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');
};

/**
 * Check if two emoji sets share any emojis
 * @param {Array} set1 - First array of emojis
 * @param {Array} set2 - Second array of emojis
 * @returns {boolean} True if sets have common emojis
 */
export const hasCommonEmojis = (set1, set2) => {
  return set1.some(emoji => set2.includes(emoji));
};

/**
 * Add accessibility labels to emoji elements
 * @param {string} emoji - The emoji character
 * @returns {string} Accessible HTML for the emoji
 */
export const accessibleEmoji = (emoji) => {
  const name = getEmojiName(emoji);
  return `<span role="img" aria-label="${name}">${emoji}</span>`;
};

export default {
  generateEmojiHint,
  findCommonTheme,
  getEmojisByTheme,
  generatePuzzle,
  getEmojiName,
  hasCommonEmojis,
  accessibleEmoji
};
