function BearHead({ size = 80, fur, earInner, blush, muzzle = '#FFFDF9' }) {
  return (
    <svg width={size} height={size} viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
      <circle cx="22" cy="24" r="14" fill={fur} />
      <circle cx="78" cy="24" r="14" fill={fur} />
      <circle cx="22" cy="24" r="7" fill={earInner} />
      <circle cx="78" cy="24" r="7" fill={earInner} />
      <circle cx="50" cy="56" r="38" fill={fur} />
      <ellipse cx="50" cy="64" rx="17" ry="13" fill={muzzle} />
      <ellipse cx="27" cy="61" rx="7" ry="5" fill={blush} opacity="0.55" />
      <ellipse cx="73" cy="61" rx="7" ry="5" fill={blush} opacity="0.55" />
      <circle cx="38" cy="51" r="3.5" fill="#4a3229" />
      <circle cx="62" cy="51" r="3.5" fill="#4a3229" />
      <ellipse cx="50" cy="61" rx="3.5" ry="2.5" fill="#4a3229" />
      <path d="M44 67 Q50 72 56 67" stroke="#4a3229" strokeWidth="2" fill="none" strokeLinecap="round" />
    </svg>
  );
}

export function BubuBear({ size = 80 }) {
  return <BearHead size={size} fur="#FFB6C7" earInner="#FFD6E0" blush="#FF6F91" />;
}

export function DuduBear({ size = 80 }) {
  return <BearHead size={size} fur="#B8ECE3" earInner="#E0FBFC" blush="#4FB6B0" />;
}

export function BearDuo({ size = 100 }) {
  return (
    <div className="flex items-center justify-center">
      <div style={{ transform: 'rotate(-6deg)', marginRight: -size * 0.08 }}>
        <BubuBear size={size * 0.75} />
      </div>
      <span style={{ fontSize: size * 0.26, margin: `0 -${size * 0.02}px`, zIndex: 10 }}>💗</span>
      <div style={{ transform: 'rotate(6deg)', marginLeft: -size * 0.08 }}>
        <DuduBear size={size * 0.75} />
      </div>
    </div>
  );
}