import { useState } from 'react';
import { AnimatePresence } from 'motion/react';
import { SnowfallBackground } from './components/SnowfallBackground';
import { DecorativeElements } from './components/DecorativeElements';
import { ChristmasLights } from './components/ChristmasLights';
import { ChristmasTree } from './components/ChristmasTree';
import { GiftOpening } from './components/GiftOpening';
import { GreetingCard } from './components/GreetingCard';
import { Fireworks } from './components/Fireworks';

type AppState = 'tree' | 'opening' | 'greeting' | 'fireworks';

export default function App() {
  const [state, setState] = useState<AppState>('tree');
  const [showFireworks, setShowFireworks] = useState(false);

  const handleGiftClick = () => {
    setState('opening');
  };

  const handleOpeningComplete = () => {
    setState('greeting');
  };

  const handleCelebrate = () => {
    setShowFireworks(true);
    
    // Hide fireworks after 6 seconds but keep greeting visible
    setTimeout(() => {
      setShowFireworks(false);
    }, 6000);
  };

  return (
    <div className="relative min-h-screen overflow-hidden bg-gradient-to-b from-blue-950 via-blue-900 to-blue-950">
      {/* Background snow animation - always visible */}
      <SnowfallBackground />
      
      {/* Christmas lights garland */}
      <ChristmasLights />
      
      {/* Decorative corner elements */}
      <DecorativeElements />
      
      {/* Main content */}
      <div className="relative z-10">
        <AnimatePresence mode="wait">
          {state === 'tree' && (
            <ChristmasTree key="tree" onGiftClick={handleGiftClick} />
          )}
          
          {state === 'opening' && (
            <GiftOpening key="opening" onComplete={handleOpeningComplete} />
          )}
          
          {state === 'greeting' && (
            <GreetingCard key="greeting" onCelebrate={handleCelebrate} />
          )}
        </AnimatePresence>
      </div>

      {/* Fireworks overlay */}
      <AnimatePresence>
        {showFireworks && <Fireworks key="fireworks" />}
      </AnimatePresence>
    </div>
  );
}