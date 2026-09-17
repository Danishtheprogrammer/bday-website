import { motion } from 'framer-motion';

export default function FloatingHearts({ theme }) {
  const elements = Array.from({ length: 18 });
  const isBestie = theme === 'bestie';
  const isLove = theme === 'love';
  const isNeutral = !isBestie && !isLove;

  const loveEmojis = ['💖', '✨'];
  const bestieEmojis = ['🍀', '🫧'];
  const mixedEmojis = [...loveEmojis, ...bestieEmojis];

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0 transition-colors duration-1000">
      <div className={`absolute -top-20 -left-20 w-72 h-72 rounded-full blur-3xl animate-pulse transition-colors duration-1000 ${
        isBestie ? 'bg-dudu-300/20' : isLove ? 'bg-bubu-300/30' : 'bg-gradient-to-br from-bubu-300/30 to-dudu-200/20'
      }`} />
      <div className={`absolute top-1/2 -right-20 w-80 h-80 rounded-full blur-3xl transition-colors duration-1000 ${
        isBestie ? 'bg-dudu-200/30' : isLove ? 'bg-bubu-200/40' : 'bg-gradient-to-tr from-dudu-300/30 to-bubu-200/20'
      }`} />
      <div className={`absolute -bottom-20 left-1/3 w-80 h-80 rounded-full blur-3xl transition-colors duration-1000 ${
        isBestie ? 'bg-dudu-200/30' : isLove ? 'bg-bubu-200/30' : 'bg-gradient-to-bl from-bubu-200/20 to-dudu-200/30'
      }`} />

      {elements.map((_, i) => {
        let emoji;
        let colorClass;

        if (isBestie) {
          emoji = bestieEmojis[i % 2];
          colorClass = 'text-dudu-500/40';
        } else if (isLove) {
          emoji = loveEmojis[i % 2];
          colorClass = 'text-bubu-500/40';
        } else {
          // Undecided — mix both sets, alternating the tint too
          emoji = mixedEmojis[i % mixedEmojis.length];
          colorClass = i % 2 === 0 ? 'text-bubu-500/40' : 'text-dudu-500/40';
        }

        const isPrimary = i % 2 === 0;

        return (
          <motion.div
            key={i}
            className={`absolute select-none pointer-events-none ${colorClass}`}
            style={{
              fontSize: isPrimary ? `${Math.random() * 16 + 16}px` : `${Math.random() * 10 + 10}px`,
            }}
            initial={{ y: '105vh', x: `${Math.random() * 95}vw`, opacity: 0, scale: 0.5 }}
            animate={{
              y: '-10vh',
              opacity: [0, 0.7, 0.7, 0],
              scale: [0.5, 1, 0.8],
              rotate: [0, Math.random() * 360],
            }}
            transition={{
              duration: Math.random() * 8 + 10,
              repeat: Infinity,
              ease: 'linear',
              delay: Math.random() * 5,
            }}
          >
            {emoji}
          </motion.div>
        );
      })}
    </div>
  );
}