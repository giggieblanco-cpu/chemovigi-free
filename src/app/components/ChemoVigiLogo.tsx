import React from 'react';

interface ChemoVigiLogoProps {
  size?: 'small' | 'medium' | 'large';
  showText?: boolean;
  onClick?: () => void;
}

const svgSizes = {
  small: 40,
  medium: 56,
  large: 80,
};

function LogoMark({ size }: { size: 'small' | 'medium' | 'large' }) {
  const px = svgSizes[size];
  return (
    <svg
      width={px}
      height={px}
      viewBox="0 0 40 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-label="ChemoVigi Logo"
    >
      <path
        d="M14 5h12v13l7 15H7L14 18V5z"
        fill="#2563eb"
        fillOpacity="0.12"
        stroke="#2563eb"
        strokeWidth="2"
        strokeLinejoin="round"
      />
      <line x1="12" y1="5" x2="28" y2="5" stroke="#2563eb" strokeWidth="2.5" strokeLinecap="round" />
      <circle cx="17" cy="26" r="2.5" fill="#0d9488" />
      <circle cx="24" cy="22" r="1.8" fill="#2563eb" />
      <circle cx="21" cy="29" r="1.2" fill="#0d9488" opacity="0.7" />
    </svg>
  );
}

export function ChemoVigiLogo({ size = 'medium', showText = true, onClick }: ChemoVigiLogoProps) {
  return (
    <button
      onClick={onClick}
      className="flex items-center gap-3 hover:opacity-80 transition-opacity cursor-pointer"
    >
      <LogoMark size={size} />
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