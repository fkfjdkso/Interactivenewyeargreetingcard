import { motion } from 'motion/react';

interface GreetingCardProps {
  onCelebrate: () => void;
}

export function GreetingCard({ onCelebrate }: GreetingCardProps) {
  return (
    <motion.div
      className="min-h-screen flex items-center justify-center px-4 py-12 md:py-20"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, delay: 0.5 }}
    >
      <div className="max-w-4xl w-full">
        <motion.div
          className="bg-gradient-to-br from-green-900/40 via-red-900/30 to-blue-900/40 backdrop-blur-sm rounded-3xl p-6 md:p-12 shadow-2xl border-2 border-yellow-400/30"
          initial={{ scale: 0.9 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.5, delay: 0.8 }}
        >
          {/* Photo placeholders */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 mb-8 md:mb-12">
            <motion.div
              className="relative"
              initial={{ x: -100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: 1 }}
            >
              <div className="aspect-[3/4] bg-gradient-to-br from-yellow-100/20 to-yellow-300/20 rounded-2xl border-4 border-yellow-400/50 flex flex-col items-center justify-center p-4 relative overflow-hidden">
                <motion.div
                  className="absolute inset-0 border-4 border-yellow-300/30"
                  animate={{
                    opacity: [0.3, 0.6, 0.3],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                  }}
                />
                <div className="text-6xl md:text-7xl mb-4">👨</div>
                <p className="text-yellow-100 text-center text-sm md:text-base">Место для 3D фото мужа</p>
              </div>
            </motion.div>

            <motion.div
              className="relative"
              initial={{ x: 100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: 1.2 }}
            >
              <div className="aspect-[3/4] bg-gradient-to-br from-yellow-100/20 to-yellow-300/20 rounded-2xl border-4 border-yellow-400/50 flex flex-col items-center justify-center p-4 relative overflow-hidden">
                <motion.div
                  className="absolute inset-0 border-4 border-yellow-300/30"
                  animate={{
                    opacity: [0.3, 0.6, 0.3],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    delay: 0.5,
                  }}
                />
                <div className="text-6xl md:text-7xl mb-4">👩</div>
                <p className="text-yellow-100 text-center text-sm md:text-base">Место для 3D фото жены</p>
              </div>
            </motion.div>
          </div>

          {/* Greeting text */}
          <motion.div
            className="mb-8 md:mb-12"
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 1.4 }}
          >
            <div className="bg-cream-50/10 backdrop-blur-sm rounded-2xl p-6 md:p-8 border border-yellow-400/30">
              <p className="text-yellow-50 leading-relaxed text-base md:text-lg text-center md:text-left" style={{ fontFamily: "'Inter', sans-serif" }}>
                <span className="text-yellow-300 text-xl md:text-2xl" style={{ fontFamily: "'Playfair Display', serif" }}>Соня</span>, я невероятно рад что мы познакомились и поженились! Я тебя очень сильно люблю!! Это наш первый новый год вместе, но я надеюсь, все следующие годы мы также проведем вместе! Спасибо тебе за то что ты есть, я ценю каждую секунду с тобой. <span className="text-yellow-300" style={{ fontFamily: "'Playfair Display', serif" }}>Поздравляю тебя с новым годом, любимая!</span>
              </p>
            </div>
          </motion.div>

          {/* Celebrate button */}
          <motion.div
            className="flex justify-center"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.5, delay: 1.8, type: 'spring', stiffness: 200 }}
          >
            <motion.button
              className="relative px-8 md:px-12 py-4 md:py-5 bg-gradient-to-r from-red-600 to-red-700 text-white rounded-full shadow-lg overflow-hidden group border-2 border-yellow-400/30"
              onClick={onCelebrate}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {/* Glow effect on hover */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-yellow-400 to-yellow-500 opacity-0 group-hover:opacity-50"
                animate={{
                  scale: [1, 1.2, 1],
                }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                }}
              />
              
              {/* Shine effect */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full group-hover:translate-x-full"
                transition={{
                  duration: 0.6,
                }}
              />
              
              <span className="relative z-10" style={{ fontFamily: "'Playfair Display', serif" }}>
                Поздравляю! 🎉
              </span>
            </motion.button>
          </motion.div>
        </motion.div>
      </div>
    </motion.div>
  );
}