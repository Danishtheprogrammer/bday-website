import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function LoveEnvelope({ theme = 'love', heading, intro, reasons }) {
  const [opened, setOpened] = useState(false);
  const accent = theme === 'bestie' ? 'dudu' : 'bubu';

  return (
    <div className="mt-6 flex flex-col items-center relative z-10">
      <AnimatePresence mode="wait">
        {!opened ? (
          <motion.button
            key="envelope"
            onClick={() => setOpened(true)}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8, y: -10 }}
            whileTap={{ scale: 0.92 }}
            className="flex flex-col items-center gap-2"
          >
            <motion.span
              animate={{ y: [0, -6, 0] }}
              transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' }}
              className="text-5xl drop-shadow-md"
            >
              💌
            </motion.span>
            <span className={`text-xs font-semibold text-${accent}-500 underline underline-offset-2`}>
              Ada satu lagi surat untuk kau — tekan untuk buka
            </span>
          </motion.button>
        ) : (
          <motion.div
            key="letter"
            initial={{ opacity: 0, y: 30, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ type: 'spring', bounce: 0.3, duration: 0.7 }}
            className={`bg-white rounded-2xl border border-${accent}-200 shadow-xl p-5 text-left max-w-xs mx-auto`}
          >
            <h3 className={`font-serif text-lg font-bold text-${accent}-600 mb-3 text-center`}>
              {heading}
            </h3>

            {intro && (
              <p className="text-xs text-gray-500 italic mb-3 leading-relaxed">{intro}</p>
            )}

            <motion.ul
              initial="hidden"
              animate="show"
              variants={{
                hidden: {},
                show: { transition: { staggerChildren: 0.35, delayChildren: 0.2 } },
              }}
              className="space-y-2.5"
            >
              {reasons.map((reason, i) => (
                <motion.li
                  key={i}
                  variants={{
                    hidden: { opacity: 0, x: -10 },
                    show: { opacity: 1, x: 0 },
                  }}
                  className="text-sm text-gray-700 flex gap-2 items-start"
                >
                  <span className={`text-${accent}-500 mt-0.5`}>💗</span>
                  <span>{reason}</span>
                </motion.li>
              ))}
            </motion.ul>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}