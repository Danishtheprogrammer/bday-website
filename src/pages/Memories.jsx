import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { BearDuo } from '../components/BearMascot';

import pic1 from '../assets/gambar5.jpg'; 
import pic2 from '../assets/gambar6.jpg'; 
import pic3 from '../assets/gambar3.jpg'; 
import pic4 from '../assets/gambar4.jpg';
import pic9 from '../assets/gambar9.jpg'; 
import pic12 from '../assets/gambar12.jpg';  
import pic8 from '../assets/gambar8.jpg';
import clip1 from '../assets/clip1.mp4';


const timeline = [
  {
    label: "Kali Pertama",
    emoji: "👀",
    text: "Jujur aku cakap waktu kau tegur aku kat program Japan ni memang aku tak ingat nama kau sapa walapun da second time jumpa.(p/s: semua gambar ni aku dapat mostly dari program tau",
    img: pic4,
  },
  {
    label: "Sabahan",
    emoji: "🤝",
    text: "Mungkin kau tak ingat apa aku cakap tapi kau adalah orang sabah pertama yang aku kawan walaupun kau anggap benda tu biasa tapi bagi aku dia macam satu benda besar",
    img: pic1,
  },
  {
    label: "Christmas",
    emoji: "🎄",
    text: "Kalau kau nk tahu ini sebenarnya event Krismas pertama aku pergi and actually aku tak tahu apa aku patut buat but time ni kau bantu aku selesakan diri",
    img: pic2,
  },
  {
    label: "Tragedi",
    emoji: "😅",
    text: "Tak ya cakap la time ni.....",
    video: clip1,
  },
  {
    label: "Christmas",
    emoji: "🎄",
    text: "Kalau kau nk tahu ini sebenarnya event Krismas pertama aku pergi and actually aku tak tahu apa aku patut buat but time ni kau bantu aku selesakan diri",
    img: pic2,
  },
  {
    label: "Gardenia",
    emoji: "💫",
    text: "Paling wajib setiap kali hujung sem.",
    img: pic9,
  },
  {
    label: "Last",
    emoji: "💫",
    text: "Dan sekarang, tengah buat website ni... aku sedar aku tengah buat website sebab aku tau yang kau telah sebahagian penting dalam cerita aku",
    img: pic8,
  },
  {
    label: "Before Lupa",
    emoji: "🎸",
    text: "Alat musik anda selamat je just saya tukar tali sebab tebal untuk awak maintu",
    img: pic12,
  },
];

export default function Memories() {
  const navigate = useNavigate();

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-center py-4 flex flex-col items-center">
      
      <motion.div
        animate={{ rotate: [-10, 10, -10] }}
        transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
        className="mb-2 drop-shadow-md origin-bottom w-full flex justify-center"
      >
        <BearDuo size={90} />
      </motion.div>

      <h2 className="font-serif text-3xl font-bold text-rose-600 mb-1 glow-text">Cerita Kita</h2>
      <p className="text-xs sm:text-sm text-gray-500 mb-6">Sebelum kita teruskan...</p>

      <div className="relative w-full text-left max-h-[55vh] overflow-y-auto custom-scrollbar pr-1">
        <div className="absolute left-[27px] top-2 bottom-2 w-0.5 bg-rose-200" />
        {timeline.map((item, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, x: -15 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.6, delay: i * 0.1 }}
            className="relative pl-16 pb-8 last:pb-2"
          >
            <div className="absolute left-0 top-0 w-14 h-14 rounded-full bg-white border-2 border-rose-300 flex items-center justify-center text-2xl shadow-md z-10">
              {item.emoji}
            </div>
            <span className="text-[11px] font-bold uppercase tracking-wider text-rose-400 block mb-1">
              {item.label}
            </span>
                       {item.video ? (
              <video
                src={item.video}
                controls
                playsInline
                preload="metadata"
                className="w-full aspect-square object-cover rounded-lg mb-2 border border-gray-100 shadow-sm max-w-[220px] bg-black"
              />
            ) : item.img ? (
              <img
                src={item.img}
                alt={item.label}
                className="w-full aspect-square object-cover object-top rounded-lg mb-2 border border-gray-100 shadow-sm max-w-[220px]"
              />
            ) : null}
            <p className="text-sm text-gray-700 leading-relaxed font-serif italic">
              {item.text}
            </p>
          </motion.div>
        ))}
      </div>

      <motion.button 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8 }}
        onClick={() => navigate('/crossroads')}
        className="mt-2 w-full sm:w-auto px-8 py-3.5 bg-gradient-to-r from-rose-400 to-pink-500 text-white rounded-full font-semibold shadow-lg shadow-rose-200 hover:scale-105 active:scale-95 transition-all"
      >
        Seterusnya ➔
      </motion.button>
    </motion.div>
  );
}