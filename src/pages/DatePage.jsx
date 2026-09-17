import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { AppContext } from '../context/AppContext';
import { THEME } from '../theme';

export default function DatePage() {
  const { selections, setSelections } = useContext(AppContext);
  const navigate = useNavigate();
  const isBestie = selections.relationship === 'bestie';
  const c = isBestie ? THEME.dudu : THEME.bubu;

  const handleChange = (e) => setSelections({ ...selections, [e.target.name]: e.target.value });

  const inputStyle = {
    borderColor: c[200],
    backgroundColor: 'rgba(255,255,255,0.8)',
  };

  return (
    <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} className="text-center">
      <span
        className="text-xs font-semibold tracking-widest uppercase px-3 py-1 rounded-full mb-2 inline-block"
        style={{ color: c[500], backgroundColor: c[100] }}
      >
        Step 2 of 2
      </span>
      <h2 className="font-serif text-2xl sm:text-3xl font-bold text-gray-800 mb-1">Pick a Date & Time 🗓️</h2>
      <p className="text-xs sm:text-sm text-gray-500 mb-6">When are we going out together?</p>

      <div className="flex flex-col gap-4 text-left mb-8">
        <div>
          <label className="block text-xs font-bold text-gray-600 uppercase tracking-wider mb-1.5">
            Select Date *
          </label>
          <input
            type="date"
            name="date"
            value={selections.date || ''}
            onChange={handleChange}
            className="w-full p-3.5 rounded-xl border text-gray-800 font-medium focus:outline-none shadow-sm"
            style={inputStyle}
          />
        </div>

        <div>
          <label className="block text-xs font-bold text-gray-600 uppercase tracking-wider mb-1.5">
            Preferred Time (Pilihan)
          </label>
          <input
            type="time"
            name="time"
            value={selections.time || ''}
            onChange={handleChange}
            className="w-full p-3.5 rounded-xl border text-gray-800 font-medium focus:outline-none shadow-sm"
            style={inputStyle}
          />
        </div>

        <div>
          <label className="block text-xs font-bold text-gray-600 uppercase tracking-wider mb-1.5">
            Special Notes or Wishes (Optional)
          </label>
          <textarea
            name="note"
            rows="3"
            value={selections.note || ''}
            onChange={handleChange}
            placeholder="Any specific outfit, location preference, or mood?"
            className="w-full p-3.5 rounded-xl border text-gray-800 font-medium focus:outline-none shadow-sm resize-none text-sm"
            style={inputStyle}
          ></textarea>
        </div>
      </div>

      <button
        disabled={!selections.date}
        onClick={() => navigate('/confirm')}
        className="w-full sm:w-auto px-8 py-3.5 text-white rounded-full font-semibold hover:scale-105 active:scale-95 transition-all disabled:cursor-not-allowed"
        style={{
          background: `linear-gradient(to right, ${c[400]}, ${c[500]})`,
          boxShadow: `0 10px 20px -5px ${c[200]}`,
          opacity: selections.date ? 1 : 0.4,
        }}
      >
        Lock It In 🔒
      </button>
    </motion.div>
  );
}