import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { BearDuo } from '../components/BearMascot';

// Kalau awak nak guna gambar watak comel sendiri, buang komen (//) di bawah dan letak fail dalam folder assets:
// import watakComel from '../assets/watak.png';

export default function Home() {
  const navigate = useNavigate();
  const [secretCount, setSecretCount] = useState(0);
  const [showSecret, setShowSecret] = useState(false);
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });

  // TUKAR TARIKH HARI JADI DIA DI SINI (Format: YYYY-MM-DD)
  const birthdayDate = "2026-09-23T00:00:00";

  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date().getTime();
      const difference = new Date(birthdayDate).getTime() - now;
      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((difference % (1000 * 60)) / 1000)
        });
      }
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  const handleStart = () => {
    const audio = document.getElementById('bg-music');
    if (audio) audio.play().catch(e => console.log("Audio play failed:", e));
    navigate('/memories');
  };

  return (
    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center flex flex-col items-center pt-2">
      
      {/* ANIMASI WATAK COMEL TERAPUNG */}
            <motion.div
        animate={{ y: [0, -15, 0], rotate: [0, 5, -5, 0] }}
        transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
        className="mb-5 drop-shadow-md cursor-pointer hover:scale-110 transition-transform"
      >
        <BearDuo size={110} />
      </motion.div>

      {/* Birtday Countdown Timer */}
      <div className="bg-white/70 backdrop-blur-sm px-4 py-2 rounded-full border border-rose-200 mb-6 shadow-sm flex gap-3 text-rose-600 font-bold text-sm">
        <span>Menghitung hari:</span>
        <span>{timeLeft.days}h {timeLeft.hours}j {timeLeft.minutes}m {timeLeft.seconds}s 🎂</span>
      </div>

      <motion.div 
        whileTap={{ scale: 0.8 }}
        onClick={() => {
          const newCount = secretCount + 1;
          setSecretCount(newCount);
          if (newCount === 1) setShowSecret(true);
        }}
        className="w-16 h-16 bg-rose-100 rounded-full flex items-center justify-center text-3xl shadow-inner mb-4 border border-rose-200 cursor-pointer"
      >
        👑
      </motion.div>

      <span className="text-xs font-semibold tracking-widest uppercase text-rose-500 bg-rose-100/80 px-3 py-1 rounded-full mb-3 border border-rose-200">
        A Special Surprise(sumpah jangan tekan icon tu)
      </span>

      <motion.h1 
        className="font-serif text-3xl sm:text-4xl font-bold text-rose-600 mb-4 glow-text"
        animate={{ scale: [1, 1.02, 1] }} transition={{ duration: 3, repeat: Infinity }}
      >
        Happy Birthday, Beautiful!
      </motion.h1>

      <p className="text-sm sm:text-base text-gray-600 mb-8 max-w-xs sm:max-w-sm">
        Aku buat website khas untuk kau tapi kau jangan expect lebih dari aku tau bah.
      </p>

      <button onClick={handleStart} className="w-full sm:w-auto px-8 py-3.5 bg-gradient-to-r from-rose-400 to-pink-500 text-white rounded-full font-semibold shadow-lg hover:scale-105 transition-all">
        Begin Journey ✨
      </button>

      {/* Secret Message Popup */}
      <AnimatePresence>
        {showSecret && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="absolute inset-0 z-50 flex items-center justify-center p-4 bg-white/40 backdrop-blur-md rounded-3xl">
            <div className="bg-white p-6 rounded-2xl shadow-xl border border-rose-200 text-left relative">
              <button onClick={() => setShowSecret(false)} className="absolute top-3 right-4 text-gray-400 font-bold hover:text-rose-500">X</button>
              <h3 className="font-serif text-2xl text-rose-500 mb-2 font-bold">Easter Egg Found! 💌</h3>
              <p className="text-sm text-gray-700 italic">"Bah, saya buat ni website sebab saya sayang sama kau!"</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}