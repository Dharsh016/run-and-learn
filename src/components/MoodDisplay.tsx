import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { moodConfig, MoodType } from '@/types/mood';
import { Card, CardContent } from '@/components/ui/card';
import { Music, Quote, ExternalLink, Play } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface MoodDisplayProps {
  mood: MoodType | null;
  moodText: string;
}

export function MoodDisplay({ mood, moodText }: MoodDisplayProps) {
  const [randomQuote, setRandomQuote] = useState('');
  const [randomMusic, setRandomMusic] = useState<{ title: string; artist: string; url?: string } | null>(null);

  useEffect(() => {
    if (mood) {
      const config = moodConfig[mood];
      const quote = config.quotes[Math.floor(Math.random() * config.quotes.length)];
      const music = config.musicSuggestions[Math.floor(Math.random() * config.musicSuggestions.length)];
      setRandomQuote(quote);
      setRandomMusic(music);
    }
  }, [mood]);

  if (!mood) return null;

  const config = moodConfig[mood];

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={mood}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -20 }}
        transition={{ duration: 0.5 }}
        className="space-y-6 max-w-2xl mx-auto"
      >
        <Card className="glass-card overflow-hidden">
          <div 
            className="h-2 w-full" 
            style={{ background: `var(--${config.gradient})` }}
          />
          <CardContent className="p-6">
            <div className="flex items-center gap-4 mb-4">
              <span className="text-5xl floating">{config.emoji}</span>
              <div>
                <h3 className="text-2xl font-bold capitalize">{mood} Vibes</h3>
                {moodText && (
                  <p className="text-muted-foreground mt-1">{moodText}</p>
                )}
              </div>
            </div>
          </CardContent>
        </Card>

        <div className="grid md:grid-cols-2 gap-4">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
          >
            <Card className="glass-card h-full">
              <CardContent className="p-6">
                <div className="flex items-center gap-2 mb-3">
                  <Quote className="w-5 h-5 text-primary" />
                  <h4 className="font-semibold">Today's Wisdom</h4>
                </div>
                <p className="text-sm italic text-muted-foreground">
                  "{randomQuote}"
                </p>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
          >
            <Card className="glass-card h-full">
              <CardContent className="p-6">
                <div className="flex items-center gap-2 mb-3">
                  <Music className="w-5 h-5 text-secondary" />
                  <h4 className="font-semibold">Music Suggestion</h4>
                </div>
                {randomMusic && (
                  <div className="space-y-3">
                    <div>
                      <p className="font-medium">{randomMusic.title}</p>
                      <p className="text-sm text-muted-foreground">by {randomMusic.artist}</p>
                    </div>
                    {randomMusic.url && (
                      <Button
                        variant="outline"
                        size="sm"
                        className="w-full"
                        onClick={() => window.open(randomMusic.url, '_blank')}
                      >
                        <Play className="w-4 h-4 mr-2" />
                        Play on YouTube
                        <ExternalLink className="w-3 h-3 ml-2" />
                      </Button>
                    )}
                  </div>
                )}
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
}