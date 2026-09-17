import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { DuduBear } from '../components/BearMascot';
import LoveEnvelope from '../components/LoveEnvelope';

// ✏️ EDIT THESE — put your own real, specific reasons here before sending!
const bestieReasons = [
  "Sebab datang dalam kehidupan aku",
  "Kerana sudi luang masa dengan aku walaupun kau penat dan busy dengan program",
  "Kerana menjadi batu loncatan untuk aku kalau bukan disebabkan kau aku takkan mampu berdiri macam harini",
];

export default function Bestie() {
  const navigate = useNavigate();

  return (
    <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} className="text-center py-2 flex flex-col justify-center items-center">
      
      <motion.div
        animate={{ scale: [1, 1.1, 1], rotate: [0, 5, -5, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="mb-4 drop-shadow-md w-full flex justify-center items-center"
      >
        <DuduBear size={100} />
      </motion.div>

      <h2 className="font-serif text-3xl font-bold text-dudu-600 mb-2 glow-text">You Are The Best Veehanisha Farhana</h2>
      
      <p className="text-gray-600 mb-8 leading-relaxed max-w-sm mx-auto text-sm sm:text-base">
        Bah, saya terima dan hargai betul kejujuran selama berkawan denganku. 
        Kawan pun kawan lah... yang paling penting sekali, saya mahu tengok kawan saya sorang ni menjadi seorang yang dimahukan di masa akan datang
      </p>

      <LoveEnvelope
        theme="bestie"
        heading="Terima Kasih Vee"
        reasons={bestieReasons}
      />

      <button 
        onClick={() => navigate('/gift')}
        className="mt-6 mx-auto px-8 py-3.5 bg-dudu-500 hover:bg-dudu-600 text-white rounded-full font-semibold shadow-lg shadow-dudu-200 hover:scale-105 active:scale-95 transition-all"
      >
        Hadiah 🎁
      </button>
    </motion.div>
  );
}