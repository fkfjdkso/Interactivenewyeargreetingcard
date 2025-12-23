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

          {/* 4. Вставка видео-слоя */}
          {state === 'video' && (
            <motion.div 
              key="video-player"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-50 flex items-center justify-center bg-black"
            >
              <video
                src={`${import.meta.env.BASE_URL}video.mp4`}
                autoPlay
                playsInline
                preload="auto"
                onEnded={handleVideoComplete}
                className="w-full h-full object-contain"
              />
              {/* Кнопка "Пропустить" на случай, если видео не грузится */}
              <button 
                onClick={handleVideoComplete}
                className="absolute bottom-10 right-10 text-white/50 border border-white/20 px-4 py-2 rounded-lg hover:bg-white/10 transition-colors"
              >
                Пропустить
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
