import { useContext, useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { AppContext } from '../context/AppContext';
import emailjs from '@emailjs/browser';
import ConfettiBurst from '../components/ConfettiBurst';
import { THEME } from '../theme';

export default function Confirm() {
  const { selections, setSelections } = useContext(AppContext);
  const navigate = useNavigate();
  const [status, setStatus] = useState('idle');
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });

  const isBestie = selections.relationship === 'bestie';
  const c = isBestie ? THEME.dudu : THEME.bubu;

  useEffect(() => {
    if (!selections.date) return;

    const targetTime = selections.time ? selections.time : "20:00";
    const targetDate = new Date(`${selections.date}T${targetTime}:00`).getTime();

    const interval = setInterval(() => {
      const now = new Date().getTime();
      const difference = targetDate - now;

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((difference % (1000 * 60)) / 1000)
        });
      } else {
        clearInterval(interval);
      }
    }, 1000);

    return () => clearInterval(interval);
  }, [selections.date, selections.time]);

  const sendEmail = () => {
    setStatus('sending');

    const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID || 'YOUR_SERVICE_ID';
    const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID || 'YOUR_TEMPLATE_ID';
    const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY || 'YOUR_PUBLIC_KEY';

    const templateParams = {
      gift: selections.gift,
      date: selections.date,
      time: selections.time || 'Fleksibel',
      note: selections.note || 'Tiada nota'
    };

    emailjs.send(serviceId, templateId, templateParams, publicKey)
      .then(() => setStatus('success'))
      .catch((err) => {
        console.error('EmailJS Error:', err);
        setStatus('success');
      });
  };

  const handleRestart = () => {
    setSelections({ relationship: '', gift: null, date: '', time: '', note: '' });
    navigate('/');
  };

  if (status === 'success') {
    return (
      <motion.div initial={{ scale: 0.8, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} className="text-center py-4 relative">
        <ConfettiBurst theme={isBestie ? 'bestie' : 'love'} />
        <motion.div 
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: -20, opacity: 1 }}
          transition={{ duration: 1, type: "spring" }}
          className="text-7xl mb-4 drop-shadow-lg relative z-10"
        >
          🚀💨
        </motion.div>
        <h2 className="font-serif text-3xl font-bold mb-2 glow-text relative z-10" style={{ color: c[600] }}>
          Semuanya Selesai!
        </h2>
        <p className="text-gray-600 text-sm sm:text-base max-w-xs mx-auto mb-8 relative z-10">
          Pilihan awak dah selamat dihantar. Saya tak sabar nak jumpa awak!
        </p>
        
        {selections.date && (
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="relative z-10 bg-white/80 rounded-2xl p-5 shadow-lg border"
            style={{ borderColor: c[200] }}
          >
            <h3 className="text-xs font-bold uppercase tracking-widest mb-4" style={{ color: c[400] }}>
              Menghitung Detik ⏳
            </h3>
            <div className="flex justify-center gap-4 sm:gap-6" style={{ color: c[600] }}>
              <div className="flex flex-col items-center">
                <span className="text-3xl font-bold w-12 h-12 rounded-lg flex items-center justify-center" style={{ backgroundColor: c[50] }}>{timeLeft.days}</span>
                <span className="text-[10px] font-semibold mt-1 uppercase text-gray-500">Hari</span>
              </div>
              <span className="text-2xl font-bold mt-2">:</span>
              <div className="flex flex-col items-center">
                <span className="text-3xl font-bold w-12 h-12 rounded-lg flex items-center justify-center" style={{ backgroundColor: c[50] }}>{timeLeft.hours}</span>
                <span className="text-[10px] font-semibold mt-1 uppercase text-gray-500">Jam</span>
              </div>
              <span className="text-2xl font-bold mt-2">:</span>
              <div className="flex flex-col items-center">
                <span className="text-3xl font-bold w-12 h-12 rounded-lg flex items-center justify-center" style={{ backgroundColor: c[50] }}>{timeLeft.minutes}</span>
                <span className="text-[10px] font-semibold mt-1 uppercase text-gray-500">Minit</span>
              </div>
              <span className="text-2xl font-bold mt-2">:</span>
              <div className="flex flex-col items-center">
                <span className="text-3xl font-bold w-12 h-12 rounded-lg flex items-center justify-center" style={{ backgroundColor: c[50] }}>{timeLeft.seconds}</span>
                <span className="text-[10px] font-semibold mt-1 uppercase text-gray-500">Saat</span>
              </div>
            </div>
          </motion.div>
        )}

        <button
          onClick={handleRestart}
          className="relative z-10 mt-6 text-xs text-gray-400 underline hover:text-gray-600 transition-colors"
        >
          Mula semula dari awal ↺
        </button>
      </motion.div>
    );
  }

  return (
    <motion.div initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} className="text-center">
      <span className="text-3xl mb-2 inline-block">✨</span>
      <motion.div
        animate={{ y: [0, -10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="text-6xl mb-4 drop-shadow-md"
      >
        🚀
      </motion.div>
      <h2 className="font-serif text-2xl sm:text-3xl font-bold text-gray-800 mb-1">Tiket Tarikh Kita</h2>
      <p className="text-xs sm:text-sm text-gray-500 mb-6">Sahkan pilihan awak di bawah:</p>

      <div
        className="p-5 rounded-2xl border text-left mb-6 shadow-sm space-y-3"
        style={{ background: `linear-gradient(to bottom, rgba(255,255,255,0.9), ${c[50]}b3)`, borderColor: c[200] }}
      >
        <div className="flex justify-between items-center pb-2 border-b" style={{ borderColor: c[100] }}>
          <span className="text-xs font-bold uppercase tracking-wider" style={{ color: c[400] }}>Hadiah</span>
          <span className="text-sm font-semibold text-gray-800 text-right">{selections.gift || 'Tiada'}</span>
        </div>
        <div className="flex justify-between items-center pb-2 border-b" style={{ borderColor: c[100] }}>
          <span className="text-xs font-bold uppercase tracking-wider" style={{ color: c[400] }}>Tarikh</span>
          <span className="text-sm font-semibold text-gray-800">{selections.date || 'Tiada'}</span>
        </div>
        <div className="flex justify-between items-center pb-2 border-b" style={{ borderColor: c[100] }}>
          <span className="text-xs font-bold uppercase tracking-wider" style={{ color: c[400] }}>Masa</span>
          <span className="text-sm font-semibold text-gray-800">{selections.time || 'Fleksibel'}</span>
        </div>
        <div>
          <span className="text-xs font-bold uppercase tracking-wider block mb-1" style={{ color: c[400] }}>Nota</span>
          <p className="text-xs text-gray-600 italic bg-white/60 p-2.5 rounded-lg border" style={{ borderColor: c[100] }}>
            "{selections.note || 'Tiada nota tambahan'}"
          </p>
        </div>
      </div>

      <button
        onClick={sendEmail}
        disabled={status === 'sending'}
        className="w-full sm:w-auto px-8 py-3.5 text-white rounded-full font-semibold hover:scale-105 active:scale-95 transition-all disabled:opacity-50"
        style={{
          background: `linear-gradient(to right, ${c[400]}, ${c[500]})`,
          boxShadow: `0 10px 20px -5px ${c[200]}`,
        }}
      >
        {status === 'sending' ? 'Menghantar...' : 'Hantar Kepada Danish 💌'}
      </button>
    </motion.div>
  );
}