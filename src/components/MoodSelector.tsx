import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { moodConfig, MoodType } from '@/types/mood';
import { motion } from 'framer-motion';

interface MoodSelectorProps {
  onMoodSubmit: (mood: MoodType, text: string) => void;
}

export function MoodSelector({ onMoodSubmit }: MoodSelectorProps) {
  const [selectedMood, setSelectedMood] = useState<MoodType | null>(null);
  const [moodText, setMoodText] = useState('');

  const handleSubmit = () => {
    if (selectedMood) {
      onMoodSubmit(selectedMood, moodText);
      setMoodText('');
    }
  };

  return (
    <div className="glass-card p-8 max-w-2xl w-full mx-auto">
      <Label className="text-2xl font-bold mb-6 block text-center">
        How are you feeling today?
      </Label>
      
      <div className="grid grid-cols-4 gap-4 mb-6">
        {Object.entries(moodConfig).map(([key, config]) => (
          <motion.button
            key={key}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setSelectedMood(key as MoodType)}
            className={`
              p-4 rounded-xl transition-all duration-300 border-2
              ${selectedMood === key 
                ? 'border-primary shadow-lg bg-' + config.gradient 
                : 'border-border hover:border-primary/50 hover:shadow-md'
              }
            `}
            style={{
              background: selectedMood === key ? `var(--${config.gradient})` : undefined
            }}
          >
            <span className="text-3xl block mb-1">{config.emoji}</span>
            <span className={`text-xs capitalize ${selectedMood === key ? 'text-white font-semibold' : ''}`}>
              {key}
            </span>
          </motion.button>
        ))}
      </div>

      <div className="space-y-4">
        <div>
          <Label htmlFor="mood-text" className="mb-2 block">
            Tell me more about your vibe (optional)
          </Label>
          <Input
            id="mood-text"
            placeholder="What's on your mind?"
            value={moodText}
            onChange={(e) => setMoodText(e.target.value)}
            className="bg-white/50 backdrop-blur"
            onKeyPress={(e) => e.key === 'Enter' && handleSubmit()}
          />
        </div>

        <Button
          onClick={handleSubmit}
          disabled={!selectedMood}
          className={`w-full text-white font-semibold transition-all duration-500 ${
            selectedMood 
              ? `bg-${moodConfig[selectedMood].gradient} hover:opacity-90` 
              : ''
          }`}
          style={{
            background: selectedMood ? `var(--${moodConfig[selectedMood].gradient})` : undefined
          }}
        >
          Record My Vibe ✨
        </Button>
      </div>
    </div>
  );
}