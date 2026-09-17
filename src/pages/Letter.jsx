import { useState } from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import Typewriter from '../components/Typewriter';

// 1. IMPORT GAMBAR ROMANTIK DI SINI
import lovePic1 from '../assets/gambar1.jpg';
import loveClip from '../assets/clip2.mp4';
import lovePic3 from '../assets/gambar11.jpg';
import lovePic4 from '../assets/gambar10.jpg';

export default function Letter() {
  const navigate = useNavigate();
  const [startedIndexes, setStartedIndexes] = useState([]);

  const markStarted = (index) => {
    setStartedIndexes((prev) => (prev.includes(index) ? prev : [...prev, index]));
  };

  // 2. MASUKKAN GAMBAR KE DALAM SUSUNAN CERITA
  const story = [
    { 
      img: lovePic1, 
      text: "Saya mungkin tak selalu cakap, tapi sejak kenal kau, hari-hari aku jadi lebih hidup " 
    },
    { 
      img: lovePic3, 
      text: "Sebenarnya time aku snap gambar ni aku gelak je lagi lagi kau minta kuah sup makan kat mamak" 
    },
    { 
      video: loveClip, 
      text: "Semoga anda dan band anda terus maju sis. Semangat Vee. Selamat Hari Jadi. 💖" 
    },
    { 
      img: lovePic4, 
      text: "Semoga anda dan band anda terus maju sis. Semangat Vee. Selamat Hari Jadi. 💖" 
    }
  ];

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-center py-2 flex flex-col items-center">
      <h2 className="font-serif text-3xl font-bold text-rose-600 mb-6 glow-text">Untuk Awak...</h2>
      
      <div className="flex flex-col gap-10 mb-8 max-h-[55vh] overflow-y-auto pr-2 custom-scrollbar w-full">
        {story.map((item, index) => (
          <motion.div 
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            onViewportEnter={() => markStarted(index)}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="bg-white p-4 pb-6 rounded-xl shadow-lg border border-rose-100 rotate-1 even:-rotate-1 w-full"
          >
            {item.video ? (
              <video
                src={item.video}
                controls
                playsInline
                preload="metadata"
                className="w-full h-auto max-h-80 object-contain rounded-lg mb-4 bg-black border border-gray-100"
              />
            ) : item.img ? (
              <img 
                src={item.img} 
                alt="Memory" 
                className="w-full h-auto max-h-80 object-contain rounded-lg mb-4 bg-gray-50 border border-gray-100" 
              />
            ) : null}
            <p className="font-serif text-gray-700 italic leading-relaxed text-sm sm:text-base px-2 min-h-[3em]">
              "<Typewriter text={item.text} start={startedIndexes.includes(index)} />"
            </p>
          </motion.div>
        ))}
      </div>

      <motion.button 
        initial={{ opacity: 0 }} 
        animate={{ opacity: 1 }} 
        transition={{ delay: 2 }} 
        onClick={() => navigate('/gift')}
        className="w-full sm:w-auto px-8 py-3.5 bg-gradient-to-r from-rose-400 to-pink-500 text-white rounded-full font-semibold shadow-lg shadow-rose-300 hover:scale-105 active:scale-95 transition-all"
      >
        Tuntut Hadiah Anda 🎁
      </motion.button>
    </motion.div>
  );
}