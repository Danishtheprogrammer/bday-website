import { Outlet, useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import { useState, useRef, useContext } from 'react';
import { AppContext } from '../context/AppContext';
import FloatingHearts from './FloatingHearts';
import ProgressDots from './ProgressDots';

import bgMusic from '../assets/lagu.mp3'; 

function getStepOrder(relationship) {
  const common = ['/', '/wish', '/home', '/memories', '/crossroads'];
  if (relationship === 'bestie') return [...common, '/bestie', '/gift', '/date', '/confirm'];
  if (relationship === 'love') return [...common, '/love', '/letter', '/gift', '/date', '/confirm'];
  return [...common, '/gift', '/date', '/confirm'];
}

export default function Layout() {
  const { selections } = useContext(AppContext);
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef(null);
  const location = useLocation();

  const toggleMusic = () => {
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
  };

  const isBestie = selections.relationship === 'bestie';
  const isLove = selections.relationship === 'love';
  const themeClass = isBestie 
    ? "bg-gradient-to-br from-dudu-100 via-dudu-50 to-dudu-200" 
    : isLove
      ? "bg-gradient-to-br from-bubu-100 via-bubu-50 to-bubu-300"
      : "bg-gradient-to-br from-bubu-200 via-lavender to-dudu-200";

  const accentClass = isBestie ? 'bg-dudu-500' : isLove ? 'bg-bubu-500' : 'bg-gray-400';
  const steps = getStepOrder(selections.relationship);
  const currentIndex = steps.indexOf(location.pathname);
  const showDots = currentIndex >= 0 && location.pathname !== '/' && location.pathname !== '/wish';

  return (
    <div className={`min-h-[100dvh] w-full relative overflow-x-hidden flex items-center justify-center p-4 sm:p-6 md:p-8 transition-colors duration-1000 ${themeClass}`}>
      
      <FloatingHearts theme={selections.relationship} />
      
      <audio 
        id="bg-music" 
        ref={audioRef} 
        loop 
        onPlay={() => setIsPlaying(true)} 
        onPause={() => setIsPlaying(false)}
      >
        <source src={bgMusic} type="audio/mpeg" />
      </audio>

      <button 
        onClick={toggleMusic}
        className="fixed top-4 right-4 z-50 w-12 h-12 bg-white/70 backdrop-blur-md border border-rose-200 text-rose-500 rounded-full shadow-lg flex items-center justify-center text-xl hover:scale-110 transition-transform"
      >
        {isPlaying ? '🎵' : '🔇'}
      </button>

      <main className="z-10 w-full max-w-[92%] sm:max-w-md md:max-w-lg bg-white/60 backdrop-blur-xl border border-white/80 glow-card rounded-3xl p-6 sm:p-8 transition-all duration-300 relative overflow-hidden">
        {showDots && (
          <ProgressDots steps={steps} currentIndex={currentIndex} accentClass={accentClass} />
        )}
        <AnimatePresence mode="wait">
          <motion.div
            key={location.pathname}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.3 }}
          >
            <Outlet />
          </motion.div>
        </AnimatePresence>
      </main>
      
    </div>
  );
}