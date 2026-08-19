import React, { useState } from 'react';
import { ScreenType, TransitionType } from '../types';
import { TopAppBar } from './TopAppBar';

interface EmergencyScreenProps {
  navigate: (to: ScreenType, transition?: TransitionType) => void;
}

export const EmergencyScreen: React.FC<EmergencyScreenProps> = ({ navigate }) => {
  const [selectedIncident, setSelectedIncident] = useState<string | null>(null);
  const [alertSent, setAlertSent] = useState(false);

  const emergencyOptions = [
    { id: 'medical', label: 'Medical', icon: 'medical_services' },
    { id: 'fire', label: 'Fire', icon: 'local_fire_department' },
    { id: 'crowd', label: 'Crowd Surge', icon: 'groups' },
    { id: 'security', label: 'Security', icon: 'admin_panel_settings' },
    { id: 'missing', label: 'Missing Person', icon: 'person_search' },
    { id: 'other', label: 'Other', icon: 'more_horiz', isOther: true },
  ];

  const handleSelect = (id: string) => {
    setSelectedIncident(id);
    setAlertSent(true);
  };

  return (
    <div
      id="screen-emergency-center"
      className="bg-[#13131b] text-[#e4e1ed] min-h-screen flex flex-col pb-[110px] md:pb-0 font-['Inter'] relative selection:bg-red-500/30"
      style={{
        background: 'radial-gradient(circle at center, #2a0002 0%, #13131b 100%)',
      }}
    >
      {/* Top App Bar */}
      <TopAppBar isEmergency={true} onSecurityClick={() => {}} onNotificationClick={() => {}} />

      {/* Top desktop nav bar if wider view */}
      <nav className="hidden md:flex fixed top-0 right-0 h-16 items-center px-6 gap-4 z-50">
        <button
          id="btn-desktop-home-emergency"
          onClick={() => navigate('dashboard', 'push_back')}
          className="text-[#c7c4d7] hover:text-[#c0c1ff] transition-colors flex items-center gap-2 cursor-pointer"
        >
          <span className="material-symbols-outlined">home</span>
          <span className="font-['Inter'] font-bold text-xs">Home</span>
        </button>
        <button
          id="btn-desktop-map-emergency"
          onClick={() => navigate('route-selection', 'push')}
          className="text-[#c7c4d7] hover:text-[#c0c1ff] transition-colors flex items-center gap-2 cursor-pointer"
        >
          <span className="material-symbols-outlined">map</span>
          <span className="font-['Inter'] font-bold text-xs">Map</span>
        </button>
        <button
          id="btn-desktop-sos-emergency"
          className="text-[#ffb4ab] font-bold flex items-center gap-2 border-b-2 border-[#ffb4ab] pb-1 cursor-pointer"
        >
          <span
            className="material-symbols-outlined"
            style={{ fontVariationSettings: "'FILL' 1" }}
          >
            emergency
          </span>
          <span className="font-['Inter'] font-bold text-xs">SOS</span>
        </button>
      </nav>

      {/* Main Content */}
      <main className="flex-1 mt-16 px-5 pt-6 pb-8 flex flex-col gap-6 max-w-2xl mx-auto w-full">
        {/* Header Message */}
        <div className="text-center space-y-2">
          <h2 className="font-['Manrope'] font-extrabold text-[28px] text-[#ffb4ab] leading-tight tracking-tight">
            Emergency Support
          </h2>
          <p className="font-['Inter'] text-sm md:text-base text-[#c7c4d7] max-w-md mx-auto">
            Tap the most relevant option for immediate assistance. Help will be dispatched to your
            location.
          </p>
        </div>

        {alertSent && (
          <div className="bg-red-500/20 border border-red-500/50 rounded-2xl p-4 text-center animate-pulse">
            <div className="flex items-center justify-center gap-2 text-white font-bold text-sm">
              <span className="material-symbols-outlined text-[#ffb4ab]">notifications_active</span>
              Incident Dispatched! Security & Medical teams are routing to your GPS coordinates.
            </div>
          </div>
        )}

        {/* 2x3 Grid of Emergency Cards */}
        <div className="grid grid-cols-2 gap-4 flex-1">
          {emergencyOptions.map((opt) => {
            const isSelected = selectedIncident === opt.id;
            return (
              <button
                key={opt.id}
                id={`btn-emergency-${opt.id}`}
                onClick={() => handleSelect(opt.id)}
                className={`backdrop-blur-md rounded-2xl p-6 flex flex-col items-center justify-center gap-2 active:scale-95 transition-all shadow-[inset_0_1px_1px_rgba(255,255,255,0.05)] cursor-pointer min-h-[120px] ${
                  opt.isOther
                    ? 'bg-[#34343d]/30 border border-[#464554]/30 hover:bg-[#34343d]/50'
                    : isSelected
                    ? 'bg-[#93000a]/50 border-2 border-[#ffb4ab] shadow-[0_0_25px_rgba(255,180,171,0.5)]'
                    : 'bg-[#93000a]/15 border border-[#ffb4ab]/25 hover:bg-[#93000a]/30'
                }`}
              >
                <span
                  className={`material-symbols-outlined text-[46px] ${
                    opt.isOther ? 'text-[#c7c4d7]' : 'text-[#ffb4ab]'
                  }`}
                  style={{ fontVariationSettings: "'FILL' 1" }}
                >
                  {opt.icon}
                </span>
                <span
                  className={`font-['Manrope'] font-semibold text-base text-center ${
                    opt.isOther ? 'text-[#e4e1ed]' : 'text-[#ffdad6]'
                  }`}
                >
                  {opt.label}
                </span>
              </button>
            );
          })}
        </div>

        {/* Mobile top quick home shortcut if needed */}
        <div className="flex justify-center md:hidden">
          <button
            id="btn-subtle-home"
            onClick={() => navigate('dashboard', 'push_back')}
            className="flex items-center gap-1.5 text-xs text-[#c7c4d7]/70 hover:text-white py-1 px-3 rounded-full bg-white/5 cursor-pointer"
          >
            <span className="material-symbols-outlined text-[16px]">home</span>
            <span>Return to Home Dashboard</span>
          </button>
        </div>
      </main>

      {/* Bottom Persistent Button */}
      <div className="fixed bottom-0 left-0 w-full z-50 p-5 bg-[#13131b]/95 backdrop-blur-xl border-t border-white/10">
        <button
          id="btn-i-am-safe"
          onClick={() => navigate('dashboard', 'push_back')}
          className="w-full max-w-md mx-auto bg-[#c0c1ff] hover:bg-[#c0c1ff]/90 text-[#1000a9] font-['Manrope'] font-bold text-base py-3.5 rounded-xl active:scale-95 transition-transform flex items-center justify-center gap-2 shadow-[0_0_20px_rgba(192,193,255,0.3)] cursor-pointer"
        >
          <span
            className="material-symbols-outlined text-[20px]"
            style={{ fontVariationSettings: "'FILL' 1" }}
          >
            check_circle
          </span>
          I am safe
        </button>
      </div>
    </div>
  );
};
