/**
 * Comprehensive emoji mapping with names and keywords
 * This can be used for search functionality, hints, or accessibility features
 */

const emojiMap = [
  // Smileys & Emotion
  {
    emoji: "😀",
    name: "grinning_face",
    keywords: ["smile", "happy", "joy", "grin", "positive", "face"]
  },
  {
    emoji: "😃",
    name: "grinning_face_with_big_eyes",
    keywords: ["smile", "happy", "joy", "laugh", "positive", "face"]
  },
  {
    emoji: "😄",
    name: "grinning_face_with_smiling_eyes",
    keywords: ["smile", "happy", "joy", "laugh", "positive", "face"]
  },
  {
    emoji: "😊",
    name: "smiling_face_with_smiling_eyes",
    keywords: ["smile", "happy", "kind", "blush", "pleased", "face"]
  },
  {
    emoji: "😢",
    name: "crying_face",
    keywords: ["sad", "cry", "tear", "weep", "face"]
  },
  {
    emoji: "😭",
    name: "loudly_crying_face",
    keywords: ["sad", "cry", "sob", "tears", "upset", "face"]
  },
  {
    emoji: "😡",
    name: "pouting_face",
    keywords: ["angry", "mad", "rage", "pout", "face"]
  },
  {
    emoji: "😴",
    name: "sleeping_face",
    keywords: ["sleep", "tired", "zzz", "rest", "face"]
  },
  
  // People & Body
  {
    emoji: "👶",
    name: "baby",
    keywords: ["child", "infant", "young", "person"]
  },
  {
    emoji: "👧",
    name: "girl",
    keywords: ["child", "young", "female", "person"]
  },
  {
    emoji: "👦",
    name: "boy",
    keywords: ["child", "young", "male", "person"]
  },
  {
    emoji: "👩",
    name: "woman",
    keywords: ["female", "adult", "person"]
  },
  {
    emoji: "👨",
    name: "man",
    keywords: ["male", "adult", "person"]
  },
  {
    emoji: "👵",
    name: "old_woman",
    keywords: ["elderly", "senior", "female", "person"]
  },
  {
    emoji: "👴",
    name: "old_man",
    keywords: ["elderly", "senior", "male", "person"]
  },
  {
    emoji: "👮",
    name: "police_officer",
    keywords: ["cop", "officer", "police", "law", "person"]
  },
  {
    emoji: "👷",
    name: "construction_worker",
    keywords: ["constructor", "builder", "hardhat", "person"]
  },
  {
    emoji: "💂",
    name: "guard",
    keywords: ["soldier", "security", "uniform", "person"]
  },
  {
    emoji: "👸",
    name: "princess",
    keywords: ["queen", "royal", "crown", "fairy tale", "person"]
  },
  
  // Animals & Nature
  {
    emoji: "🐶",
    name: "dog_face",
    keywords: ["pet", "canine", "puppy", "dog", "animal"]
  },
  {
    emoji: "🐱",
    name: "cat_face",
    keywords: ["pet", "feline", "kitten", "cat", "animal"]
  },
  {
    emoji: "🐭",
    name: "mouse_face",
    keywords: ["rodent", "mouse", "animal"]
  },
  {
    emoji: "🐹",
    name: "hamster_face",
    keywords: ["pet", "rodent", "hamster", "animal"]
  },
  {
    emoji: "🐰",
    name: "rabbit_face",
    keywords: ["bunny", "pet", "rabbit", "animal"]
  },
  {
    emoji: "🦊",
    name: "fox_face",
    keywords: ["wild", "animal", "fox"]
  },
  {
    emoji: "🐻",
    name: "bear_face",
    keywords: ["wild", "animal", "bear"]
  },
  {
    emoji: "🐼",
    name: "panda_face",
    keywords: ["wild", "animal", "panda", "bear"]
  },
  {
    emoji: "🐨",
    name: "koala_face",
    keywords: ["wild", "animal", "koala", "australia"]
  },
  {
    emoji: "🐯",
    name: "tiger_face",
    keywords: ["wild", "animal", "cat", "tiger"]
  },
  {
    emoji: "🦁",
    name: "lion_face",
    keywords: ["wild", "animal", "cat", "lion"]
  },
  {
    emoji: "🐮",
    name: "cow_face",
    keywords: ["farm", "animal", "cow"]
  },
  {
    emoji: "🐷",
    name: "pig_face",
    keywords: ["farm", "animal", "pig"]
  },
  {
    emoji: "🐸",
    name: "frog_face",
    keywords: ["animal", "amphibian", "frog"]
  },
  {
    emoji: "🐵",
    name: "monkey_face",
    keywords: ["animal", "primate", "monkey"]
  },
  {
    emoji: "🐔",
    name: "chicken",
    keywords: ["bird", "farm", "animal", "poultry"]
  },
  {
    emoji: "🐧",
    name: "penguin",
    keywords: ["bird", "animal", "cold", "winter"]
  },
  {
    emoji: "🐦",
    name: "bird",
    keywords: ["animal", "fly", "tweet"]
  },
  {
    emoji: "🦅",
    name: "eagle",
    keywords: ["bird", "animal", "predator", "fly"]
  },
  {
    emoji: "🦉",
    name: "owl",
    keywords: ["bird", "animal", "wise", "night"]
  },
  {
    emoji: "🦇",
    name: "bat",
    keywords: ["animal", "fly", "night", "vampire"]
  },
  {
    emoji: "🦋",
    name: "butterfly",
    keywords: ["insect", "fly", "beautiful", "animal"]
  },
  
  // Plants & Flowers
  {
    emoji: "🌵",
    name: "cactus",
    keywords: ["plant", "desert", "dry", "prickly"]
  },
  {
    emoji: "🌲",
    name: "evergreen_tree",
    keywords: ["plant", "tree", "pine", "christmas"]
  },
  {
    emoji: "🌳",
    name: "deciduous_tree",
    keywords: ["plant", "tree", "leaf", "fall"]
  },
  {
    emoji: "🌴",
    name: "palm_tree",
    keywords: ["plant", "tree", "tropical", "beach"]
  },
  {
    emoji: "🌱",
    name: "seedling",
    keywords: ["plant", "sprout", "young", "growing"]
  },
  {
    emoji: "🌿",
    name: "herb",
    keywords: ["plant", "leaf", "medicine", "cooking"]
  },
  {
    emoji: "☘️",
    name: "shamrock",
    keywords: ["plant", "nature", "irish", "luck"]
  },
  {
    emoji: "🍀",
    name: "four_leaf_clover",
    keywords: ["plant", "nature", "luck", "irish"]
  },
  {
    emoji: "🌷",
    name: "tulip",
    keywords: ["flower", "plant", "spring", "bloom"]
  },
  {
    emoji: "🌹",
    name: "rose",
    keywords: ["flower", "plant", "love", "romantic", "bloom"]
  },
  {
    emoji: "🌺",
    name: "hibiscus",
    keywords: ["flower", "plant", "tropical", "bloom"]
  },
  {
    emoji: "🌸",
    name: "cherry_blossom",
    keywords: ["flower", "plant", "spring", "bloom", "japanese"]
  },
  {
    emoji: "🌼",
    name: "blossom",
    keywords: ["flower", "plant", "bloom", "yellow"]
  },
  {
    emoji: "🌻",
    name: "sunflower",
    keywords: ["flower", "plant", "sun", "summer", "tall"]
  },
  {
    emoji: "🍁",
    name: "maple_leaf",
    keywords: ["plant", "nature", "fall", "canada", "autumn"]
  },
  {
    emoji: "🍂",
    name: "fallen_leaf",
    keywords: ["plant", "nature", "fall", "autumn"]
  },
  {
    emoji: "🍃",
    name: "leaf_fluttering_in_wind",
    keywords: ["plant", "nature", "wind", "blow"]
  },
  
  // Food & Drink
  {
    emoji: "🍎",
    name: "red_apple",
    keywords: ["fruit", "food", "healthy"]
  },
  {
    emoji: "🍐",
    name: "pear",
    keywords: ["fruit", "food", "healthy"]
  },
  {
    emoji: "🍊",
    name: "orange",
    keywords: ["fruit", "food", "healthy", "citrus"]
  },
  {
    emoji: "🍋",
    name: "lemon",
    keywords: ["fruit", "food", "sour", "citrus"]
  },
  {
    emoji: "🍌",
    name: "banana",
    keywords: ["fruit", "food", "healthy", "potassium"]
  },
  {
    emoji: "🍉",
    name: "watermelon",
    keywords: ["fruit", "food", "summer", "refreshing"]
  },
  {
    emoji: "🍇",
    name: "grapes",
    keywords: ["fruit", "food", "wine", "vineyard"]
  },
  {
    emoji: "🍓",
    name: "strawberry",
    keywords: ["fruit", "food", "berry", "red"]
  },
  {
    emoji: "🥝",
    name: "kiwi_fruit",
    keywords: ["fruit", "food", "green", "fuzzy"]
  },
  {
    emoji: "🍅",
    name: "tomato",
    keywords: ["vegetable", "fruit", "food", "red", "sauce"]
  },
  {
    emoji: "🍆",
    name: "eggplant",
    keywords: ["vegetable", "food", "aubergine", "purple"]
  },
  {
    emoji: "🥦",
    name: "broccoli",
    keywords: ["vegetable", "food", "healthy", "green"]
  },
  {
    emoji: "🌽",
    name: "corn",
    keywords: ["vegetable", "food", "maize", "yellow"]
  },
  {
    emoji: "🥕",
    name: "carrot",
    keywords: ["vegetable", "food", "healthy", "orange"]
  },
  {
    emoji: "🍟",
    name: "french_fries",
    keywords: ["food", "potato", "snack", "fast food"]
  },
  {
    emoji: "🍕",
    name: "pizza",
    keywords: ["food", "italian", "cheese", "slice"]
  },
  {
    emoji: "🌭",
    name: "hot_dog",
    keywords: ["food", "sausage", "frankfurter"]
  },
  {
    emoji: "🍔",
    name: "hamburger",
    keywords: ["food", "burger", "fast food", "beef"]
  },
  {
    emoji: "🌮",
    name: "taco",
    keywords: ["food", "mexican", "tex-mex"]
  },
  {
    emoji: "🍣",
    name: "sushi",
    keywords: ["food", "japanese", "fish", "rice"]
  },
  {
    emoji: "🍦",
    name: "ice_cream",
    keywords: ["food", "dessert", "sweet", "cold"]
  },
  {
    emoji: "🍰",
    name: "shortcake",
    keywords: ["food", "dessert", "sweet", "cake"]
  },
  {
    emoji: "🍩",
    name: "doughnut",
    keywords: ["food", "dessert", "sweet", "breakfast"]
  },
  {
    emoji: "🍪",
    name: "cookie",
    keywords: ["food", "dessert", "sweet", "snack"]
  },
  {
    emoji: "☕",
    name: "hot_beverage",
    keywords: ["drink", "coffee", "tea", "warm"]
  },
  {
    emoji: "🍵",
    name: "teacup_without_handle",
    keywords: ["drink", "tea", "green", "hot"]
  },
  {
    emoji: "🍷",
    name: "wine_glass",
    keywords: ["drink", "alcohol", "beverage", "wine"]
  },
  {
    emoji: "🍺",
    name: "beer_mug",
    keywords: ["drink", "alcohol", "beverage", "beer"]
  },
  
  // Travel & Places
  {
    emoji: "🚗",
    name: "automobile",
    keywords: ["car", "vehicle", "transportation"]
  },
  {
    emoji: "🚕",
    name: "taxi",
    keywords: ["car", "vehicle", "transportation", "cab"]
  },
  {
    emoji: "🚌",
    name: "bus",
    keywords: ["vehicle", "transportation", "public"]
  },
  {
    emoji: "🚓",
    name: "police_car",
    keywords: ["car", "vehicle", "law", "emergency"]
  },
  {
    emoji: "🚑",
    name: "ambulance",
    keywords: ["vehicle", "health", "emergency"]
  },
  {
    emoji: "🚒",
    name: "fire_engine",
    keywords: ["vehicle", "firefighter", "emergency"]
  },
  {
    emoji: "🚚",
    name: "delivery_truck",
    keywords: ["vehicle", "transportation", "shipping"]
  },
  {
    emoji: "🚲",
    name: "bicycle",
    keywords: ["vehicle", "bike", "cycling", "exercise"]
  },
  {
    emoji: "🚂",
    name: "locomotive",
    keywords: ["vehicle", "transportation", "train"]
  },
  {
    emoji: "✈️",
    name: "airplane",
    keywords: ["vehicle", "transportation", "flight", "fly"]
  },
  {
    emoji: "🚀",
    name: "rocket",
    keywords: ["vehicle", "transportation", "space", "launch"]
  },
  {
    emoji: "🚁",
    name: "helicopter",
    keywords: ["vehicle", "transportation", "fly"]
  },
  {
    emoji: "🚢",
    name: "ship",
    keywords: ["vehicle", "transportation", "water", "boat"]
  },
  {
    emoji: "🏠",
    name: "house",
    keywords: ["building", "home", "residence"]
  },
  {
    emoji: "🏢",
    name: "office_building",
    keywords: ["building", "work", "business"]
  },
  {
    emoji: "🏫",
    name: "school",
    keywords: ["building", "education", "learning"]
  },
  {
    emoji: "🏰",
    name: "castle",
    keywords: ["building", "royalty", "fairy tale", "medieval"]
  },
  
  // Weather & Sky
  {
    emoji: "☀️",
    name: "sun",
    keywords: ["weather", "hot", "sunny", "bright", "summer"]
  },
  {
    emoji: "🌤️",
    name: "sun_behind_small_cloud",
    keywords: ["weather", "partly cloudy", "sunny"]
  },
  {
    emoji: "☁️",
    name: "cloud",
    keywords: ["weather", "sky", "overcast"]
  },
  {
    emoji: "🌧️",
    name: "cloud_with_rain",
    keywords: ["weather", "rain", "shower", "rainy"]
  },
  {
    emoji: "⛈️",
    name: "cloud_with_lightning_and_rain",
    keywords: ["weather", "thunder", "storm", "lightning"]
  },
  {
    emoji: "🌨️",
    name: "cloud_with_snow",
    keywords: ["weather", "snow", "winter", "cold"]
  },
  {
    emoji: "❄️",
    name: "snowflake",
    keywords: ["weather", "snow", "winter", "cold", "ice"]
  },
  {
    emoji: "🌪️",
    name: "tornado",
    keywords: ["weather", "destruction", "storm", "disaster"]
  },
  {
    emoji: "🌊",
    name: "water_wave",
    keywords: ["sea", "ocean", "surf", "beach", "tsunami"]
  },
  {
    emoji: "💧",
    name: "droplet",
    keywords: ["water", "drop", "rain", "liquid", "sweat"]
  },
  {
    emoji: "🌞",
    name: "sun_with_face",
    keywords: ["sun", "summer", "hot", "personified", "smiling"]
  },
  {
    emoji: "🌙",
    name: "crescent_moon",
    keywords: ["moon", "night", "sky", "astronomy", "ramadan"]
  },
  {
    emoji: "⭐",
    name: "star",
    keywords: ["sky", "night", "space", "shine"]
  },
  {
    emoji: "🌟",
    name: "glowing_star",
    keywords: ["star", "sky", "shiny", "sparkle"]
  },
  {
    emoji: "🔥",
    name: "fire",
    keywords: ["flame", "hot", "burn", "lit"]
  },
  {
    emoji: "⚡",
    name: "high_voltage",
    keywords: ["thunder", "lightning", "electricity", "zap"]
  },
  {
    emoji: "🌈",
    name: "rainbow",
    keywords: ["weather", "colorful", "sky", "pride"]
  },
  
  // Sports & Activities
  {
    emoji: "⚽",
    name: "soccer_ball",
    keywords: ["sports", "football", "game", "ball"]
  },
  {
    emoji: "🏀",
    name: "basketball",
    keywords: ["sports", "game", "ball", "hoop"]
  },
  {
    emoji: "🏈",
    name: "american_football",
    keywords: ["sports", "game", "ball", "nfl"]
  },
  {
    emoji: "⚾",
    name: "baseball",
    keywords: ["sports", "game", "ball", "mlb"]
  },
  {
    emoji: "🎾",
    name: "tennis",
    keywords: ["sports", "game", "ball", "racket"]
  },
  {
    emoji: "🏐",
    name: "volleyball",
    keywords: ["sports", "game", "ball", "net"]
  },
  {
    emoji: "🏉",
    name: "rugby_football",
    keywords: ["sports", "game", "ball", "rugby"]
  },
  {
    emoji: "🎱",
    name: "pool_8_ball",
    keywords: ["sports", "game", "billiards", "pool"]
  },
  {
    emoji: "🏓",
    name: "ping_pong",
    keywords: ["sports", "game", "table tennis", "paddle"]
  },
  {
    emoji: "🏸",
    name: "badminton",
    keywords: ["sports", "game", "racket", "shuttlecock"]
  },
  {
    emoji: "🥊",
    name: "boxing_glove",
    keywords: ["sports", "fighting", "boxing", "punch"]
  },
  {
    emoji: "⛷️",
    name: "skier",
    keywords: ["sports", "winter", "snow", "person"]
  },
  {
    emoji: "🏂",
    name: "snowboarder",
    keywords: ["sports", "winter", "snow", "person"]
  },
  {
    emoji: "🏄",
    name: "person_surfing",
    keywords: ["sports", "water", "surf", "ocean", "person"]
  },
  {
    emoji: "🏊",
    name: "person_swimming",
    keywords: ["sports", "water", "swim", "pool", "person"]
  },
  
  // Objects & Tools
  {
    emoji: "⌚",
    name: "watch",
    keywords: ["time", "accessory", "wristwatch"]
  },
  {
    emoji: "📱",
    name: "mobile_phone",
    keywords: ["technology", "cellphone", "device", "smartphone"]
  },
  {
    emoji: "💻",
    name: "laptop",
    keywords: ["technology", "computer", "device", "work"]
  },
  {
    emoji: "⌨️",
    name: "keyboard",
    keywords: ["technology", "computer", "device", "type"]
  },
  {
    emoji: "🖥️",
    name: "desktop_computer",
    keywords: ["technology", "computer", "device", "work"]
  },
  {
    emoji: "🖨️",
    name: "printer",
    keywords: ["technology", "computer", "device", "paper"]
  },
  {
    emoji: "📷",
    name: "camera",
    keywords: ["technology", "device", "photo", "picture"]
  },
  {
    emoji: "🎥",
    name: "movie_camera",
    keywords: ["technology", "device", "video", "film"]
  },
  {
    emoji: "📺",
    name: "television",
    keywords: ["technology", "device", "tv", "screen"]
  },
  {
    emoji: "📻",
    name: "radio",
    keywords: ["technology", "device", "music", "news"]
  },
  {
    emoji: "🎧",
    name: "headphone",
    keywords: ["technology", "device", "music", "audio"]
  },
  {
    emoji: "📞",
    name: "telephone_receiver",
    keywords: ["technology", "device", "call", "communication"]
  },
  {
    emoji: "☎️",
    name: "telephone",
    keywords: ["technology", "device", "call", "communication", "landline"]
  },
  {
    emoji: "📟",
    name: "pager",
    keywords: ["technology", "device", "communication", "retro"]
  },
  {
    emoji: "📠",
    name: "fax_machine",
    keywords: ["technology", "device", "communication", "office"]
  },
  {
    emoji: "📧",
    name: "e-mail",
    keywords: ["communication", "mail", "message", "digital"]
  },
  {
    emoji: "🔋",
    name: "battery",
    keywords: ["technology", "power", "energy", "charge"]
  },
  {
    emoji: "🔌",
    name: "electric_plug",
    keywords: ["technology", "power", "energy", "electricity"]
  },
  {
    emoji: "💡",
    name: "light_bulb",
    keywords: ["electricity", "light", "idea", "bright"]
  },
  {
    emoji: "🔦",
    name: "flashlight",
    keywords: ["light", "tool", "dark", "portable"]
  },
  {
    emoji: "🕯️",
    name: "candle",
    keywords: ["light", "fire", "wax", "flame"]
  },
  {
    emoji: "🗑️",
    name: "wastebasket",
    keywords: ["trash", "garbage", "bin", "delete"]
  },
  {
    emoji: "🧰",
    name: "toolbox",
    keywords: ["tools", "repair", "fix", "box"]
  },
  {
    emoji: "🔨",
    name: "hammer",
    keywords: ["tool", "build", "construction", "repair"]
  },
  {
    emoji: "⚒️",
    name: "hammer_and_pick",
    keywords: ["tools", "build", "construction", "mining"]
  },
  {
    emoji: "🔧",
    name: "wrench",
    keywords: ["tool", "repair", "fix", "mechanical"]
  },
  {
    emoji: "🔩",
    name: "nut_and_bolt",
    keywords: ["tool", "hardware", "fix", "mechanical"]
  },
  {
    emoji: "⚙️",
    name: "gear",
    keywords: ["mechanical", "settings", "cog", "machine"]
  },
  {
    emoji: "🧲",
    name: "magnet",
    keywords: ["metal", "attraction", "science", "physics"]
  },
  {
    emoji: "🧪",
    name: "test_tube",
    keywords: ["science", "chemistry", "experiment", "lab"]
  },
  {
    emoji: "⚗️",
    name: "alembic",
    keywords: ["science", "chemistry", "distillation", "lab"]
  },
  {
    emoji: "🧬",
    name: "dna",
    keywords: ["science", "biology", "genes", "helix"]
  },
  {
    emoji: "🔬",
    name: "microscope",
    keywords: ["science", "lab", "research", "biology"]
  },
  {
    emoji: "🔭",
    name: "telescope",
    keywords: ["science", "astronomy", "stars", "space"]
  },
  {
    emoji: "📡",
    name: "satellite_antenna",
    keywords: ["technology", "communication", "transmission", "signal"]
  }
];

