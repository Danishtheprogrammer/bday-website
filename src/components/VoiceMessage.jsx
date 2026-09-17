import { useState, useRef } from 'react';
import { motion } from 'framer-motion';

export default function VoiceMessage({ src, theme = 'love', label = 'Dengar mesej suara saya' }) {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef(null);
  const isBestie = theme === 'bestie';

  const toggle = () => {
    if (!audioRef.current) return;
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
  };

  return (
    <div className="mt-6 flex flex-col items-center relative z-10">
      <audio
        ref={audioRef}
        src={src}
        onPlay={() => setIsPlaying(true)}
        onPause={() => setIsPlaying(false)}
        onEnded={() => setIsPlaying(false)}
      />
      <motion.button
        onClick={toggle}
        whileTap={{ scale: 0.94 }}
        className={`flex items-center gap-3 px-5 py-3 rounded-full bg-white shadow-lg border ${isBestie ? 'border-dudu-200' : 'border-bubu-200'}`}
      >
        <span className="text-2xl">{isPlaying ? '⏸️' : '🎙️'}</span>
        <div className="flex items-end gap-0.5 h-5">
          {[0, 1, 2, 3, 4].map((i) => (
            <motion.span
              key={i}
              className={`w-1 rounded-full ${isBestie ? 'bg-dudu-400' : 'bg-bubu-400'}`}
              animate={isPlaying ? { height: ['30%', '100%', '50%', '90%', '40%'] } : { height: '30%' }}
              transition={isPlaying ? { duration: 0.9, repeat: Infinity, delay: i * 0.1 } : { duration: 0.3 }}
            />
          ))}
        </div>
        <span className={`text-sm font-semibold ${isBestie ? 'text-dudu-600' : 'text-bubu-600'}`}>
          {label}
        </span>
      </motion.button>
    </div>
  );
}