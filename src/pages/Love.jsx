import { useContext } from 'react';
import { useState } from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { AppContext } from '../context/AppContext';
import ConfettiBurst from '../components/ConfettiBurst';
import LoveEnvelope from '../components/LoveEnvelope';

const phrases = [
  "No 😜", "Lambat bah kau! 😂", "Makin comel ni! 🤏", 
  "Sini lah! 🤪", "Pilih je la Yes Vee ! 💖"
];

const loveReasons = [
  "Kau ni baik sangat — ambil berat pasal orang sekeliling kau, bukan setakat aku seorang even orang yang kau bantu balas buruk kat kau.",
  "Kau berani buat apa yang kau nak walaupun orang kadang tak faham apa kau cuba lakukan. Itu yang buat aku kagum.",
  "Sebenarnya kalau kau tanya aku kan aku kagum gila tengok kau pandai main guitar semua tu",
  "Kita ni almost 180 darjah tak sama, tapi entah kenapa, awak je yang buat saya betul-betul jatuh hati.",
  "You is the reason why aku  berani cuba benda baru — Kau buka mata aku untuk explore semua benda yang aku nak buat.",
];

export default function Love() {
  const navigate = useNavigate();
  const { selections, setSelections } = useContext(AppContext);
  const [noCount, setNoCount] = useState(0);
  const [noPosition, setNoPosition] = useState({ x: 0, y: 0 });

  const accepted = selections.accepted;
  const setAccepted = (val) => setSelections({ ...selections, accepted: val });

  const yesButtonScale = Math.min(1 + noCount * 0.15, 2); 
  const noButtonScale = Math.max(1 - noCount * 0.1, 0.3);

  const moveNoButton = (e) => {
    if (e) e.preventDefault(); 
    setNoCount((prev) => prev + 1);
    const randomX = (Math.random() - 0.5) * 160; 
    const randomY = (Math.random() - 0.8) * 100; 
    setNoPosition({ x: randomX, y: randomY });
  };

  if (accepted) {
    return (
      <motion.div initial={{ scale: 0.8, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} className="text-center py-4 relative">
        <ConfettiBurst theme="love" />
        <div className="text-6xl mb-4 animate-bounce relative z-10">💖</div>
        <h1 className="font-serif text-3xl sm:text-4xl font-bold text-bubu-600 mb-3 glow-text relative z-10">Agaklah 🎉</h1>
        <p className="text-gray-600 text-sm sm:text-base mb-2 relative z-10">
          Thank you bah kerana jadikan harini istimewa untuk aku jugak
        </p>

        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1 }}>
          <LoveEnvelope
            theme="love"
            heading="Sebab Aku Suka Kau..."
            intro="Sebenarnya kalau kau tanya macam mana aku boleh suka kau, Aku pun tak tahu nak mula dari mana sebab macam 
            kau cakap once kau betul betul jatuh cinta tu kau macam buta. "
            reasons={loveReasons}
          />
        </motion.div>

        <motion.button 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          onClick={() => navigate('/letter')}
          className="relative z-10 mt-6 w-full sm:w-auto px-8 py-3.5 bg-gradient-to-r from-bubu-400 to-bubu-500 text-white rounded-full font-semibold shadow-lg shadow-bubu-300/50 hover:scale-105 active:scale-95 transition-all"
        >
          Teruskan Membaca 💌
        </motion.button>
      </motion.div>
    );
  }

  return (
    <motion.div className="text-center flex flex-col items-center min-h-[320px] justify-center py-2">
      <span className="text-4xl mb-3">💌</span>
      <h1 className="font-serif text-2xl sm:text-3xl font-bold text-gray-800 mb-2">I love you so much Vee.</h1>
      <h2 className="font-serif text-xl sm:text-2xl text-bubu-500 font-semibold mb-8">Do you love me too?</h2>

      <div className="flex flex-row flex-wrap items-center justify-center gap-4 w-full relative min-h-[150px]">
        
        <motion.button
          animate={{ scale: yesButtonScale }}
          transition={{ type: 'spring', stiffness: 300, damping: 20 }}
          onClick={() => setAccepted(true)}
          className="px-8 py-3 bg-bubu-500 hover:bg-bubu-600 text-white rounded-2xl font-bold shadow-lg shadow-bubu-200 transition-colors z-10 origin-center"
        >
          Yes! 💕
        </motion.button>

        <motion.button
          animate={{ x: noPosition.x, y: noPosition.y, scale: noButtonScale }}
          transition={{ type: 'spring', stiffness: 1000, damping: 10, mass: 0.5 }}
          onPointerEnter={moveNoButton} 
          onClick={moveNoButton}
          className="px-6 py-3 bg-bubu-100 hover:bg-bubu-200 text-bubu-600 rounded-2xl font-semibold border border-bubu-200 shadow-sm z-50 touch-none origin-center"
        >
          {phrases[Math.min(noCount, phrases.length - 1)]}
        </motion.button>
        
      </div>
    </motion.div>
  );
}