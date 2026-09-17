import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { AppContext } from '../context/AppContext';
import { THEME } from '../theme';

const romanticGifts = [
  { id: 1, title: "Mersing", desc: "Aku janji nak bawak kau jalan jalan johor ingat tak", icon: "💆‍♀️" },
  { id: 2, title: "The Weeknd", desc: "Jom tengok The Weeknd Vee,ada tiket untuk kau", icon: "🎤" },
  { id: 3, title: "Hadiah", desc: "Ini kalau kau tak tekan memang aku akan bagi bah", icon: "🎬" },
  { id: 4, title: "Secret", desc: "Rahsia Bah", icon: "🙇‍♂️" },
];

const bestieGifts = [
  { id: 1, title: "Belanja Zuscoffe", desc: "Ni kalau kau tak pick memang aku lanja kau", icon: "🧋" },
  { id: 2, title: "Lepak Makan Jom", desc: "Kalau tak Al-Safa ,Nisha Fattah", icon: "🍔" },
  { id: 3, title: "Tiket Wayang", desc: "Bila nak movie lagi bro", icon: "🍿" },
  { id: 4, title: "Surprise Gift Box", desc: "Tak tau", icon: "🎁" },
];

export default function Gift() {
  const { selections, setSelections } = useContext(AppContext);
  const navigate = useNavigate();

  const isBestie = selections.relationship === 'bestie';
  const giftsToDisplay = isBestie ? bestieGifts : romanticGifts;
  const c = isBestie ? THEME.dudu : THEME.bubu;

  return (
    <motion.div initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} className="text-center flex flex-col items-center">
      <span
        className="text-xs font-semibold tracking-widest uppercase px-3 py-1 rounded-full mb-2 inline-block"
        style={{ color: c[500], backgroundColor: c[100] }}
      >
        Langkah 1 dari 2
      </span>
      
      <motion.div
        animate={{ rotate: [0, -10, 10, -10, 10, 0], scale: [1, 1.1, 1] }}
        transition={{ duration: 1.5, repeat: Infinity, repeatDelay: 1 }}
        className="text-6xl mt-4 mb-2 drop-shadow-md"
      >
        🎁
      </motion.div>

      <h2 className="font-serif text-2xl sm:text-3xl font-bold text-gray-800 mb-1">Pilih pigi itu hadiah kau!</h2>
      <p className="text-xs sm:text-sm text-gray-500 mb-6">Pilih satu treat yang paling kau mahu bah</p>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 mb-8 w-full">
        {giftsToDisplay.map((g) => {
          const isSelected = selections.gift === g.title;
          return (
            <motion.div
              key={g.id}
              whileTap={{ scale: 0.98 }}
              onClick={() => setSelections({ ...selections, gift: g.title })}
              className="p-4 rounded-2xl border-2 text-left cursor-pointer transition-all relative overflow-hidden"
              style={{
                borderColor: isSelected ? c[400] : 'rgba(255,255,255,0.8)',
                backgroundColor: isSelected ? `${c[50]}e6` : 'rgba(255,255,255,0.5)',
                boxShadow: isSelected ? `0 4px 12px ${c[100]}` : 'none',
                transform: isSelected ? 'scale(1.02)' : 'scale(1)',
              }}
            >
              {isSelected && (
                <div
                  className="absolute top-2 right-2 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs font-bold"
                  style={{ backgroundColor: c[500] }}
                >
                  ✓
                </div>
              )}
              <div className="text-3xl mb-2">{g.icon}</div>
              <h3 className="font-bold text-gray-800 text-sm sm:text-base mb-1">{g.title}</h3>
              <p className="text-xs text-gray-500 leading-snug">{g.desc}</p>
            </motion.div>
          );
        })}
      </div>

      <button
        disabled={!selections.gift}
        onClick={() => navigate('/date')}
        className="w-full sm:w-auto px-8 py-3.5 text-white rounded-full font-semibold hover:scale-105 active:scale-95 transition-all disabled:cursor-not-allowed"
        style={{
          background: `linear-gradient(to right, ${c[400]}, ${c[500]})`,
          boxShadow: `0 10px 20px -5px ${c[200]}`,
          opacity: selections.gift ? 1 : 0.4,
        }}
      >
        Sahkan Pilihan ➔
      </button>
    </motion.div>
  );
}