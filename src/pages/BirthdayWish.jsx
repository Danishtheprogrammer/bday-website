import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

const herNickname = "Vee"; // ✏️ TUKAR NAMA PANGGILAN DIA
// ✏️ TUKAR DENGAN HARAPAN SPESIFIK UNTUK DIA — buat lebih personal!
const wishText = "lebih happy,sentiasa dikelilingi oleh orang yang sentiasa sayang kau dan semua yang kau usahakan tahun ni membuahkan hasil.";

export default function BirthdayWish() {
  const navigate = useNavigate();

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="text-center flex flex-col items-center justify-center min-h-[320px] py-4"
    >
      <motion.div
        animate={{ scale: [1, 1.15, 1], rotate: [0, -5, 5, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="text-7xl mb-4 drop-shadow-md"
      >
        🎂
      </motion.div>

      <motion.p
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
        className="text-xs uppercase tracking-widest font-semibold text-rose-400 mb-2"
      >
        Before we continue...
      </motion.p>

      <motion.h1
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
        className="font-serif text-2xl sm:text-3xl font-bold text-gray-800 mb-4"
      >
        Selamat Hari Jadi, {herNickname}! 🎉
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8 }}
        className="text-sm sm:text-base text-gray-600 leading-relaxed max-w-xs mx-auto mb-8"
      >
        Aku harap tahun ni bawa kau {wishText}
      </motion.p>

      <motion.button
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.3 }}
        onClick={() => navigate('/home')}
        className="w-full sm:w-auto px-8 py-3.5 bg-gradient-to-r from-rose-400 to-pink-500 text-white rounded-full font-semibold shadow-lg shadow-rose-200 hover:scale-105 active:scale-95 transition-all"
      >
        Teruskan ➔
      </motion.button>
    </motion.div>
  );
}