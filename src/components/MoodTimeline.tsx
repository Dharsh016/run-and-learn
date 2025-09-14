import { MoodEntry } from '@/types/mood';
import { moodConfig } from '@/types/mood';
import { motion } from 'framer-motion';
import { format } from 'date-fns';
import { Card, CardContent } from '@/components/ui/card';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Button } from '@/components/ui/button';
import { Trash2 } from 'lucide-react';

interface MoodTimelineProps {
  entries: MoodEntry[];
  onDeleteEntry: (id: string) => void;
}

export function MoodTimeline({ entries, onDeleteEntry }: MoodTimelineProps) {
  if (entries.length === 0) {
    return (
      <Card className="glass-card max-w-2xl mx-auto">
        <CardContent className="p-8 text-center">
          <p className="text-muted-foreground">No mood entries yet. Start recording your vibes!</p>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card className="glass-card max-w-2xl mx-auto">
      <CardContent className="p-6">
        <h3 className="text-xl font-bold mb-4">Your Mood Journey</h3>
        <ScrollArea className="h-[400px] pr-4">
          <div className="space-y-4">
            {entries.map((entry, index) => {
              const config = moodConfig[entry.mood];
              return (
                <motion.div
                  key={entry.id}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="relative flex items-start gap-4 group"
                >
                  <div className="flex-shrink-0">
                    <div
                      className="w-12 h-12 rounded-full flex items-center justify-center text-xl"
                      style={{ background: `var(--${config.gradient})` }}
                    >
                      {config.emoji}
                    </div>
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <p className="font-semibold capitalize">{entry.mood}</p>
                        {entry.text && (
                          <p className="text-sm text-muted-foreground mt-1">{entry.text}</p>
                        )}
                        <p className="text-xs text-muted-foreground mt-2">
                          {format(new Date(entry.timestamp), 'PPp')}
                        </p>
                      </div>
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={() => onDeleteEntry(entry.id)}
                        className="opacity-0 group-hover:opacity-100 transition-opacity"
                      >
                        <Trash2 className="w-4 h-4" />
                      </Button>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </ScrollArea>
      </CardContent>
    </Card>
  );
}