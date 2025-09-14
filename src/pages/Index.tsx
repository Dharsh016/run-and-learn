import { useState } from 'react';
import { MoodSelector } from '@/components/MoodSelector';
import { MoodDisplay } from '@/components/MoodDisplay';
import { MoodTimeline } from '@/components/MoodTimeline';
import { AnimatedBackground } from '@/components/AnimatedBackground';
import { useMoodStorage } from '@/hooks/useMoodStorage';
import { MoodType } from '@/types/mood';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Button } from '@/components/ui/button';
import { Sparkles, History, Trash2 } from 'lucide-react';
import { motion } from 'framer-motion';
import { useToast } from '@/components/ui/use-toast';

const Index = () => {
  const [currentMood, setCurrentMood] = useState<MoodType | null>(null);
  const [currentMoodText, setCurrentMoodText] = useState('');
  const { entries, addEntry, deleteEntry, clearAll } = useMoodStorage();
  const { toast } = useToast();

  const handleMoodSubmit = (mood: MoodType, text: string) => {
    setCurrentMood(mood);
    setCurrentMoodText(text);
    addEntry(mood, text);
    
    toast({
      title: "Vibe Recorded! ✨",
      description: "Your mood has been saved to your journal.",
    });
  };

  const handleClearAll = () => {
    if (window.confirm('Are you sure you want to clear all mood entries?')) {
      clearAll();
      toast({
        title: "Journal Cleared",
        description: "All mood entries have been removed.",
        variant: "destructive",
      });
    }
  };

  return (
    <div className="min-h-screen relative overflow-hidden">
      <AnimatedBackground mood={currentMood} />
      
      <div className="relative z-10 container mx-auto px-4 py-8">
        <motion.header
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-8"
        >
          <h1 className="text-5xl font-bold mb-2 flex items-center justify-center gap-2">
            <Sparkles className="w-10 h-10 text-primary" />
            MoodVibe Journal
          </h1>
          <p className="text-muted-foreground">Track your daily vibes and discover mood-based insights</p>
        </motion.header>

        <Tabs defaultValue="record" className="max-w-4xl mx-auto">
          <TabsList className="grid w-full max-w-md mx-auto grid-cols-2 mb-8">
            <TabsTrigger value="record" className="flex items-center gap-2">
              <Sparkles className="w-4 h-4" />
              Record Vibe
            </TabsTrigger>
            <TabsTrigger value="history" className="flex items-center gap-2">
              <History className="w-4 h-4" />
              My Journey
            </TabsTrigger>
          </TabsList>

          <TabsContent value="record" className="space-y-8">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
            >
              <MoodSelector onMoodSubmit={handleMoodSubmit} />
            </motion.div>
            
            {currentMood && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3 }}
              >
                <MoodDisplay mood={currentMood} moodText={currentMoodText} />
              </motion.div>
            )}
          </TabsContent>

          <TabsContent value="history" className="space-y-4">
            {entries.length > 0 && (
              <div className="flex justify-end max-w-2xl mx-auto">
                <Button
                  variant="outline"
                  size="sm"
                  onClick={handleClearAll}
                  className="flex items-center gap-2"
                >
                  <Trash2 className="w-4 h-4" />
                  Clear All
                </Button>
              </div>
            )}
            <MoodTimeline entries={entries} onDeleteEntry={deleteEntry} />
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default Index;
