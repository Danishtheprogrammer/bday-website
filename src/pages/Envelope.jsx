import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

const herName = "Vee"; // ✏️ TUKAR NAMA PANGGILAN DIA DI SINI

export default function Envelope() {
  const navigate = useNavigate();

  const handleOpen = () => {
    const audio = document.getElementById('bg-music');
    if (audio) audio.play().catch(() => {});
    navigate('/wish');
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="flex flex-col items-center justify-center text-center py-10 min-h-[280px]"
    >
      <motion.button
        onClick={handleOpen}
        whileTap={{ scale: 0.92 }}
        className="flex flex-col items-center gap-4"
      >
        <motion.span
          animate={{ y: [0, -10, 0], rotate: [-2, 2, -2] }}
          transition={{ duration: 2.2, repeat: Infinity, ease: 'easeInOut' }}
          className="text-8xl drop-shadow-lg"
        >
          💌
        </motion.span>
        <span className="font-serif text-xl sm:text-2xl font-bold text-gray-800">
          Untuk {herName} 
        </span>
        <motion.span
          animate={{ opacity: [0.4, 1, 0.4] }}
          transition={{ duration: 1.8, repeat: Infinity }}
          className="text-xs font-semibold uppercase tracking-widest text-rose-400"
        >
          Tekan untuk buka
        </motion.span>
      </motion.button>
    </motion.div>
  );
}