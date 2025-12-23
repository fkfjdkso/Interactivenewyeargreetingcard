import { motion } from 'motion/react';

interface ChristmasTreeProps {
  onGiftClick: () => void;
}

export function ChristmasTree({ onGiftClick }: ChristmasTreeProps) {
  return (
    <motion.div
      className="flex flex-col items-center justify-center min-h-screen"
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.8 }}
      transition={{ duration: 0.8 }}
    >
      {/* Tree */}
      <div className="relative mb-8">
        {/* Star on top */}
        <motion.div
          className="absolute -top-8 left-1/2 -translate-x-1/2 text-4xl md:text-6xl z-10"
          animate={{
            rotate: [0, 10, -10, 0],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        >
          ⭐
        </motion.div>
        
        {/* Glowing effect for star */}
        <motion.div
          className="absolute -top-8 left-1/2 -translate-x-1/2 w-20 h-20 bg-yellow-300 rounded-full blur-2xl opacity-60 -z-10"
          animate={{
            scale: [1, 1.4, 1],
            opacity: [0.4, 0.7, 0.4],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
        
        {/* Tree layers */}
        <div className="flex flex-col items-center space-y-[-20px] md:space-y-[-30px]">
          <div className="w-0 h-0 border-l-[40px] md:border-l-[60px] border-r-[40px] md:border-r-[60px] border-b-[60px] md:border-b-[90px] border-l-transparent border-r-transparent border-b-green-700 relative">
            {/* Ornaments */}
            <motion.div 
              className="absolute top-4 left-[-30px] text-xl md:text-2xl"
              animate={{ rotate: [0, 15, -15, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
            >
              🔴
            </motion.div>
            <motion.div 
              className="absolute top-4 right-[-30px] text-xl md:text-2xl"
              animate={{ rotate: [0, -15, 15, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }}
            >
              🔵
            </motion.div>
          </div>
          
          <div className="w-0 h-0 border-l-[60px] md:border-l-[90px] border-r-[60px] md:border-r-[90px] border-b-[80px] md:border-b-[120px] border-l-transparent border-r-transparent border-b-green-700 relative">
            {/* Ornaments */}
            <div className="absolute top-6 left-[-40px] text-xl md:text-2xl">🟡</div>
            <div className="absolute top-6 right-[-40px] text-xl md:text-2xl">🔴</div>
            <motion.div 
              className="absolute top-2 left-1/2 -translate-x-1/2 text-xl"
              animate={{ opacity: [0.5, 1, 0.5] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            >
              ✨
            </motion.div>
          </div>
          
          <div className="w-0 h-0 border-l-[80px] md:border-l-[120px] border-r-[80px] md:border-r-[120px] border-b-[100px] md:border-b-[150px] border-l-transparent border-r-transparent border-b-green-800 relative">
            {/* Ornaments */}
            <div className="absolute top-8 left-[-60px] text-xl md:text-2xl">🔵</div>
            <div className="absolute top-8 right-[-60px] text-xl md:text-2xl">🟡</div>
            <div className="absolute top-16 left-[-40px] text-xl md:text-2xl">🔴</div>
            <div className="absolute top-16 right-[-40px] text-xl md:text-2xl">🔵</div>
          </div>
          
          {/* Trunk */}
          <div className="w-[30px] md:w-[40px] h-[40px] md:h-[60px] bg-amber-800 rounded-sm mt-[-10px]"></div>
        </div>
      </div>

      {/* Gift box */}
      <motion.div
        className="relative cursor-pointer group"
        onClick={onGiftClick}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        animate={{
          y: [0, -10, 0],
          filter: [
            'drop-shadow(0 0 10px rgba(251, 191, 36, 0.5))',
            'drop-shadow(0 0 20px rgba(251, 191, 36, 0.8))',
            'drop-shadow(0 0 10px rgba(251, 191, 36, 0.5))',
          ],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      >
        {/* Gift box */}
        <div className="w-[120px] h-[100px] md:w-[160px] md:h-[130px] bg-gradient-to-br from-red-600 to-red-700 rounded-lg relative overflow-hidden">
          {/* Shine effect */}
          <motion.div
            className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent"
            animate={{
              x: ['-100%', '200%'],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              repeatDelay: 1,
            }}
          />
          
          {/* Ribbon vertical */}
          <div className="absolute left-1/2 -translate-x-1/2 w-[20px] md:w-[24px] h-full bg-yellow-400"></div>
          
          {/* Ribbon horizontal */}
          <div className="absolute top-1/2 -translate-y-1/2 w-full h-[20px] md:h-[24px] bg-yellow-400"></div>
        </div>
        
        {/* Bow */}
        <div className="absolute -top-6 md:-top-8 left-1/2 -translate-x-1/2">
          <div className="text-4xl md:text-5xl">🎀</div>
        </div>
        
        {/* Click hint */}
        <motion.div
          className="absolute -bottom-12 left-1/2 -translate-x-1/2 whitespace-nowrap text-yellow-300 text-sm md:text-base px-4 py-2 bg-green-900/50 rounded-full"
          animate={{
            opacity: [0.6, 1, 0.6],
          }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
          }}
        >
          Нажми на подарок! 🎁
        </motion.div>
      </motion.div>
    </motion.div>
  );
}