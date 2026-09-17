import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { useContext } from 'react';
import { AppContext } from '../context/AppContext';
import { BearDuo } from '../components/BearMascot';

export default function Crossroads() {
  const navigate = useNavigate();
  const { selections, setSelections } = useContext(AppContext);

  const handleChoice = (path) => {
    setSelections({ ...selections, relationship: path, gift: null, date: '', time: '', note: '' });
    navigate(`/${path}`);
  };

  return (
    <motion.div initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} className="text-center relative">

      <div className="absolute -top-10 -left-6 w-32 h-32 rounded-full blur-2xl bg-bubu-300/40 pointer-events-none" />
      <div className="absolute -top-6 -right-6 w-32 h-32 rounded-full blur-2xl bg-dudu-300/40 pointer-events-none" />

      <motion.div
        animate={{ y: [0, -15, 0], rotate: [0, -3, 3, 0] }}
        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
        className="mb-4 drop-shadow-md cursor-pointer hover:scale-110 relative z-10"
      >
        <BearDuo size={110} />
      </motion.div>

      <h2 className="font-serif text-2xl sm:text-3xl font-bold mb-4 relative z-10 bg-gradient-to-r from-bubu-500 to-dudu-500 bg-clip-text text-transparent">
        Satu Soalan Jujur...
      </h2>

      <p className="text-sm sm:text-base text-gray-600 mb-8 leading-relaxed max-w-sm mx-auto relative z-10">
        Saya buat semua ni sebab awak istimewa. Tapi saya tak nak awak rasa tertekan — jujur je, kita ni kawan ke lebih dari tu?
      </p>

      <div className="flex flex-col gap-4 relative z-10">
        <motion.button
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          onClick={() => handleChoice('bestie')}
          className="w-full p-4 bg-white/80 border-2 border-dudu-200 hover:border-dudu-400 rounded-2xl flex flex-col items-center justify-center shadow-sm transition-all"
        >
          <span className="text-2xl mb-1">🤝</span>
          <span className="font-bold text-dudu-600">Kita kawan baik!</span>
          <span className="text-xs text-gray-500">Saya hargai persahabatan kita</span>
        </motion.button>

        <motion.button
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          onClick={() => handleChoice('love')}
          className="w-full p-4 bg-white/80 border-2 border-bubu-200 hover:border-bubu-400 rounded-2xl flex flex-col items-center justify-center shadow-sm transition-all"
        >
          <span className="text-2xl mb-1">😳</span>
          <span className="font-bold text-bubu-500">Mungkin lebih dari kawan?</span>
          <span className="text-xs text-gray-500">Jom tengok ke mana arah kita</span>
        </motion.button>
      </div>
    </motion.div>
  );
}