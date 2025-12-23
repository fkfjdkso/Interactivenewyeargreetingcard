import { motion } from 'motion/react';

export function DecorativeElements() {
  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      {/* Corner ornaments - hidden on mobile for better UX */}
      <motion.div
        className="absolute top-4 left-4 md:top-8 md:left-8 text-4xl md:text-6xl opacity-30 md:opacity-40"
        animate={{
          rotate: [0, 10, -10, 0],
          scale: [1, 1.1, 1],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      >
        🎄
      </motion.div>

      <motion.div
        className="absolute top-4 right-4 md:top-8 md:right-8 text-4xl md:text-6xl opacity-30 md:opacity-40"
        animate={{
          rotate: [0, -10, 10, 0],
          scale: [1, 1.1, 1],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: 'easeInOut',
          delay: 0.5,
        }}
      >
        🎁
      </motion.div>

      <motion.div
        className="absolute bottom-4 left-4 md:bottom-8 md:left-8 text-4xl md:text-6xl opacity-30 md:opacity-40"
        animate={{
          y: [0, -10, 0],
          scale: [1, 1.1, 1],
        }}
        transition={{
          duration: 2.5,
          repeat: Infinity,
          ease: 'easeInOut',
          delay: 1,
        }}
      >
        ⛄
      </motion.div>

      <motion.div
        className="absolute bottom-4 right-4 md:bottom-8 md:right-8 text-4xl md:text-6xl opacity-30 md:opacity-40"
        animate={{
          y: [0, -10, 0],
          scale: [1, 1.1, 1],
        }}
        transition={{
          duration: 2.5,
          repeat: Infinity,
          ease: 'easeInOut',
          delay: 0.3,
        }}
      >
        🔔
      </motion.div>

      {/* Glowing lights effect */}
      <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-yellow-500/10 via-transparent to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-blue-800/20 via-transparent to-transparent" />
    </div>
  );
}