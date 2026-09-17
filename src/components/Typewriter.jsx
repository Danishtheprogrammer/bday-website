import { useState, useEffect, useRef } from 'react';

export default function Typewriter({ text, speed = 28, start = false, className = '' }) {
  const [displayed, setDisplayed] = useState('');
  const indexRef = useRef(0);

  useEffect(() => {
    if (!start) return;
    indexRef.current = 0;
    setDisplayed('');
    const interval = setInterval(() => {
      indexRef.current += 1;
      setDisplayed(text.slice(0, indexRef.current));
      if (indexRef.current >= text.length) clearInterval(interval);
    }, speed);
    return () => clearInterval(interval);
  }, [start, text, speed]);

  return (
    <span className={className}>
      {displayed}
      {start && displayed.length < text.length && <span className="animate-pulse">▌</span>}
    </span>
  );
}