import React, { useState } from 'react';
import { ScreenType, TransitionType } from '../types';
import { TopAppBar } from './TopAppBar';
import concertBg from '../assets/images/concert_crowd_bg_1787140122346.jpg';

interface HomeDashboardScreenProps {
  navigate: (to: ScreenType, transition?: TransitionType) => void;
}

export const HomeDashboardScreen: React.FC<HomeDashboardScreenProps> = ({ navigate }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [activeTab, setActiveTab] = useState<'all' | 'family' | 'firstaid'>('all');

  return (
    <div
      id="screen-home-dashboard"
      className="antialiased min-h-screen flex flex-col relative overflow-x-hidden bg-[#0a0a0f] text-white selection:bg-[#c0c1ff]/30 font-['Inter']"
    >
      {/* Background concert photo backdrop with high-contrast darkening gradient overlay */}
      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
        <img
          src={concertBg}
          alt="Concert Crowd Background"
          referrerPolicy="no-referrer"
          className="w-full h-full object-cover object-center scale-105 filter brightness-75 contrast-110"
        />
        {/* Deep dark gradient overlay to preserve optimal readability for command-center UI */}
        <div
          className="absolute inset-0"
          style={{
            background: `linear-gradient(180deg, rgba(10, 10, 15, 0.72) 0%, rgba(13, 13, 21, 0.82) 45%, rgba(0, 0, 0, 0.94) 100%)`,
          }}
        />
      </div>

      {/* TopAppBar */}
      <TopAppBar onSecurityClick={() => {}} onNotificationClick={() => {}} />

      {/* Main Content Canvas */}
      <main className="flex-1 pt-20 pb-32 px-5 space-y-5 max-w-md mx-auto w-full relative z-10">
        {/* Greeting Section */}
        <section className="space-y-1">
          <p className="font-['Inter'] text-sm text-gray-300">Summer Beats Concert</p>
          <h2 className="font-['Manrope'] font-extrabold text-[28px] leading-tight text-white">
            Hi, Samaira!
            <br />
            <span className="text-[#c0c1ff] font-['Manrope'] text-lg font-normal">
              Enjoy the concert! 🎵
            </span>
          </h2>
        </section>

        {/* Safety Status Card */}
        <section
          id="safety-status-card"
          className="rounded-2xl p-4 glow-moderate relative overflow-hidden bg-[#0f0f14]/90 border border-white/15 backdrop-blur-xl"
        >
          <div className="absolute top-0 right-0 w-32 h-32 bg-[#fbbf24]/10 rounded-full blur-2xl -mr-10 -mt-10 pointer-events-none"></div>
          <div className="flex items-start justify-between mb-1.5">
            <div className="flex items-center space-x-2">
              <span
                className="material-symbols-outlined text-[#fbbf24]"
                style={{ fontVariationSettings: "'FILL' 1" }}
              >
                warning
              </span>
              <h3 className="font-['Inter'] font-bold text-xs text-[#fbbf24] tracking-widest uppercase">
                MODERATE STATUS
              </h3>
            </div>
          </div>
          <p className="font-['Inter'] text-sm text-[#e4e1ed]">
            Everything looks okay. Stay with your group.
          </p>
        </section>

        {/* Search Bar */}
        <section>
          <div className="relative group">
            <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 group-focus-within:text-[#c0c1ff] transition-colors text-[20px]">
              search
            </span>
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search for places, gates, services..."
              className="w-full bg-[#181824] border border-[#464554]/50 rounded-full py-3 pl-12 pr-4 font-['Inter'] text-sm text-white placeholder:text-gray-400 focus:outline-none focus:border-[#c0c1ff] focus:ring-1 focus:ring-[#c0c1ff] transition-all shadow-inner"
            />
          </div>
        </section>

        {/* Quick Shortcuts Grid */}
        <section className="grid grid-cols-2 gap-3.5">
          {/* Event Map */}
          <button
            id="shortcut-btn-event-map"
            onClick={() => navigate('route-selection', 'push')}
            className="rounded-2xl p-4 flex flex-col items-start justify-between h-28 hover:bg-[#34343d]/60 transition-all active:scale-95 group bg-[#0f0f14]/85 border border-white/15 backdrop-blur-xl shadow-lg cursor-pointer text-left"
          >
            <div className="w-10 h-10 rounded-full bg-[#8083ff]/20 flex items-center justify-center mb-1 group-hover:bg-[#8083ff]/30 transition-colors">
              <span className="material-symbols-outlined text-[#c0c1ff]">map</span>
            </div>
            <span className="font-['Manrope'] font-semibold text-lg text-white leading-tight">
              Event
              <br />
              Map
            </span>
          </button>

          {/* Pre-Check-In */}
          <button
            id="shortcut-btn-precheckin"
            onClick={() => navigate('pre-checkin', 'push')}
            className="rounded-2xl p-4 flex flex-col items-start justify-between h-28 hover:bg-[#34343d]/60 transition-all active:scale-95 group bg-[#0f0f14]/85 border border-white/15 backdrop-blur-xl shadow-lg cursor-pointer text-left"
          >
            <div className="w-10 h-10 rounded-full bg-[#3f465c]/30 flex items-center justify-center mb-1 group-hover:bg-[#3f465c]/50 transition-colors">
              <span className="material-symbols-outlined text-[#bec6e0]">fact_check</span>
            </div>
            <span className="font-['Manrope'] font-semibold text-lg text-white leading-tight">
              Pre-
              <br />
              Check-In
            </span>
          </button>

          {/* My People */}
          <button
            id="shortcut-btn-people"
            onClick={() => setActiveTab('family')}
            className="rounded-2xl p-4 flex flex-col items-start justify-between h-28 hover:bg-[#34343d]/60 transition-all active:scale-95 group bg-[#0f0f14]/85 border border-white/15 backdrop-blur-xl shadow-lg cursor-pointer text-left"
          >
            <div className="w-10 h-10 rounded-full bg-[#8691a7]/20 flex items-center justify-center mb-1 group-hover:bg-[#8691a7]/30 transition-colors">
              <span className="material-symbols-outlined text-[#bcc7de]">group</span>
            </div>
            <span className="font-['Manrope'] font-semibold text-lg text-white leading-tight">
              My
              <br />
              People
            </span>
          </button>

          {/* First Aid */}
          <button
            id="shortcut-btn-firstaid"
            onClick={() => navigate('emergency', 'slide_up')}
            className="rounded-2xl p-4 flex flex-col items-start justify-between h-28 hover:bg-[#34343d]/60 transition-all active:scale-95 group bg-[#0f0f14]/85 border border-white/15 backdrop-blur-xl shadow-lg cursor-pointer text-left"
          >
            <div className="w-10 h-10 rounded-full bg-[#93000a]/25 flex items-center justify-center mb-1 group-hover:bg-[#93000a]/40 transition-colors">
              <span className="material-symbols-outlined text-[#ffb4ab]">medical_services</span>
            </div>
            <span className="font-['Manrope'] font-semibold text-lg text-white leading-tight">
              First
              <br />
              Aid
            </span>
          </button>
        </section>

        {/* AI Insight Banner */}
        <section
          id="banner-ai-insight"
          onClick={() => navigate('route-selection', 'push')}
          className="bg-[#0a0a0a] border border-[#464554]/40 rounded-2xl p-4 flex items-start space-x-3 relative overflow-hidden active:scale-95 transition-transform cursor-pointer shadow-md"
        >
          <div className="absolute left-0 top-0 bottom-0 w-1.5 bg-[#c0c1ff]"></div>
          <span className="material-symbols-outlined text-[#c0c1ff] mt-0.5 text-2xl">
            smart_toy
          </span>
          <div>
            <h4 className="font-['Inter'] font-bold text-xs text-white uppercase tracking-wider mb-0.5">
              AI INSIGHT
            </h4>
            <p className="font-['Inter'] text-sm text-gray-300">
              Gate 2 is crowded. Use Gate 3 for faster entry.
            </p>
          </div>
        </section>

        {/* 4 Feature Context Cards */}
        <section className="grid grid-cols-2 gap-3.5">
          {/* Find Route */}
          <button
            id="btn-action-find-route"
            onClick={() => navigate('exit-navigation', 'push')}
            className="bg-[#1b1b23]/90 border border-white/10 rounded-2xl p-4 flex flex-col items-start space-y-2 active:scale-95 transition-transform text-left cursor-pointer hover:border-[#c0c1ff]/40 shadow"
          >
            <div className="w-10 h-10 rounded-full bg-[#c0c1ff]/20 flex items-center justify-center">
              <span className="material-symbols-outlined text-[#c0c1ff]">map</span>
            </div>
            <div>
              <h4 className="font-['Manrope'] font-bold text-sm text-white">Find Route</h4>
              <p className="font-['Inter'] text-xs text-[#c7c4d7] mt-0.5">
                Safest path to your destination
              </p>
            </div>
          </button>

          {/* Add Family */}
          <button
            id="btn-action-add-family"
            onClick={() => setActiveTab('family')}
            className="bg-[#1b1b23]/90 border border-white/10 rounded-2xl p-4 flex flex-col items-start space-y-2 active:scale-95 transition-transform text-left cursor-pointer hover:border-emerald-400/40 shadow"
          >
            <div className="w-10 h-10 rounded-full bg-emerald-500/20 flex items-center justify-center">
              <span className="material-symbols-outlined text-emerald-400">person_add</span>
            </div>
            <div>
              <h4 className="font-['Manrope'] font-bold text-sm text-white">Add Family</h4>
              <p className="font-['Inter'] text-xs text-[#c7c4d7] mt-0.5">
                Stay connected with your group
              </p>
            </div>
          </button>

          {/* Get Help */}
          <button
            id="btn-action-get-help"
            onClick={() => navigate('emergency', 'slide_up')}
            className="bg-[#1b1b23]/90 border border-white/10 rounded-2xl p-4 flex flex-col items-start space-y-2 active:scale-95 transition-transform text-left cursor-pointer hover:border-red-500/40 shadow"
          >
            <div className="w-10 h-10 rounded-full bg-red-500/20 flex items-center justify-center">
              <span className="material-symbols-outlined text-[#ffb4ab]">emergency</span>
            </div>
            <div>
              <h4 className="font-['Manrope'] font-bold text-sm text-white">Get Help</h4>
              <p className="font-['Inter'] text-xs text-[#c7c4d7] mt-0.5">
                Rapid emergency assistance
              </p>
            </div>
          </button>

          {/* Nearby */}
          <button
            id="btn-action-nearby"
            onClick={() => navigate('route-selection', 'push')}
            className="bg-[#1b1b23]/90 border border-white/10 rounded-2xl p-4 flex flex-col items-start space-y-2 active:scale-95 transition-transform text-left cursor-pointer hover:border-blue-400/40 shadow"
          >
            <div className="w-10 h-10 rounded-full bg-blue-500/20 flex items-center justify-center">
              <span className="material-symbols-outlined text-blue-400">location_on</span>
            </div>
            <div>
              <h4 className="font-['Manrope'] font-bold text-sm text-white">Nearby</h4>
              <p className="font-['Inter'] text-xs text-[#c7c4d7] mt-0.5">
                Food, water, and medical aid
              </p>
            </div>
          </button>
        </section>
      </main>

      {/* BottomNavBar */}
      <nav
        id="bottom-nav-dashboard"
        className="fixed bottom-0 left-0 w-full z-50 flex justify-around items-center px-4 pb-6 pt-2 bg-[#000000]/95 backdrop-blur-xl rounded-t-2xl border-t border-white/10 shadow-lg shadow-[#c0c1ff]/5"
      >
        <button
          id="btn-nav-home-dash"
          onClick={() => {}}
          className="flex flex-col items-center justify-center text-[#c0c1ff] font-bold active:scale-90 transition-transform duration-200 cursor-pointer"
        >
          <span
            className="material-symbols-outlined mb-1"
            style={{ fontVariationSettings: "'FILL' 1" }}
          >
            home
          </span>
          <span className="font-['Inter'] text-[11px]">Home</span>
          <div className="w-1 h-1 bg-[#c0c1ff] rounded-full mt-1"></div>
        </button>

        <button
          id="btn-nav-map-dash"
          onClick={() => navigate('route-selection', 'push')}
          className="flex flex-col items-center justify-center text-gray-300 hover:text-[#c0c1ff]/80 active:scale-90 transition-transform duration-200 cursor-pointer"
        >
          <span className="material-symbols-outlined mb-1">map</span>
          <span className="font-['Inter'] text-[11px]">Map</span>
        </button>

        {/* Space for absolute SOS button */}
        <div className="w-16"></div>

        <button
          id="btn-nav-alerts-dash"
          className="flex flex-col items-center justify-center text-gray-300 hover:text-[#c0c1ff]/80 active:scale-90 transition-transform duration-200 cursor-pointer"
        >
          <span className="material-symbols-outlined mb-1">notifications</span>
          <span className="font-['Inter'] text-[11px]">Alerts</span>
        </button>

        <button
          id="btn-nav-profile-dash"
          className="flex flex-col items-center justify-center text-gray-300 hover:text-[#c0c1ff]/80 active:scale-90 transition-transform duration-200 cursor-pointer"
        >
          <span className="material-symbols-outlined mb-1">person</span>
          <span className="font-['Inter'] text-[11px]">Profile</span>
        </button>
      </nav>

      {/* Central SOS Button */}
      <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-[60] flex flex-col items-center">
        <button
          id="btn-nav-sos-dash"
          onClick={() => navigate('emergency', 'slide_up')}
          aria-label="Emergency"
          className="w-16 h-16 rounded-full bg-gradient-to-br from-red-500 to-red-700 text-white flex items-center justify-center shadow-lg shadow-red-600/40 sos-pulse active:scale-90 transition-transform cursor-pointer border-2 border-white/20"
        >
          <span
            className="material-symbols-outlined text-3xl"
            style={{ fontVariationSettings: "'FILL' 1" }}
          >
            emergency
          </span>
        </button>
        <span className="font-['Inter'] text-[11px] text-white mt-1 font-bold">SOS</span>
      </div>
    </div>
  );
};
