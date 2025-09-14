import { useState, useEffect } from 'react';
import { MoodEntry, MoodType } from '@/types/mood';

const STORAGE_KEY = 'moodvibe-journal-entries';

export function useMoodStorage() {
  const [entries, setEntries] = useState<MoodEntry[]>([]);

  useEffect(() => {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored) {
      try {
        const parsed = JSON.parse(stored);
        setEntries(parsed);
      } catch (error) {
        console.error('Failed to parse stored mood entries:', error);
      }
    }
  }, []);

  const addEntry = (mood: MoodType, text: string) => {
    const newEntry: MoodEntry = {
      id: Date.now().toString(),
      mood,
      text,
      emoji: '',
      timestamp: new Date(),
    };

    const updatedEntries = [newEntry, ...entries];
    setEntries(updatedEntries);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(updatedEntries));
    return newEntry;
  };

  const deleteEntry = (id: string) => {
    const updatedEntries = entries.filter(entry => entry.id !== id);
    setEntries(updatedEntries);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(updatedEntries));
  };

  const clearAll = () => {
    setEntries([]);
    localStorage.removeItem(STORAGE_KEY);
  };

  return {
    entries,
    addEntry,
    deleteEntry,
    clearAll,
  };
}