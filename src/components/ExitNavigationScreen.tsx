import React, { useState, useEffect } from 'react';
import { ScreenType, TransitionType } from '../types';
import { TopAppBar } from './TopAppBar';

interface ExitNavigationScreenProps {
  navigate: (to: ScreenType, transition?: TransitionType) => void;
}

export const ExitNavigationScreen: React.FC<ExitNavigationScreenProps> = ({ navigate }) => {
  const [distance, setDistance] = useState(380);
  const [etaSeconds, setEtaSeconds] = useState(240);
  const [currentStep, setCurrentStep] = useState(0);

  const steps = [
    {
      instruction: 'Head North towards Concourse West Corridor',
      subtext: 'Follow illuminated floor markers • Clear path',
      icon: 'straight',
      distanceRemaining: '45m',
    },
    {
      instruction: 'Turn Left into Exit Ramp B3',
      subtext: 'Security personnel stationed ahead • Low crowd density',
      icon: 'turn_left',
      distanceRemaining: '120m',
    },
    {
      instruction: 'Continue straight to Arena Exit Gate B',
      subtext: 'Main gates fully open • Direct access to transit hub',
      icon: 'arrow_upward',
      distanceRemaining: '215m',
    },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setDistance((prev) => (prev > 20 ? prev - 2 : 20));
      setEtaSeconds((prev) => (prev > 10 ? prev - 1 : 10));
    }, 1200);
    return () => clearInterval(timer);
  }, []);

  const formatEta = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs < 10 ? '0' : ''}${secs}`;
  };

  return (
    <div
      id="screen-exit-navigation"
      className="antialiased w-full h-screen flex flex-col relative bg-[#13131b] text-[#e4e1ed] overflow-hidden select-none"
    >
      <TopAppBar
        title="EXIT NAVIGATION"
        onSecurityClick={() => {}}
        onNotificationClick={() => {}}
      />

      {/* Main Navigation Workspace */}
      <main className="flex-1 pt-16 pb-24 flex flex-col relative overflow-hidden">
        {/* Navigation Banner / Turn Instruction */}
        <div className="z-20 px-4 pt-3">
          <div className="bg-[#1f1f27]/95 backdrop-blur-xl border border-[#c0c1ff]/30 rounded-2xl p-4 shadow-xl shadow-black/50">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl bg-[#494bd6] flex items-center justify-center text-white shadow-lg shadow-[#494bd6]/30 flex-shrink-0 animate-pulse">
                <span className="material-symbols-outlined text-[32px]">
                  {steps[currentStep].icon}
                </span>
              </div>
              <div className="flex-1">
                <div className="flex items-center justify-between">
                  <span className="font-['Inter'] font-bold text-xs text-[#c0c1ff] tracking-wider uppercase flex items-center gap-1">
                    <span className="w-2 h-2 rounded-full bg-emerald-400"></span> Live AI Direction
                  </span>
                  <span className="font-['Manrope'] font-extrabold text-sm text-[#e4e1ed]">
                    {steps[currentStep].distanceRemaining}
                  </span>
                </div>
                <h3 className="font-['Manrope'] font-bold text-base text-[#e4e1ed] mt-0.5 leading-snug">
                  {steps[currentStep].instruction}
                </h3>
                <p className="font-['Inter'] text-xs text-[#c7c4d7] mt-1">
                  {steps[currentStep].subtext}
                </p>
              </div>
            </div>

            {/* Step Selector pills */}
            <div className="flex gap-1.5 mt-3 pt-2 border-t border-white/10">
              {steps.map((step, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrentStep(idx)}
                  className={`flex-1 py-1 px-2 rounded-lg text-[11px] font-['Inter'] font-medium transition-all ${
                    currentStep === idx
                      ? 'bg-[#c0c1ff]/20 text-[#c0c1ff] border border-[#c0c1ff]/40 font-bold'
                      : 'bg-[#13131b]/60 text-[#c7c4d7]/70 hover:text-[#e4e1ed]'
                  }`}
                >
                  Step {idx + 1}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Tactical Map View Canvas */}
        <div className="flex-1 relative overflow-hidden my-2 mx-4 rounded-2xl border border-white/10 bg-[#0c0d14]">
          {/* Grid Background */}
          <div
            className="absolute inset-0 opacity-40"
            style={{
              backgroundImage: `radial-gradient(circle at 50% 50%, #292932 1px, transparent 1px), linear-gradient(to right, rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.03) 1px, transparent 1px)`,
              backgroundSize: '30px 30px, 60px 60px, 60px 60px',
            }}
          />

          {/* Real-time Compass Widget */}
          <div className="absolute top-3 right-3 bg-[#1f1f27]/80 backdrop-blur-md border border-white/10 rounded-full w-10 h-10 flex items-center justify-center shadow-lg z-10">
            <span className="font-['Manrope'] font-bold text-xs text-[#c0c1ff]">N 32°</span>
          </div>

          {/* Crowd Velocity Badge */}
          <div className="absolute top-3 left-3 bg-[#13131b]/80 backdrop-blur-md border border-emerald-500/30 px-3 py-1 rounded-full flex items-center gap-1.5 shadow z-10">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping"></span>
            <span className="font-['Inter'] text-[11px] font-semibold text-emerald-300">
              Low Density: 1.4 m/s Flow
            </span>
          </div>

          {/* SVG Route Corridor */}
          <svg className="absolute inset-0 w-full h-full" viewBox="0 0 360 400">
            <defs>
              <filter id="nav-glow" x="-20%" y="-20%" width="140%" height="140%">
                <feGaussianBlur stdDeviation="3" result="blur" />
                <feComposite in="SourceGraphic" in2="blur" operator="over" />
              </filter>
            </defs>

            {/* Arena Corridor Boundary lines */}
            <path
              d="M 120 360 L 150 250 L 110 180 L 180 80"
              fill="none"
              stroke="#8083ff"
              strokeWidth="24"
              strokeOpacity="0.15"
              strokeLinecap="round"
              strokeLinejoin="round"
            />

            {/* Active Guided Navigation Path */}
            <path
              className="path-animated"
              d="M 120 360 L 150 250 L 110 180 L 180 80"
              fill="none"
              stroke="#c0c1ff"
              strokeWidth="6"
              filter="url(#nav-glow)"
              strokeLinecap="round"
              strokeLinejoin="round"
            />

            {/* Exit Gateway Marker */}
            <circle cx="180" cy="80" r="14" fill="#494bd6" stroke="#c0c1ff" strokeWidth="2" />
          </svg>

          {/* Exit B destination label */}
          <div className="absolute top-[15%] left-[45%] bg-[#292932] border border-white/20 px-2.5 py-1 rounded-full text-[11px] font-bold text-white shadow-lg flex items-center gap-1">
            <span className="material-symbols-outlined text-[14px] text-[#c0c1ff]">flag</span>
            GMR Arena Exit B
          </div>

          {/* Dynamic Moving User Beacon */}
          <div className="absolute bottom-[18%] left-[30%] flex flex-col items-center">
            <div className="w-8 h-8 rounded-full bg-[#c0c1ff] border-4 border-[#13131b] shadow-xl shadow-[#c0c1ff]/60 relative flex items-center justify-center">
              <div className="absolute inset-0 rounded-full pulse-glow"></div>
              <span className="material-symbols-outlined text-[16px] text-[#13131b]">
                navigation
              </span>
            </div>
            <span className="text-[10px] font-bold text-[#c0c1ff] bg-[#13131b]/90 px-1.5 py-0.5 rounded mt-1 border border-white/10">
              Moving • 4.2 km/h
            </span>
          </div>
        </div>

        {/* Navigation Bottom Dashboard Controls */}
        <div className="z-20 px-4 pb-2">
          <div className="bg-[#1f1f27]/90 backdrop-blur-xl border border-white/10 rounded-xl p-3.5 flex items-center justify-between shadow-lg">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-[#34343d] flex items-center justify-center text-[#c0c1ff]">
                <span className="material-symbols-outlined text-[24px]">timer</span>
              </div>
              <div>
                <div className="font-['Manrope'] font-extrabold text-lg text-[#e4e1ed] leading-none">
                  {formatEta(etaSeconds)}
                </div>
                <div className="font-['Inter'] text-xs text-[#c7c4d7] mt-0.5">
                  {distance}m • Exit B
                </div>
              </div>
            </div>

            <div className="flex gap-2">
              <button
                onClick={() => navigate('route-selection', 'push_back')}
                className="px-3 py-2 rounded-lg bg-[#34343d] hover:bg-[#3f465c] text-xs font-['Inter'] font-semibold text-[#e4e1ed] transition-colors cursor-pointer"
              >
                Reroute
              </button>
              <button
                onClick={() => navigate('dashboard', 'push_back')}
                className="px-3.5 py-2 rounded-lg bg-[#ef4444]/20 hover:bg-[#ef4444]/30 border border-[#ef4444]/40 text-xs font-['Inter'] font-semibold text-[#ffb4ab] transition-colors cursor-pointer"
              >
                End Route
              </button>
            </div>
          </div>
        </div>
      </main>

      {/* Bottom Navigation with button elements for XPath compliance */}
      <nav
        id="bottom-nav-exit-navigation"
        className="fixed bottom-0 left-0 w-full z-50 flex justify-around items-center px-4 pb-6 pt-2 backdrop-blur-xl rounded-t-xl border-t border-white/10 shadow-lg shadow-[#c0c1ff]/5 bg-[#13131b]/90"
      >
        <button
          id="btn-home-exitnav"
          onClick={() => navigate('dashboard', 'push_back')}
          className="flex flex-col items-center justify-center text-[#c7c4d7] hover:text-[#c0c1ff]/80 active:scale-90 transition-transform duration-200 cursor-pointer"
        >
          <span className="material-symbols-outlined mb-1">home</span>
          <span className="font-['Inter'] text-[11px]">Home</span>
        </button>

        <button
          id="btn-map-exitnav"
          onClick={() => navigate('route-selection', 'push_back')}
          className="flex flex-col items-center justify-center text-[#c0c1ff] font-bold active:scale-90 transition-transform duration-200 cursor-pointer"
        >
          <span
            className="material-symbols-outlined mb-1"
            style={{ fontVariationSettings: "'FILL' 1" }}
          >
            map
          </span>
          <span className="font-['Inter'] text-[11px]">Map</span>
        </button>

        <button
          id="btn-emergency-exitnav"
          onClick={() => navigate('emergency', 'slide_up')}
          className="flex flex-col items-center justify-center text-[#ffb4ab] hover:text-white active:scale-90 transition-transform duration-200 cursor-pointer"
        >
          <span className="material-symbols-outlined mb-1 text-[#ffb4ab]">emergency</span>
          <span className="font-['Inter'] text-[11px] font-bold">SOS</span>
        </button>

        <button
          id="btn-alerts-exitnav"
          className="flex flex-col items-center justify-center text-[#c7c4d7] hover:text-[#c0c1ff]/80 active:scale-90 transition-transform duration-200 cursor-pointer"
        >
          <span className="material-symbols-outlined mb-1">notifications</span>
          <span className="font-['Inter'] text-[11px]">Alerts</span>
        </button>

        <button
          id="btn-profile-exitnav"
          className="flex flex-col items-center justify-center text-[#c7c4d7] hover:text-[#c0c1ff]/80 active:scale-90 transition-transform duration-200 cursor-pointer"
        >
          <span className="material-symbols-outlined mb-1">person</span>
          <span className="font-['Inter'] text-[11px]">Profile</span>
        </button>
      </nav>
    </div>
  );
};
