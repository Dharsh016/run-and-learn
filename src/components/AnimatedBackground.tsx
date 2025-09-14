import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { MoodType, moodConfig } from '@/types/mood';

interface AnimatedBackgroundProps {
  mood: MoodType | null;
}

export function AnimatedBackground({ mood }: AnimatedBackgroundProps) {
  const [particles, setParticles] = useState<Array<{ id: number; size: number; left: number; delay: number }>>([]);

  useEffect(() => {
    const newParticles = Array.from({ length: 20 }, (_, i) => ({
      id: i,
      size: Math.random() * 100 + 50,
      left: Math.random() * 100,
      delay: Math.random() * 15,
    }));
    setParticles(newParticles);
  }, [mood]);

  const gradient = mood ? moodConfig[mood].gradient : 'gradient-calm';

  return (
    <div className="fixed inset-0 -z-10 overflow-hidden">
      <motion.div
        className="absolute inset-0 mood-gradient"
        animate={{
          background: `var(--${gradient})`,
        }}
        transition={{ duration: 1 }}
        style={{
          background: `var(--${gradient})`,
        }}
      />
      
      {particles.map((particle) => (
        <div
          key={particle.id}
          className="particle"
          style={{
            width: `${particle.size}px`,
            height: `${particle.size}px`,
            left: `${particle.left}%`,
            animationDelay: `${particle.delay}s`,
            background: 'radial-gradient(circle, rgba(255,255,255,0.3) 0%, transparent 70%)',
          }}
        />
      ))}

      <div className="absolute inset-0 bg-gradient-to-t from-background/20 to-transparent" />
    </div>
  );
}