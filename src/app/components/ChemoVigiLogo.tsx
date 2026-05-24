import React from 'react';

interface ChemoVigiLogoProps {
  size?: 'small' | 'medium' | 'large';
  showText?: boolean;
  onClick?: () => void;
}

export function ChemoVigiLogo({ size = 'medium', showText = true, onClick }: ChemoVigiLogoProps) {
  const sizeMap = {
    small: 40,
    medium: 56,
    large: 80,
  };
  const px = sizeMap[size];

  return (
    <button
      onClick={onClick}
      className="flex items-center gap-3 hover:opacity-80 transition-opacity cursor-pointer"
    >
      <svg
        width={px}
        height={px}
        viewBox="0 0 56 56"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-label="ChemoVigi Logo"
      >
        <circle cx="28" cy="28" r="28" fill="url(#cvGrad)" />
        {/* molecule bonds */}
        <line x1="28" y1="14" x2="28" y2="42" stroke="white" strokeWidth="2.5" strokeLinecap="round" />
        <line x1="14" y1="28" x2="42" y2="28" stroke="white" strokeWidth="2.5" strokeLinecap="round" />
        <line x1="18" y1="18" x2="38" y2="38" stroke="white" strokeWidth="2" strokeLinecap="round" strokeOpacity="0.6" />
        <line x1="38" y1="18" x2="18" y2="38" stroke="white" strokeWidth="2" strokeLinecap="round" strokeOpacity="0.6" />
        {/* nodes */}
        <circle cx="28" cy="28" r="5" fill="white" />
        <circle cx="28" cy="14" r="3.5" fill="#5eead4" />
        <circle cx="28" cy="42" r="3.5" fill="#5eead4" />
        <circle cx="14" cy="28" r="3.5" fill="#93c5fd" />
        <circle cx="42" cy="28" r="3.5" fill="#93c5fd" />
        <defs>
          <linearGradient id="cvGrad" x1="0" y1="0" x2="56" y2="56" gradientUnits="userSpaceOnUse">
            <stop stopColor="#2563eb" />
            <stop offset="1" stopColor="#0d9488" />
          </linearGradient>
        </defs>
      </svg>
      {showText && (
        <div className="text-left">
          <div className="flex items-baseline gap-0.5">
            <span className="text-blue-600 font-bold text-xl">Chemo</span>
            <span className="text-teal-600 font-bold text-xl">Vigi</span>
          </div>
          <p className="text-xs text-slate-500">Where Innovation Meets Technology</p>
        </div>
      )}
    </button>
  );
}