/**
 * Get an emoji by its name
 * @param {string} name - The name of the emoji
 * @returns {object|undefined} The emoji object or undefined if not found
 */
const getEmojiByName = (name) => {
  return emojiMap.find(item => item.name === name);
};

/**
 * Get an emoji by its character
 * @param {string} emoji - The emoji character
 * @returns {object|undefined} The emoji object or undefined if not found
 */
const getEmojiByCharacter = (emoji) => {
  return emojiMap.find(item => item.emoji === emoji);
};

/**
 * Search emojis by keyword
 * @param {string} query - The search query
 * @returns {Array} Array of emoji objects matching the query
 */
const searchEmojis = (query) => {
  const lowerQuery = query.toLowerCase();
  return emojiMap.filter(item => {
    return (
      item.name.toLowerCase().includes(lowerQuery) ||
      item.keywords.some(keyword => keyword.toLowerCase().includes(lowerQuery))
    );
  });
};

/**
 * Get emojis by category
 * @param {string} category - The category to filter by
 * @returns {Array} Array of emoji objects in the given category
 */
const getEmojisByKeyword = (keyword) => {
  const lowerKeyword = keyword.toLowerCase();
  return emojiMap.filter(item => 
    item.keywords.some(k => k.toLowerCase() === lowerKeyword)
  );
};

/**
 * Get all emoji characters as an array
 * @returns {Array} Array of emoji characters
 */
const getAllEmojiCharacters = () => {
  return emojiMap.map(item => item.emoji);
};

export {
  emojiMap,
  getEmojiByName,
  getEmojiByCharacter,
  searchEmojis,
  getEmojisByKeyword,
  getAllEmojiCharacters
};
