import { motion } from 'framer-motion';

const emojiSets = {
  love: ['💖', '💕', '✨', '🌸', '💗'],
  bestie: ['🎉', '✨', '🍀', '🎊', '💫'],
};

export default function ConfettiBurst({ theme = 'love', count = 24 }) {
  const emojis = emojiSets[theme] || emojiSets.love;
  const particles = Array.from({ length: count }).map((_, i) => {
    const angle = (Math.PI * 2 * i) / count + Math.random() * 0.5;
    const distance = 120 + Math.random() * 140;
    const x = Math.cos(angle) * distance;
    const y = Math.sin(angle) * distance - 40;
    return {
      id: i,
      emoji: emojis[i % emojis.length],
      x,
      y,
      rotate: Math.random() * 360,
      delay: Math.random() * 0.15,
      size: Math.random() * 14 + 16,
    };
  });

  return (
    <div className="pointer-events-none absolute inset-0 flex items-center justify-center z-40 overflow-visible">
      {particles.map((p) => (
        <motion.span
          key={p.id}
          initial={{ opacity: 1, x: 0, y: 0, scale: 0, rotate: 0 }}
          animate={{
            opacity: [1, 1, 0],
            x: p.x,
            y: [p.y, p.y + 80],
            scale: [0, 1, 0.8],
            rotate: p.rotate,
          }}
          transition={{ duration: 1.6, delay: p.delay, ease: 'easeOut' }}
          className="absolute select-none"
          style={{ fontSize: p.size }}
        >
          {p.emoji}
        </motion.span>
      ))}
    </div>
  );
}