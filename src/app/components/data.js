// // const obj = [
// //   {
// //     title: 'The world war',
// //     description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Provident officia inventore dicta non error ipsa libero repudiandae optio! Magnam distinctio tempore, enim harum reiciendis suscipit"
// //   },
// //   {
// //     title: 'Now your turn',
// //     description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ad autem provident esse, est debitis dolore, nemo, rerum inventore iure ex quibusdam beatae commodi repellendus velit minus doloribus aliquam ratione et"
// //   },
// //   {
// //     title: 'I will keep it always',
// //     description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque accusantium consequatur nesciunt quam eum recusandae"
// //   },
// //   {
// //     title: 'You forgot this',
// //     description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam libero vero iusto, fuga doloremque consequatur odio minima quidem alias expedita, ipsa culpa nisi obcaecati ad perspiciatis consectetur voluptatem? Deserunt dolores asperiores aperiam maxime blanditiis tempora non, voluptatem commodi nisi ut"
// //   },
// //   {
// //     title: 'The past news',
// //     description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Impedit quam iusto atque aspernatur dolorum laboriosam quia, in earum ea quibusdam debitis porro consequatur commodi inventore voluptate quis rem accusantium odit neque? Blanditiis, laboriosam. Accusantium maxime nesciunt atque inventore, sapiente quis, consectetur quibusdam placeat veniam ipsam eius dignissimos natus reiciendis libero"
// //   },
// //   {
// //     title: 'Time gone',
// //     description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores magni eaque quibusdam expedita eum excepturi, cum, deleniti neque delectus, repellendus molestiae temporibus reprehenderit"
// //   }
// // ]

// const quiz = [
//   {
//     "category": "Entertainment: Video Games",
//     "correct_answer": "The Pentagon Thief",
//     "difficulty": "easy",
//     "incorrect_answers": ["Hellhounds", "Jumping Jacks", "Napalm Zombie"],
//     "question": "What is the boss round featured in the \"Call Of Duty: Zombies\" map \"Five\"?",
//     "type": "multiple"
//   },
//   {
//     "type": "multiple",
//     "difficulty": "medium",
//     "category": "Entertainment: Television",
//     "question": "Who was the star of the TV series \"24\"?",
//     "correct_answer": "Kiefer Sutherland",
//     "incorrect_answers": ["Hugh Laurie", "David Duchovny", "Michael C. Hall"]
//   },
//   {
//     "type": "multiple",
//     "difficulty": "hard",
//     "category": "General Knowledge",
//     "question": "Chartreuse is a color between yellow and what?",
//     "correct_answer": "Green",
//     "incorrect_answers": ["Blue", "Red", "Orange"]
//   },
//   {
//     "type": "boolean",
//     "difficulty": "easy",
//     "category": "Animals",
//     "question": "A caterpillar has more muscles than humans do.",
//     "correct_answer": "True",
//     "incorrect_answers": ["False", "Depends on species", "Not proven"]
//   },
//   {
//     "type": "multiple",
//     "difficulty": "medium",
//     "category": "Geography",
//     "question": "In which English county is Stonehenge?",
//     "correct_answer": "Wiltshire",
//     "incorrect_answers": ["Somerset", "Dorset", "Hampshire"]
//   },
//   {
//     "type": "multiple",
//     "difficulty": "easy",
//     "category": "Entertainment: Video Games",
//     "question": "In the video game \"Postal 2\", what is the name of Postal Dude's dog?",
//     "correct_answer": "Champ",
//     "incorrect_answers": ["Rex", "Max", "Duke"]
//   },
//   {
//     "type": "multiple",
//     "difficulty": "medium",
//     "category": "Entertainment: Video Games",
//     "question": "When was the game \"Roblox\" released?",
//     "correct_answer": "2006",
//     "incorrect_answers": ["2004", "2008", "2010"]
//   },
//   {
//     "type": "multiple",
//     "difficulty": "medium",
//     "category": "Animals",
//     "question": "What is the scientific name for the \"Polar Bear\"?",
//     "correct_answer": "Ursus Maritimus",
//     "incorrect_answers": ["Ursus Arctos", "Panthera Leo", "Canis Lupus"]
//   },
//   {
//     "type": "multiple",
//     "difficulty": "easy",
//     "category": "Entertainment: Video Games",
//     "question": "Which one of these characters is NOT a playable fighter in Super Smash Bros. Ultimate?",
//     "correct_answer": "Kumatora",
//     "incorrect_answers": ["Banjo", "Lucas", "Ryu"]
//   },
//   {
//     "type": "multiple",
//     "difficulty": "easy",
//     "category": "Entertainment: Japanese Anime & Manga",
//     "question": "In the 9th Pokemon movie, who is the Prince of the Sea?",
//     "correct_answer": "Manaphy",
//     "incorrect_answers": ["Kyogre", "Lugia", "Suicune"]
//   }
// ]

