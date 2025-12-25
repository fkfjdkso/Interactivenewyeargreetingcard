import { motion } from 'motion/react';

interface GreetingCardProps {
  onCelebrate: () => void;
}

export function GreetingCard({ onCelebrate }: GreetingCardProps) {
  return (
    <motion.div
      className="min-h-screen flex items-center justify-center px-4"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <div className="max-w-3xl w-full">
        <motion.div
          className="bg-gradient-to-br from-red-900/40 via-black/40 to-green-900/40 backdrop-blur-md rounded-[40px] p-8 md:p-16 shadow-2xl border-2 border-yellow-400/20 text-center"
          initial={{ scale: 0.8, y: 20 }}
          animate={{ scale: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          {/* Текстовый блок */}
          <motion.div
            className="space-y-8"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            <h2 
              className="text-yellow-400 text-5xl md:text-7xl mb-6"
              style={{ fontFamily: "'Pacifico', cursive" }}
            >
              Соня
            </h2>
            
            <p 
              className="text-white text-xl md:text-2xl leading-relaxed font-light tracking-wide"
              style={{ fontFamily: "'Montserrat', sans-serif" }}
            >
              Я невероятно рад, что мы познакомились и поженились! Я тебя очень сильно люблю!! 
              <br /><br />
              Это наш первый новый год вместе, но я надеюсь, все следующие годы мы также проведем вместе! 
              Спасибо тебе за то, что ты есть, я ценю каждую секунду с тобой.
            </p>

            <p 
              className="text-yellow-300 text-2xl md:text-3xl font-bold pt-4"
              style={{ fontFamily: "'Montserrat', sans-serif" }}
            >
              Поздравляю тебя с новым годом, любимая!
            </p>
          </motion.div>

          {/* Кнопка */}
          <motion.div
            className="mt-12 flex justify-center"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 1.2, type: 'spring' }}
          >
            <motion.button
              className="relative px-10 py-5 bg-gradient-to-r from-yellow-500 to-yellow-600 text-black font-bold rounded-full shadow-[0_0_20px_rgba(234,179,8,0.4)] overflow-hidden group"
              onClick={onCelebrate}
              whileHover={{ scale: 1.05, shadow: "0_0_30px_rgba(234,179,8,0.6)" }}
              whileTap={{ scale: 0.95 }}
              style={{ fontFamily: "'Montserrat', sans-serif" }}
            >
              <span className="relative z-10 flex items-center gap-2">
                Поздравляю! 🎉
              </span>
              
              <motion.div
                className="absolute inset-0 bg-white opacity-0 group-hover:opacity-20 transition-opacity"
              />
            </motion.button>
          </motion.div>
        </motion.div>
      </div>
    </motion.div>
  );
}
