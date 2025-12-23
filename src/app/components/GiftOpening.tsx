import { motion } from 'motion/react';

interface GiftOpeningProps {
  onComplete: () => void;
}

export function GiftOpening({ onComplete }: GiftOpeningProps) {
  return (
    <div className="fixed inset-0 flex items-center justify-center z-50">
      {/* Gift box opening animation */}
      <motion.div
        className="relative"
        initial={{ scale: 1 }}
        animate={{ scale: 1.2 }}
        transition={{ duration: 0.5 }}
      >
        {/* Bow flying away */}
        <motion.div
          className="absolute -top-8 left-1/2 -translate-x-1/2 text-5xl"
          initial={{ y: 0, opacity: 1 }}
          animate={{ y: -200, opacity: 0, rotate: 360 }}
          transition={{ duration: 1 }}
        >
          🎀
        </motion.div>

        {/* Gift box lid */}
        <motion.div
          className="absolute -top-4 left-1/2 -translate-x-1/2 w-[160px] h-[30px] bg-gradient-to-br from-red-600 to-red-700 rounded-t-lg z-10"
          initial={{ y: 0, rotateX: 0 }}
          animate={{ y: -150, rotateX: -45, opacity: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
        />

        {/* Confetti explosion */}
        {[...Array(30)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute top-1/2 left-1/2 w-2 h-2 rounded-full"
            style={{
              backgroundColor: ['#FCD34D', '#F59E0B', '#DC2626', '#10B981', '#3B82F6', '#8B5CF6'][i % 6],
            }}
            initial={{ scale: 0, x: 0, y: 0 }}
            animate={{
              scale: [0, 1, 0],
              x: Math.cos((i / 30) * 2 * Math.PI) * (100 + Math.random() * 200),
              y: Math.sin((i / 30) * 2 * Math.PI) * (100 + Math.random() * 200),
              opacity: [1, 1, 0],
            }}
            transition={{ duration: 1.5, delay: 0.5 }}
          />
        ))}

        {/* Gift box body */}
        <motion.div
          className="w-[160px] h-[130px] bg-gradient-to-br from-red-600 to-red-700 rounded-lg relative overflow-hidden"
          initial={{ scale: 1 }}
          animate={{ scale: [1, 1.1, 0], opacity: [1, 1, 0] }}
          transition={{ duration: 1.5, delay: 0.5 }}
          onAnimationComplete={onComplete}
        >
          <div className="absolute left-1/2 -translate-x-1/2 w-[24px] h-full bg-yellow-400"></div>
          <div className="absolute top-1/2 -translate-y-1/2 w-full h-[24px] bg-yellow-400"></div>
        </motion.div>

        {/* Light burst */}
        <motion.div
          className="absolute inset-0 flex items-center justify-center"
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 3, opacity: [0, 1, 0] }}
          transition={{ duration: 1, delay: 0.8 }}
        >
          <div className="w-40 h-40 bg-gradient-radial from-yellow-300 via-yellow-500/50 to-transparent rounded-full"></div>
        </motion.div>
      </motion.div>
    </div>
  );
}