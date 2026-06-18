import React from 'react';
import patternSlices from '../assets/pattern_avocado_slices.png';
import patternLeaves from '../assets/pattern_avocado_leaves.png';
import patternOil from '../assets/pattern_avocado_oil.png';

export default function Separator({ bgPattern = 'slices', message = '' }) {
  const getPatternImage = () => {
    switch (bgPattern) {
      case 'slices':
        return patternSlices;
      case 'leaves':
        return patternLeaves;
      case 'minimal':
      case 'oil':
        return patternOil;
      default:
        return patternSlices;
    }
  };

  return (
    <div className="relative w-full h-24 md:h-28 flex items-center justify-center overflow-hidden border-y border-black/5">
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${getPatternImage()})` }}
      />
      <div className="absolute inset-0 bg-black/10" />
      <div className="relative z-10 text-center px-4 w-full max-w-4xl">
        <h2 className="text-xl sm:text-2xl md:text-3.5xl font-display font-black tracking-widest text-white uppercase drop-shadow-[0_2px_4px_rgba(0,0,0,0.5)] select-none">
          {message}
        </h2>
      </div>
    </div>
  );
}