// export default quiz;
const quiz = [
  // Games
  {
    category: "Games",
    question: "What is the boss round featured in the 'Call Of Duty: Zombies' map 'Five'?",
    correct_answer: "The Pentagon Thief",
    incorrect_answers: ["Hellhounds", "Jumping Jacks", "Napalm Zombie"],
    difficulty: "easy"
  },
  {
    category: "Games",
    question: "In the game 'The Legend of Zelda', what is the name of the main character?",
    correct_answer: "Link",
    incorrect_answers: ["Zelda", "Ganon", "Epona"],
    difficulty: "easy"
  },
  {
    category: "Games",
    question: "Which year was 'Minecraft' officially released?",
    correct_answer: "2011",
    incorrect_answers: ["2009", "2013", "2015"],
    difficulty: "medium"
  },
  {
    category: "Games",
    question: "What is the highest-selling video game of all time?",
    correct_answer: "Minecraft",
    incorrect_answers: ["GTA V", "Tetris", "Super Mario Bros"],
    difficulty: "medium"
  },
  {
    category: "Games",
    question: "In 'Fortnite', what is the name of the in-game currency?",
    correct_answer: "V-Bucks",
    incorrect_answers: ["Robux", "Minecoins", "Gold"],
    difficulty: "easy"
  },

  // Sports
  {
    category: "Sports",
    question: "Which country won the FIFA World Cup in 2018?",
    correct_answer: "France",
    incorrect_answers: ["Germany", "Brazil", "Argentina"],
    difficulty: "easy"
  },
  {
    category: "Sports",
    question: "How many players are there in a standard soccer team?",
    correct_answer: "11",
    incorrect_answers: ["9", "10", "12"],
    difficulty: "easy"
  },
  {
    category: "Sports",
    question: "Which NBA player is known as 'The King'?",
    correct_answer: "LeBron James",
    incorrect_answers: ["Michael Jordan", "Kobe Bryant", "Kevin Durant"],
    difficulty: "medium"
  },
  {
    category: "Sports",
    question: "In tennis, what is a score of 40-40 called?",
    correct_answer: "Deuce",
    incorrect_answers: ["Advantage", "Match Point", "Break"],
    difficulty: "medium"
  },
  {
    category: "Sports",
    question: "Which sport uses a shuttlecock?",
    correct_answer: "Badminton",
    incorrect_answers: ["Squash", "Tennis", "Table Tennis"],
    difficulty: "easy"
  },

  // General Knowledge
  {
    category: "General Knowledge",
    question: "What is the capital of Japan?",
    correct_answer: "Tokyo",
    incorrect_answers: ["Beijing", "Seoul", "Bangkok"],
    difficulty: "easy"
  },
  {
    category: "General Knowledge",
    question: "Which planet is known as the Red Planet?",
    correct_answer: "Mars",
    incorrect_answers: ["Venus", "Jupiter", "Saturn"],
    difficulty: "easy"
  },
  {
    category: "General Knowledge",
    question: "What is the largest ocean on Earth?",
    correct_answer: "Pacific Ocean",
    incorrect_answers: ["Atlantic Ocean", "Indian Ocean", "Arctic Ocean"],
    difficulty: "medium"
  },
  {
    category: "General Knowledge",
    question: "Who wrote the play 'Romeo and Juliet'?",
    correct_answer: "William Shakespeare",
    incorrect_answers: ["Charles Dickens", "Leo Tolstoy", "Mark Twain"],
    difficulty: "easy"
  },
  {
    category: "General Knowledge",
    question: "Which country is known as the Land of the Rising Sun?",
    correct_answer: "Japan",
    incorrect_answers: ["China", "South Korea", "Thailand"],
    difficulty: "easy"
  },

  // Math
  {
    category: "Math",
    question: "What is 7 × 8?",
    correct_answer: "56",
    incorrect_answers: ["48", "64", "49"],
    difficulty: "easy"
  },
  {
    category: "Math",
    question: "What is the square root of 144?",
    correct_answer: "12",
    incorrect_answers: ["10", "14", "16"],
    difficulty: "easy"
  },
  {
    category: "Math",
    question: "What is 15% of 200?",
    correct_answer: "30",
    incorrect_answers: ["20", "25", "35"],
    difficulty: "medium"
  },
  {
    category: "Math",
    question: "If a triangle has angles of 45° and 45°, what is the third angle?",
    correct_answer: "90°",
    incorrect_answers: ["60°", "75°", "80°"],
    difficulty: "medium"
  },
  {
    category: "Math",
    question: "What is the value of π (pi) to two decimal places?",
    correct_answer: "3.14",
    incorrect_answers: ["3.12", "3.16", "3.18"],
    difficulty: "easy"
  }
];

export default quiz;
