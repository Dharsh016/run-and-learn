export type MoodType = 'happy' | 'calm' | 'energetic' | 'sad' | 'anxious' | 'creative' | 'peaceful' | 'excited';

export interface MoodEntry {
  id: string;
  mood: MoodType;
  text: string;
  emoji: string;
  timestamp: Date;
}

export interface MoodData {
  type: MoodType;
  emoji: string;
  color: string;
  gradient: string;
  quotes: string[];
  musicSuggestions: {
    title: string;
    artist: string;
    url?: string;
  }[];
}

export const moodConfig: Record<MoodType, MoodData> = {
  happy: {
    type: 'happy',
    emoji: '😊',
    color: 'mood-happy',
    gradient: 'gradient-happy',
    quotes: [
      "Happiness is not something ready made. It comes from your own actions.",
      "The purpose of our lives is to be happy.",
      "Happiness is a choice, not a result.",
      "Think of all the beauty still left around you and be happy.",
      "The happiest people don't have the best of everything, they make the best of everything."
    ],
    musicSuggestions: [
      { title: "Good Vibrations", artist: "The Beach Boys" },
      { title: "Happy", artist: "Pharrell Williams" },
      { title: "Walking on Sunshine", artist: "Katrina and the Waves" }
    ]
  },
  calm: {
    type: 'calm',
    emoji: '😌',
    color: 'mood-calm',
    gradient: 'gradient-calm',
    quotes: [
      "The mind is like water. When it's agitated, it becomes difficult to see. When it's calm, everything becomes clear.",
      "Within you, there is a stillness and a sanctuary to which you can retreat at any time.",
      "Calm mind brings inner strength and self-confidence.",
      "In the midst of movement and chaos, keep stillness inside of you.",
      "The more tranquil a man becomes, the greater is his success."
    ],
    musicSuggestions: [
      { title: "Weightless", artist: "Marconi Union" },
      { title: "River Flows in You", artist: "Yiruma" },
      { title: "Clair de Lune", artist: "Claude Debussy" }
    ]
  },
  energetic: {
    type: 'energetic',
    emoji: '⚡',
    color: 'mood-energetic',
    gradient: 'gradient-energetic',
    quotes: [
      "Energy and persistence conquer all things.",
      "The energy of the mind is the essence of life.",
      "Passion is energy. Feel the power that comes from focusing on what excites you.",
      "The more you lose yourself in something bigger than yourself, the more energy you will have.",
      "Energy is contagious. Either you affect people or you infect people."
    ],
    musicSuggestions: [
      { title: "Eye of the Tiger", artist: "Survivor" },
      { title: "Can't Stop", artist: "Red Hot Chili Peppers" },
      { title: "Thunder", artist: "Imagine Dragons" }
    ]
  },
  sad: {
    type: 'sad',
    emoji: '😔',
    color: 'mood-sad',
    gradient: 'gradient-sad',
    quotes: [
      "Tears are words that need to be written.",
      "The word 'happy' would lose its meaning if it were not balanced by sadness.",
      "Every human walks around with a certain kind of sadness.",
      "Sadness flies away on the wings of time.",
      "Even a happy life cannot be without a measure of darkness."
    ],
    musicSuggestions: [
      { title: "Mad World", artist: "Gary Jules" },
      { title: "The Sound of Silence", artist: "Simon & Garfunkel" },
      { title: "Hurt", artist: "Johnny Cash" }
    ]
  },
  anxious: {
    type: 'anxious',
    emoji: '😰',
    color: 'mood-anxious',
    gradient: 'gradient-anxious',
    quotes: [
      "Anxiety is the dizziness of freedom.",
      "You don't have to control your thoughts. You just have to stop letting them control you.",
      "Nothing diminishes anxiety faster than action.",
      "Anxiety does not empty tomorrow of its sorrows, but only empties today of its strength.",
      "The greatest weapon against stress is our ability to choose one thought over another."
    ],
    musicSuggestions: [
      { title: "Breathe Me", artist: "Sia" },
      { title: "Anxiety", artist: "Julia Michaels" },
      { title: "Be Still", artist: "The Killers" }
    ]
  },
  creative: {
    type: 'creative',
    emoji: '🎨',
    color: 'mood-creative',
    gradient: 'gradient-creative',
    quotes: [
      "Creativity is intelligence having fun.",
      "The creative adult is the child who survived.",
      "You can't use up creativity. The more you use, the more you have.",
      "Creativity takes courage.",
      "The worst enemy to creativity is self-doubt."
    ],
    musicSuggestions: [
      { title: "Bohemian Rhapsody", artist: "Queen" },
      { title: "Across the Universe", artist: "The Beatles" },
      { title: "Pure Imagination", artist: "Gene Wilder" }
    ]
  },
  peaceful: {
    type: 'peaceful',
    emoji: '🕊️',
    color: 'mood-peaceful',
    gradient: 'gradient-peaceful',
    quotes: [
      "Peace is not absence of conflict, it is the ability to handle conflict by peaceful means.",
      "Peace begins with a smile.",
      "Nobody can bring you peace but yourself.",
      "Peace is the result of retraining your mind to process life as it is, rather than as you think it should be.",
      "When the power of love overcomes the love of power, the world will know peace."
    ],
    musicSuggestions: [
      { title: "Imagine", artist: "John Lennon" },
      { title: "Three Little Birds", artist: "Bob Marley" },
      { title: "What a Wonderful World", artist: "Louis Armstrong" }
    ]
  },
  excited: {
    type: 'excited',
    emoji: '🎉',
    color: 'mood-excited',
    gradient: 'gradient-excited',
    quotes: [
      "Excitement is the more practical synonym for happiness.",
      "Without leaps of imagination, or dreaming, we lose the excitement of possibilities.",
      "Get excited and enthusiastic about your own dream.",
      "The secret of happiness is not in doing what one likes, but in liking what one does.",
      "Life is either a daring adventure or nothing at all."
    ],
    musicSuggestions: [
      { title: "Can't Hold Us", artist: "Macklemore & Ryan Lewis" },
      { title: "Shut Up and Dance", artist: "Walk the Moon" },
      { title: "I Gotta Feeling", artist: "The Black Eyed Peas" }
    ]
  }
};