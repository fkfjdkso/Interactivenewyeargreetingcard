import { motion } from 'motion/react';

export function ChristmasLights() {
  const colors = ['#FCD34D', '#F59E0B', '#DC2626', '#10B981', '#3B82F6', '#EC4899'];
  const numLights = 20;

  return (
    <div className="fixed top-0 left-0 right-0 h-24 pointer-events-none z-5 overflow-hidden">
      {/* String/wire for lights */}
      <svg className="absolute top-4 left-0 w-full h-2" preserveAspectRatio="none">
        <path
          d="M 0,8 Q 50,4 100,8 T 200,8"
          stroke="rgba(255,255,255,0.2)"
          strokeWidth="2"
          fill="none"
          vectorEffect="non-scaling-stroke"
          style={{ transform: 'scaleX(10)' }}
        />
      </svg>

      {/* Lights */}
      <div className="relative w-full">
        {[...Array(numLights)].map((_, i) => {
          const position = (i / numLights) * 100;
          const color = colors[i % colors.length];
          const yOffset = Math.sin((i / numLights) * Math.PI * 4) * 12;

          return (
            <motion.div
              key={i}
              className="absolute"
              style={{
                left: `${position}%`,
                top: `${16 + yOffset}px`,
              }}
              animate={{
                opacity: [0.4, 1, 0.4],
                scale: [0.8, 1, 0.8],
              }}
              transition={{
                duration: 1.5 + Math.random(),
                repeat: Infinity,
                delay: i * 0.1,
                ease: 'easeInOut',
              }}
            >
              {/* Light bulb */}
              <div
                className="w-4 h-6 rounded-full relative"
                style={{
                  backgroundColor: color,
                  boxShadow: `0 0 10px ${color}, 0 0 20px ${color}40`,
                }}
              >
                {/* Cap */}
                <div
                  className="absolute -top-1 left-1/2 -translate-x-1/2 w-3 h-1 bg-gray-700 rounded-t"
                />
              </div>

              {/* Glow effect */}
              <motion.div
                className="absolute inset-0 rounded-full blur-md"
                style={{ backgroundColor: color }}
                animate={{
                  opacity: [0.3, 0.7, 0.3],
                  scale: [1.2, 1.8, 1.2],
                }}
                transition={{
                  duration: 1.5 + Math.random(),
                  repeat: Infinity,
                  delay: i * 0.1,
                  ease: 'easeInOut',
                }}
              />
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}
