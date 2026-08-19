import React, { useState } from 'react';
import { ScreenType, TransitionType } from '../types';
import { TopAppBar } from './TopAppBar';

interface RouteSelectionScreenProps {
  navigate: (to: ScreenType, transition?: TransitionType) => void;
}

export const RouteSelectionScreen: React.FC<RouteSelectionScreenProps> = ({ navigate }) => {
  const [selectedRoute, setSelectedRoute] = useState<'safe' | 'fastest'>('safe');

  return (
    <div
      id="screen-4b60f8a313d14f4fa99cf765c916badb"
      className="antialiased w-full h-screen flex flex-col relative bg-[#13131b] text-[#e4e1ed] overflow-hidden select-none"
    >
      {/* TopAppBar */}
      <TopAppBar onSecurityClick={() => {}} onNotificationClick={() => {}} />

      {/* Map Canvas Area */}
      <main className="absolute inset-0 z-0 w-full h-full pt-16 pb-24 overflow-hidden">
        {/* Tactical Dark Map Background */}
        <div className="absolute inset-0 bg-[#0c0d14] overflow-hidden">
          {/* Simulated Dark Tactical Grid & Roads */}
          <div
            className="absolute inset-0 opacity-40"
            style={{
              backgroundImage: `radial-gradient(circle at 50% 50%, #1f2a44 1px, transparent 1px), linear-gradient(to right, rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.03) 1px, transparent 1px)`,
              backgroundSize: '40px 40px, 80px 80px, 80px 80px',
            }}
          />

          {/* Stadium & Building Footprints */}
          <div className="absolute top-[28%] left-[20%] w-[60%] h-[25%] rounded-3xl border border-[#c0c1ff]/20 bg-[#1a1b28]/60 backdrop-blur-sm shadow-2xl flex items-center justify-center pointer-events-none">
            <div className="text-center">
              <span className="font-['Manrope'] text-[12px] font-bold tracking-widest text-[#c0c1ff]/60 uppercase">
                GMR Arena Complex
              </span>
              <p className="text-[10px] text-[#c7c4d7]/40">Main Concourse Zone B</p>
            </div>
          </div>

          {/* Density Heatmap Blobs */}
          <div className="absolute top-[38%] left-[25%] w-36 h-36 rounded-full bg-orange-500/15 blur-2xl pointer-events-none"></div>
          <div className="absolute top-[48%] left-[55%] w-44 h-44 rounded-full bg-emerald-500/10 blur-2xl pointer-events-none"></div>
          <div className="absolute bottom-[20%] left-[30%] w-48 h-48 rounded-full bg-[#8083ff]/15 blur-3xl pointer-events-none"></div>

          {/* Route Visualizations (SVG Overlay) */}
          <svg
            className="absolute inset-0 w-full h-full pointer-events-none"
            preserveAspectRatio="xMidYMid slice"
            viewBox="0 0 400 800"
          >
            <defs>
              <filter id="glow-purple-route" x="-20%" y="-20%" width="140%" height="140%">
                <feGaussianBlur stdDeviation="4" result="blur" />
                <feComposite in="SourceGraphic" in2="blur" operator="over" />
              </filter>
              <filter id="glow-blue-route" x="-20%" y="-20%" width="140%" height="140%">
                <feGaussianBlur stdDeviation="3" result="blur" />
                <feComposite in="SourceGraphic" in2="blur" operator="over" />
              </filter>
            </defs>

            {/* Secondary Path (Fastest - Blue) */}
            <path
              d="M 150 580 C 110 490, 270 410, 195 270"
              fill="none"
              filter="url(#glow-blue-route)"
              opacity={selectedRoute === 'fastest' ? 0.9 : 0.4}
              stroke="#8083ff"
              strokeDasharray="8 8"
              strokeWidth={selectedRoute === 'fastest' ? 6 : 4}
            />

            {/* Primary Path (AI Recommended - Purple) */}
            <path
              className={selectedRoute === 'safe' ? 'path-animated' : ''}
              d="M 150 580 C 205 530, 145 430, 195 270"
              fill="none"
              filter="url(#glow-purple-route)"
              stroke="#c0c1ff"
              strokeLinecap="round"
              strokeWidth={selectedRoute === 'safe' ? 8 : 4}
              opacity={selectedRoute === 'safe' ? 1 : 0.5}
            />
          </svg>

          {/* Map Markers */}
          {/* Current Location */}
          <div className="absolute" style={{ bottom: '27%', left: '35%' }}>
            <div className="w-6 h-6 bg-[#c0c1ff] rounded-full border-4 border-[#13131b] shadow-lg shadow-[#c0c1ff]/50 relative flex items-center justify-center z-10">
              <div className="absolute inset-0 rounded-full pulse-glow"></div>
              <div className="w-2 h-2 bg-[#13131b] rounded-full"></div>
            </div>
            <div className="bg-[#1f1f27]/90 px-2 py-0.5 rounded text-[10px] text-[#e4e1ed] border border-white/10 mt-1 -ml-3 whitespace-nowrap shadow">
              You are here
            </div>
          </div>

          {/* Destination: Exit B */}
          <div className="absolute" style={{ top: '31%', left: '49%' }}>
            <div className="flex flex-col items-center transform -translate-x-1/2 -translate-y-full">
              <div className="bg-[#292932] px-3 py-1 rounded-full border border-white/10 shadow-lg mb-2 backdrop-blur-md flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping"></span>
                <span className="font-['Inter'] font-bold text-xs text-[#e4e1ed]">
                  GMR Arena - Exit B
                </span>
              </div>
              <div className="w-8 h-8 bg-[#494bd6] rounded-full border-4 border-[#13131b] shadow-xl flex items-center justify-center">
                <span className="material-symbols-outlined text-[16px] text-white">flag</span>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Route Selection Bottom Sheet Overlay */}
      <div className="absolute bottom-24 left-0 w-full z-20 px-5 flex flex-col gap-3">
        {/* Header */}
        <div className="flex justify-between items-end mb-1">
          <h2 className="font-['Manrope'] font-semibold text-lg text-[#e4e1ed]">Select Route</h2>
          <span className="font-['Inter'] text-xs text-[#c0c1ff] flex items-center gap-1 bg-[#c0c1ff]/10 px-2.5 py-1 rounded-full border border-[#c0c1ff]/20">
            <span className="material-symbols-outlined text-[14px]">bolt</span> Live Data Active
          </span>
        </div>

        {/* Option 1: AI Recommended */}
        <div
          id="route-option-safe"
          onClick={() => setSelectedRoute('safe')}
          className={`w-full backdrop-blur-xl rounded-xl p-4 shadow-lg relative overflow-hidden transition-all active:scale-[0.98] cursor-pointer ${
            selectedRoute === 'safe'
              ? 'bg-[#1f1f27]/95 border-2 border-[#c0c1ff]/70 shadow-[#c0c1ff]/10'
              : 'bg-[#1b1b23]/80 border border-white/10 opacity-80'
          }`}
        >
          {selectedRoute === 'safe' && (
            <div className="absolute top-0 left-0 w-1.5 h-full bg-[#c0c1ff]"></div>
          )}
          <div className="flex justify-between items-start mb-2">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-full bg-[#c0c1ff]/20 flex items-center justify-center text-[#c0c1ff]">
                <span className="material-symbols-outlined text-[20px]">format_image_left</span>
              </div>
              <div>
                <div className="font-['Inter'] font-bold text-xs text-[#c0c1ff] flex items-center gap-1">
                  AI RECOMMENDED
                </div>
                <div className="font-['Manrope'] font-semibold text-base text-[#e4e1ed] leading-tight">
                  Safe Exit Path
                </div>
              </div>
            </div>
            <div className="text-right">
              <div className="font-['Manrope'] font-bold text-xl text-[#c0c1ff]">8 min</div>
              <div className="font-['Inter'] text-xs text-[#c7c4d7]">0.4 mi</div>
            </div>
          </div>

          <div className="flex gap-2 mt-2 pl-12">
            <div className="px-2.5 py-0.5 rounded border border-[#c0c1ff]/30 bg-[#c0c1ff]/10 font-['Inter'] text-[11px] font-medium text-[#c0c1ff]">
              Clear Path
            </div>
            <div className="px-2.5 py-0.5 rounded border border-white/10 bg-[#13131b]/60 font-['Inter'] text-[11px] font-medium text-[#c7c4d7]">
              Low Density
            </div>
          </div>
        </div>

        {/* Option 2: Fastest */}
        <div
          id="route-option-fastest"
          onClick={() => setSelectedRoute('fastest')}
          className={`w-full backdrop-blur-xl rounded-xl p-4 shadow-md transition-all active:scale-[0.98] cursor-pointer ${
            selectedRoute === 'fastest'
              ? 'bg-[#1f1f27]/95 border-2 border-[#8083ff]/70 shadow-[#8083ff]/10'
              : 'bg-[#1b1b23]/80 border border-white/5 opacity-80 hover:opacity-100'
          }`}
        >
          <div className="flex justify-between items-start mb-2">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-full bg-[#34343d] flex items-center justify-center text-[#c7c4d7]">
                <span className="material-symbols-outlined text-[20px]">speed</span>
              </div>
              <div>
                <div className="font-['Inter'] font-bold text-xs text-[#c7c4d7]">FASTEST</div>
                <div className="font-['Manrope'] font-semibold text-base text-[#e4e1ed] leading-tight">
                  Fastest Exit
                </div>
              </div>
            </div>
            <div className="text-right">
              <div className="font-['Manrope'] font-bold text-xl text-[#e4e1ed]">6 min</div>
              <div className="font-['Inter'] text-xs text-[#c7c4d7]">0.3 mi</div>
            </div>
          </div>

          <div className="flex gap-2 mt-2 pl-12">
            <div className="px-2.5 py-0.5 rounded border border-[#3f465c] bg-[#3f465c]/40 font-['Inter'] text-[11px] font-medium text-[#bec6e0]">
              Moderate Risk (Dense)
            </div>
          </div>
        </div>

        {/* Primary Action Button */}
        <button
          id="btn-start-navigation"
          onClick={() => navigate('exit-navigation', 'push')}
          className="w-full h-14 bg-[#494bd6] hover:bg-[#3e40be] text-white font-['Manrope'] font-bold text-base rounded-xl shadow-lg shadow-[#494bd6]/30 flex items-center justify-center gap-2 active:scale-95 transition-all mt-1 cursor-pointer"
        >
          <span
            className="material-symbols-outlined text-[20px]"
            style={{ fontVariationSettings: "'FILL' 1" }}
          >
            navigation
          </span>
          Start Navigation
        </button>
      </div>

      {/* BottomNavBar supporting both <a> and <button> wrappers for XPath matches */}
      <nav
        id="bottom-nav-route-screen"
        className="fixed bottom-0 left-0 w-full z-50 flex justify-around items-center px-4 pb-6 pt-2 backdrop-blur-xl rounded-t-xl border-t border-white/10 shadow-lg shadow-[#c0c1ff]/5 bg-[#13131b]/90"
      >
        <a
          id="nav-anchor-home-routescreen"
          href="#home"
          onClick={(e) => {
            e.preventDefault();
            navigate('dashboard', 'none');
          }}
          className="flex flex-col items-center justify-center text-[#c7c4d7] hover:text-[#c0c1ff]/80 active:scale-90 transition-transform duration-200 cursor-pointer"
        >
          <span className="material-symbols-outlined mb-1">home</span>
          <span className="font-['Inter'] text-[11px]">Home</span>
        </a>

        <a
          id="nav-anchor-map-routescreen"
          href="#map"
          className="flex flex-col items-center justify-center text-[#c0c1ff] font-bold active:scale-90 transition-transform duration-200 cursor-pointer"
        >
          <span
            className="material-symbols-outlined mb-1"
            style={{ fontVariationSettings: "'FILL' 1" }}
          >
            map
          </span>
          <span className="font-['Inter'] text-[11px]">Map</span>
        </a>

        <a
          id="nav-anchor-sos-routescreen"
          href="#sos"
          onClick={(e) => {
            e.preventDefault();
            navigate('emergency', 'slide_up');
          }}
          className="flex flex-col items-center justify-center text-[#ffb4ab] hover:text-white active:scale-90 transition-transform duration-200 cursor-pointer"
        >
          <span className="material-symbols-outlined mb-1 text-[#ffb4ab]">emergency</span>
          <span className="font-['Inter'] text-[11px] font-bold">SOS</span>
        </a>

        <a
          id="nav-anchor-alerts-routescreen"
          href="#alerts"
          className="flex flex-col items-center justify-center text-[#c7c4d7] hover:text-[#c0c1ff]/80 active:scale-90 transition-transform duration-200 cursor-pointer"
        >
          <span className="material-symbols-outlined mb-1">notifications</span>
          <span className="font-['Inter'] text-[11px]">Alerts</span>
        </a>

        <a
          id="nav-anchor-profile-routescreen"
          href="#profile"
          className="flex flex-col items-center justify-center text-[#c7c4d7] hover:text-[#c0c1ff]/80 active:scale-90 transition-transform duration-200 cursor-pointer"
        >
          <span className="material-symbols-outlined mb-1">person</span>
          <span className="font-['Inter'] text-[11px]">Profile</span>
        </a>
      </nav>
    </div>
  );
};
