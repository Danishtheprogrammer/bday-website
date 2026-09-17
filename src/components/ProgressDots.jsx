export default function ProgressDots({ steps, currentIndex, accentClass }) {
  return (
    <div className="flex gap-1.5 justify-center mb-4">
      {steps.map((_, i) => (
        <span
          key={i}
          className={`h-1.5 rounded-full transition-all duration-300 ${
            i === currentIndex
              ? `w-5 ${accentClass}`
              : i < currentIndex
                ? `w-1.5 ${accentClass} opacity-40`
                : 'w-1.5 bg-gray-300'
          }`}
        />
      ))}
    </div>
  );
}