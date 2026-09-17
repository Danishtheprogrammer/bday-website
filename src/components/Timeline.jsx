import { motion } from 'framer-motion';

export default function Timeline({ items, lineColorClass = 'bg-rose-200', badgeBorderClass = 'border-rose-300', labelColorClass = 'text-rose-400' }) {
  return (
    <div className="relative w-full text-left">
      <div className={`absolute left-[27px] top-2 bottom-2 w-0.5 ${lineColorClass}`} />
      {items.map((item, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, x: -15 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.6, delay: i * 0.1 }}
          className="relative pl-16 pb-8 last:pb-2"
        >
          <div className={`absolute left-0 top-0 w-14 h-14 rounded-full bg-white border-2 ${badgeBorderClass} flex items-center justify-center text-2xl shadow-md z-10`}>
            {item.emoji}
          </div>
          <span className={`text-[11px] font-bold uppercase tracking-wider ${labelColorClass} block mb-1`}>
            {item.label}
          </span>
          {item.img && (
            <img
              src={item.img}
              alt={item.label}
              className="w-full aspect-square object-cover object-top rounded-lg mb-2 border border-gray-100 shadow-sm max-w-[220px]"
            />
          )}
          <p className="text-sm text-gray-700 leading-relaxed font-serif italic">
            {item.text}
          </p>
        </motion.div>
      ))}
    </div>
  );
}