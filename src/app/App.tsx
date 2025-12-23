import { useState } from 'react';
import { AnimatePresence, motion } from 'motion/react'; // Добавил motion для анимации появления видео
import { SnowfallBackground } from './components/SnowfallBackground';
import { DecorativeElements } from './components/DecorativeElements';
import { ChristmasLights } from './components/ChristmasLights';
import { ChristmasTree } from './components/ChristmasTree';
import { GiftOpening } from './components/GiftOpening';
import { GreetingCard } from './components/GreetingCard';
import { Fireworks } from './components/Fireworks';

// 1. Добавляем 'video' в типы состояний
type AppState = 'tree' | 'video' | 'opening' | 'greeting';

export default function App() {
  const [state, setState] = useState<AppState>('tree');
  const [showFireworks, setShowFireworks] = useState(false);

  // 2. При клике на подарок теперь включаем видео
  const handleGiftClick = () => {
    setState('video');
  };

  // 3. Функция, которая сработает после окончания видео
  const handleVideoComplete = () => {
    setState('opening');
  };

  const handleOpeningComplete = () => {
    setState('greeting');
  };

  const handleCelebrate = () => {
    setShowFireworks(true);
    setTimeout(() => {
      setShowFireworks(false);
    }, 6000);
  };

  return (
    <div className="relative min-h-screen overflow-hidden bg-gradient-to-b from-blue-950 via-blue-900 to-blue-950">
      <SnowfallBackground />
      <ChristmasLights />
      <DecorativeElements />
      
      <div className="relative z-10">
        <AnimatePresence mode="wait">
          {state === 'tree' && (
            <ChristmasTree key="tree" onGiftClick={handleGiftClick} />
          )}

         {/* Состояние с видео YouTube */}
          {state === 'video' && (
            <motion.div 
              key="video-player"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-50 flex items-center justify-center bg-black"
            >
              <iframe
                width="100%"
                height="100%"
                src={`https://www.youtube.com/embed/ANtUdx6QJSU?autoplay=1&controls=0&rel=0&showinfo=0&enablejsapi=1`}
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
                className="pointer-events-none" // Чтобы нельзя было поставить на паузу
              ></iframe>

              {/* Кнопка "Далее", так как отследить конец видео в iframe без библиотек сложно */}
              <button 
                onClick={handleVideoComplete}
                className="absolute bottom-10 right-10 z-[60] bg-white/20 backdrop-blur-md text-white border border-white/30 px-6 py-3 rounded-full hover:bg-white/30 transition-all font-bold"
              >
                Открыть открытку →
              </button>
            </motion.div>
          )}
          
          {state === 'opening' && (
            <GiftOpening key="opening" onComplete={handleOpeningComplete} />
          )}
          
          {state === 'greeting' && (
            <GreetingCard key="greeting" onCelebrate={handleCelebrate} />
          )}
        </AnimatePresence>
      </div>

      <AnimatePresence>
        {showFireworks && <Fireworks key="fireworks" />}
      </AnimatePresence>
    </div>
  );
}
