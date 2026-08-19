import React from 'react';
import { ScreenType, TransitionType } from '../types';

interface SplashScreenProps {
  navigate: (to: ScreenType, transition?: TransitionType) => void;
}

export const SplashScreen: React.FC<SplashScreenProps> = ({ navigate }) => {
  return (
    <div
      id="full-splash-screen"
      onClick={() => navigate('dashboard', 'push')}
      className="bg-[#13131b] text-[#e4e1ed] min-h-screen w-full flex flex-col justify-between items-center px-5 py-8 overflow-hidden relative selection:bg-[#c0c1ff]/30 cursor-pointer"
    >
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120vw] h-[120vw] bg-[#c0c1ff]/5 rounded-full blur-[100px] pointer-events-none animate-pulse"></div>

      <div className="h-16 w-full"></div>

      <main className="flex flex-col items-center justify-center flex-1 w-full max-w-sm z-10">
        <div className="w-48 h-48 mb-6 relative glow-effect rounded-[2rem] overflow-hidden bg-[#1f1f27]/70 backdrop-blur-md border border-white/10 flex flex-col items-center justify-center shadow-2xl">
          <div className="w-20 h-20 rounded-2xl bg-gradient-to-tr from-[#6366f1]/20 to-[#c0c1ff]/20 border border-[#c0c1ff]/40 flex items-center justify-center shadow-inner">
            <span
              className="material-symbols-outlined text-[44px] text-[#c0c1ff]"
              style={{ fontVariationSettings: "'FILL' 1" }}
            >
              travel_explore
            </span>
          </div>
          <div className="mt-3 text-center">
            <span className="text-[12px] font-extrabold tracking-widest text-[#c0c1ff] uppercase">
              Crowd Computing
            </span>
          </div>
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#c0c1ff]/20 to-transparent h-[200%] -top-[100%] scan-line pointer-events-none"></div>
        </div>

        <div className="text-center">
          <h1 className="font-['Manrope'] font-extrabold text-[36px] text-[#e4e1ed] mb-2 tracking-tight">
            Wayra
          </h1>
          <p className="font-['Inter'] text-base text-[#c7c4d7] max-w-[240px] mx-auto opacity-90">
            Navigate. Connect. Stay Safe.
          </p>
        </div>

        <div className="mt-8 flex gap-2">
          <div className="w-1.5 h-1.5 rounded-full bg-[#c0c1ff]/40 animate-bounce"></div>
          <div className="w-1.5 h-1.5 rounded-full bg-[#c0c1ff]/60 animate-bounce [animation-delay:0.16s]"></div>
          <div className="w-1.5 h-1.5 rounded-full bg-[#c0c1ff]/80 animate-bounce [animation-delay:0.32s]"></div>
        </div>
      </main>

      <footer className="w-full text-center z-10 mb-4 pb-2">
        <p className="font-['Inter'] text-[11px] text-[#c7c4d7]/60 uppercase tracking-widest">
          Powered by Mahindra University
        </p>
      </footer>
    </div>
  );
};
