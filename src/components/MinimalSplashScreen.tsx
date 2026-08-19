import React from 'react';
import { ScreenType, TransitionType } from '../types';

interface MinimalSplashScreenProps {
  navigate: (to: ScreenType, transition?: TransitionType) => void;
}

export const MinimalSplashScreen: React.FC<MinimalSplashScreenProps> = ({ navigate }) => {
  return (
    <div
      id="minimal-splash-screen"
      onClick={() => navigate('dashboard', 'push')}
      className="bg-[#13131b] text-[#e4e1ed] min-h-screen w-full flex flex-col justify-between items-center px-5 py-8 overflow-hidden relative selection:bg-[#c0c1ff]/30 cursor-pointer select-none"
    >
      {/* Background subtle ambient glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120vw] h-[120vw] bg-[#c0c1ff]/5 rounded-full blur-[100px] pointer-events-none animate-pulse"></div>

      <div className="h-16 w-full"></div>

      {/* Center Content */}
      <main className="flex flex-col items-center justify-center flex-1 w-full max-w-sm z-10">
        <div className="w-48 h-48 mb-6 relative rounded-[2rem] overflow-hidden bg-[#1f1f27]/50 backdrop-blur-sm border border-white/5 flex items-center justify-center glow-effect shadow-2xl shadow-[#6366f1]/20">
          <div className="w-28 h-28 rounded-2xl bg-gradient-to-tr from-[#13131b] via-[#1f1f27] to-[#34343d] flex flex-col items-center justify-center border border-[#c0c1ff]/20 relative overflow-hidden">
            {/* Ambient shield logo */}
            <div className="w-16 h-16 rounded-xl bg-[#c0c1ff]/10 flex items-center justify-center border border-[#c0c1ff]/30">
              <span
                className="material-symbols-outlined text-4xl text-[#c0c1ff]"
                style={{ fontVariationSettings: "'FILL' 1" }}
              >
                location_searching
              </span>
            </div>
            <div className="mt-2 text-[10px] font-bold tracking-wider text-[#c0c1ff] uppercase">
              Crowd Computing
            </div>
          </div>
          {/* Subtle scanning line effect over logo */}
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#c0c1ff]/20 to-transparent h-[200%] -top-[100%] scan-line pointer-events-none"></div>
        </div>

        <div className="text-center">
          <h1 className="font-['Manrope'] font-extrabold text-[36px] leading-tight text-[#e4e1ed] mb-2 tracking-tight">
            Wayra
          </h1>
          <p className="font-['Inter'] text-sm text-[#c7c4d7]/80 max-w-[240px] mx-auto uppercase tracking-widest">
            Navigate. Connect. Stay Safe.
          </p>
        </div>

        {/* Loading Indicator */}
        <div className="mt-8 flex gap-2">
          <div className="w-2 h-2 rounded-full bg-[#c0c1ff]/40 animate-bounce"></div>
          <div className="w-2 h-2 rounded-full bg-[#c0c1ff]/60 animate-bounce [animation-delay:0.16s]"></div>
          <div className="w-2 h-2 rounded-full bg-[#c0c1ff]/80 animate-bounce [animation-delay:0.32s]"></div>
        </div>

        <p className="text-xs text-[#c7c4d7]/50 mt-4 tracking-wider">
          Tap anywhere to continue
        </p>
      </main>

      {/* Bottom Branding */}
      <footer className="w-full text-center z-10 mb-4 pb-2">
        <p className="font-['Inter'] text-[11px] text-[#c7c4d7]/60 uppercase tracking-widest">
          Powered by Mahindra University
        </p>
      </footer>
    </div>
  );
};
