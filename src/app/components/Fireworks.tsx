import { motion } from 'motion/react';
import { useEffect, useState } from 'react';

interface Firework {
  id: number;
  x: number;
  y: number;
  color: string;
  delay: number;
}

export function Fireworks() {
  const [fireworks, setFireworks] = useState<Firework[]>([]);

  useEffect(() => {
    const colors = ['#FCD34D', '#F59E0B', '#DC2626', '#10B981', '#3B82F6', '#8B5CF6', '#EC4899'];
    const newFireworks: Firework[] = [];
    
    for (let i = 0; i < 15; i++) {
      newFireworks.push({
        id: i,
        x: 20 + Math.random() * 60,
        y: 20 + Math.random() * 60,
        color: colors[Math.floor(Math.random() * colors.length)],
        delay: i * 0.2,
      });
    }
    
    setFireworks(newFireworks);
  }, []);

  return (
    <div className="fixed inset-0 z-50 pointer-events-none overflow-hidden">
      {fireworks.map((firework) => (
        <div
          key={firework.id}
          className="absolute"
          style={{
            left: `${firework.x}%`,
            top: `${firework.y}%`,
          }}
        >
          {/* Center burst */}
          <motion.div
            className="absolute w-4 h-4 rounded-full"
            style={{ backgroundColor: firework.color }}
            initial={{ scale: 0, opacity: 1 }}
            animate={{ scale: 1, opacity: 0 }}
            transition={{ duration: 0.3, delay: firework.delay }}
          />
          
          {/* Particles radiating outward */}
          {[...Array(24)].map((_, i) => {
            const angle = (i / 24) * 2 * Math.PI;
            const distance = 100 + Math.random() * 100;
            
            return (
              <motion.div
                key={i}
                className="absolute w-2 h-2 rounded-full"
                style={{ backgroundColor: firework.color }}
                initial={{
                  x: 0,
                  y: 0,
                  scale: 1,
                  opacity: 1,
                }}
                animate={{
                  x: Math.cos(angle) * distance,
                  y: Math.sin(angle) * distance,
                  scale: [1, 1.5, 0],
                  opacity: [1, 0.8, 0],
                }}
                transition={{
                  duration: 1.5,
                  delay: firework.delay,
                  ease: 'easeOut',
                }}
              />
            );
          })}
          
          {/* Sparkle trails */}
          {[...Array(12)].map((_, i) => {
            const angle = (i / 12) * 2 * Math.PI;
            const distance = 60 + Math.random() * 80;
            
            return (
              <motion.div
                key={`trail-${i}`}
                className="absolute"
                initial={{
                  x: 0,
                  y: 0,
                }}
                animate={{
                  x: Math.cos(angle) * distance,
                  y: Math.sin(angle) * distance,
                }}
                transition={{
                  duration: 1,
                  delay: firework.delay + 0.2,
                  ease: 'easeOut',
                }}
              >
                <motion.div
                  className="text-2xl"
                  animate={{
                    opacity: [0, 1, 0],
                    scale: [0.5, 1, 0.5],
                  }}
                  transition={{
                    duration: 0.8,
                    delay: firework.delay + 0.2,
                  }}
                >
                  ✨
                </motion.div>
              </motion.div>
            );
          })}
        </div>
      ))}
      
      {/* Flying hearts */}
      {[...Array(10)].map((_, i) => (
        <motion.div
          key={`heart-${i}`}
          className="absolute text-3xl md:text-4xl"
          style={{
            left: `${20 + Math.random() * 60}%`,
            bottom: '-10%',
          }}
          initial={{ y: 0, opacity: 0, rotate: 0 }}
          animate={{
            y: [0, -1200],
            opacity: [0, 1, 1, 0],
            rotate: [0, 360],
            x: [0, (Math.random() - 0.5) * 100],
          }}
          transition={{
            duration: 3 + Math.random() * 2,
            delay: 1 + i * 0.3,
            ease: 'easeOut',
          }}
        >
          ❤️
        </motion.div>
      ))}
      
      {/* Celebration text */}
      <motion.div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
        initial={{ scale: 0, opacity: 0, rotate: -180 }}
        animate={{ scale: [0, 1.2, 1], opacity: [0, 1, 1], rotate: 0 }}
        transition={{ duration: 1, delay: 1 }}
      >
        <div className="text-4xl md:text-6xl lg:text-7xl text-center">
          <motion.div
            className="text-yellow-300 drop-shadow-[0_0_30px_rgba(252,211,77,0.8)]"
            animate={{
              scale: [1, 1.1, 1],
              textShadow: [
                '0 0 20px rgba(252,211,77,0.8)',
                '0 0 40px rgba(252,211,77,1)',
                '0 0 20px rgba(252,211,77,0.8)',
              ],
            }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
          >
            🎊 С Новым Годом! 🎊
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
}