import React, { useState } from 'react';
import { ScreenType, TransitionType } from '../types';
import { TopAppBar } from './TopAppBar';

interface PreCheckInScreenProps {
  navigate: (to: ScreenType, transition?: TransitionType) => void;
}

export const PreCheckInScreen: React.FC<PreCheckInScreenProps> = ({ navigate }) => {
  const [healthAgreed, setHealthAgreed] = useState(true);
  const [walletSaved, setWalletSaved] = useState(false);

  return (
    <div
      id="screen-pre-checkin"
      className="bg-[#13131b] text-[#e4e1ed] font-['Inter'] antialiased min-h-screen flex flex-col pb-[90px] pt-[64px] relative selection:bg-[#c0c1ff]/30"
    >
      <TopAppBar onSecurityClick={() => {}} onNotificationClick={() => {}} />

      {/* Main Content */}
      <main className="flex-1 px-5 flex flex-col gap-5 mt-4 max-w-md mx-auto w-full">
        {/* Header Section */}
        <div className="flex flex-col gap-1">
          <div className="flex items-center justify-between">
            <h2 className="font-['Manrope'] font-bold text-2xl text-[#e4e1ed]">Pre-Check-In</h2>
            <div className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#c0c1ff]/10 border border-[#c0c1ff]/20 glow-primary">
              <span
                className="material-symbols-outlined text-[#c0c1ff] text-[16px]"
                style={{ fontVariationSettings: "'FILL' 1" }}
              >
                verified_user
              </span>
              <span className="font-['Inter'] font-bold text-[12px] text-[#c0c1ff] uppercase tracking-wider">
                ID Verified
              </span>
            </div>
          </div>
          <p className="font-['Inter'] text-sm text-[#c7c4d7]">
            Prepare your digital pass for frictionless entry.
          </p>
        </div>

        {/* Event Card */}
        <div className="bg-[#1b1b23] rounded-xl border border-white/5 p-4 flex items-center gap-4 shadow-md">
          <div className="w-16 h-16 rounded-lg bg-[#34343d] overflow-hidden relative flex-shrink-0 flex items-center justify-center bg-gradient-to-tr from-indigo-900 via-purple-900 to-slate-900 border border-white/10">
            <span
              className="material-symbols-outlined text-3xl text-[#c0c1ff]"
              style={{ fontVariationSettings: "'FILL' 1" }}
            >
              stadium
            </span>
          </div>
          <div className="flex flex-col">
            <h3 className="font-['Manrope'] font-semibold text-lg text-[#e4e1ed]">
              GMR Arena Concert
            </h3>
            <p className="font-['Inter'] text-sm text-[#c7c4d7]">Tonight • Doors at 19:00</p>
          </div>
        </div>

        {/* QR Code Section */}
        <div className="bg-[#1f1f27] rounded-xl border border-[#c0c1ff]/25 p-6 flex flex-col items-center justify-center gap-4 glow-qr relative overflow-hidden shadow-xl">
          {/* decorative background blobs */}
          <div className="absolute -top-10 -left-10 w-32 h-32 bg-[#c0c1ff]/5 rounded-full blur-3xl pointer-events-none"></div>
          <div className="absolute -bottom-10 -right-10 w-32 h-32 bg-[#494bd6]/10 rounded-full blur-3xl pointer-events-none"></div>

          <div className="text-center z-10 w-full flex flex-col items-center">
            <p className="font-['Inter'] font-bold text-xs text-[#c7c4d7] uppercase tracking-widest mb-3">
              ACCESS PASS
            </p>

            {/* Sharp vector-like high contrast QR Code display */}
            <div className="bg-white p-4 rounded-xl shadow-2xl relative flex items-center justify-center">
              <svg
                viewBox="0 0 100 100"
                className="w-48 h-48 rounded-sm"
                style={{ shapeRendering: 'crispEdges' }}
              >
                {/* QR Pattern */}
                <rect width="100" height="100" fill="white" />
                {/* Top-Left Finder */}
                <rect x="5" y="5" width="28" height="28" fill="black" />
                <rect x="9" y="9" width="20" height="20" fill="white" />
                <rect x="13" y="13" width="12" height="12" fill="black" />
                {/* Top-Right Finder */}
                <rect x="67" y="5" width="28" height="28" fill="black" />
                <rect x="71" y="9" width="20" height="20" fill="white" />
                <rect x="75" y="13" width="12" height="12" fill="black" />
                {/* Bottom-Left Finder */}
                <rect x="5" y="67" width="28" height="28" fill="black" />
                <rect x="9" y="71" width="20" height="20" fill="white" />
                <rect x="13" y="75" width="12" height="12" fill="black" />
                {/* Timing patterns & data dots */}
                <rect x="36" y="12" width="4" height="4" fill="black" />
                <rect x="44" y="12" width="4" height="4" fill="black" />
                <rect x="52" y="12" width="4" height="4" fill="black" />
                <rect x="60" y="12" width="4" height="4" fill="black" />
                <rect x="12" y="36" width="4" height="4" fill="black" />
                <rect x="12" y="44" width="4" height="4" fill="black" />
                <rect x="12" y="52" width="4" height="4" fill="black" />
                <rect x="12" y="60" width="4" height="4" fill="black" />
                {/* Alignment block */}
                <rect x="67" y="67" width="18" height="18" fill="black" />
                <rect x="71" y="71" width="10" height="10" fill="white" />
                <rect x="75" y="75" width="2" height="2" fill="black" />
                {/* Dense Matrix Data Pixels */}
                <rect x="38" y="38" width="8" height="8" fill="black" />
                <rect x="50" y="38" width="6" height="6" fill="black" />
                <rect x="38" y="50" width="6" height="6" fill="black" />
                <rect x="48" y="48" width="10" height="10" fill="black" />
                <rect x="62" y="42" width="6" height="4" fill="black" />
                <rect x="40" y="66" width="6" height="6" fill="black" />
                <rect x="52" y="66" width="4" height="8" fill="black" />
                <rect x="60" y="58" width="8" height="4" fill="black" />
                <rect x="25" y="45" width="6" height="6" fill="black" />
                <rect x="45" y="25" width="6" height="6" fill="black" />
                <rect x="55" y="20" width="6" height="6" fill="black" />
              </svg>
            </div>
          </div>
          <p className="font-['Inter'] text-xs text-[#c7c4d7] z-10">Hold near scanner at entry</p>
        </div>

        {/* Ticket Details */}
        <div className="grid grid-cols-2 gap-3">
          <div className="bg-[#1b1b23] rounded-xl p-3.5 border border-white/5 shadow-sm">
            <p className="font-['Inter'] text-xs text-[#c7c4d7] mb-1">Entry Gate</p>
            <div className="flex items-center gap-2">
              <span className="material-symbols-outlined text-[#c0c1ff] text-[20px]">login</span>
              <p className="font-['Inter'] text-base text-[#e4e1ed] font-bold">Gate 3</p>
            </div>
          </div>
          <div className="bg-[#1b1b23] rounded-xl p-3.5 border border-white/5 shadow-sm">
            <p className="font-['Inter'] text-xs text-[#c7c4d7] mb-1">Seat Location</p>
            <div className="flex items-center gap-2">
              <span className="material-symbols-outlined text-[#c0c1ff] text-[20px]">chair</span>
              <p className="font-['Inter'] text-base text-[#e4e1ed] font-bold">Zone B, Row 4</p>
            </div>
          </div>
        </div>

        {/* Health & Safety Toggle */}
        <div className="bg-[#1b1b23] rounded-xl border border-white/5 p-4 flex items-center justify-between shadow-sm">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-[#34343d] flex items-center justify-center">
              <span className="material-symbols-outlined text-[#c7c4d7]">health_and_safety</span>
            </div>
            <div>
              <p className="font-['Inter'] text-sm font-semibold text-[#e4e1ed]">Health & Safety</p>
              <p className="font-['Inter'] text-xs text-[#c7c4d7]">
                Confirm guidelines acknowledged
              </p>
            </div>
          </div>
          <label className="relative inline-flex items-center cursor-pointer">
            <input
              type="checkbox"
              checked={healthAgreed}
              onChange={(e) => setHealthAgreed(e.target.checked)}
              className="sr-only peer"
            />
            <div className="w-11 h-6 bg-[#34343d] peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-[#8083ff]"></div>
          </label>
        </div>

        {/* Action Button */}
        <button
          id="btn-save-wallet"
          onClick={() => setWalletSaved(true)}
          className={`w-full font-['Manrope'] font-bold text-base py-4 rounded-xl mt-2 active:scale-95 transition-all glow-primary flex justify-center items-center gap-2 cursor-pointer ${
            walletSaved
              ? 'bg-emerald-600 text-white'
              : 'bg-[#c0c1ff] text-[#1000a9] hover:bg-[#c0c1ff]/90'
          }`}
        >
          <span
            className="material-symbols-outlined text-[20px]"
            style={{ fontVariationSettings: "'FILL' 1" }}
          >
            {walletSaved ? 'check_circle' : 'account_balance_wallet'}
          </span>
          {walletSaved ? 'Pass Saved to Apple / Google Wallet' : 'Save to Wallet'}
        </button>
      </main>

      {/* BottomNavBar using anchor <a> tags for XPath compliance */}
      <nav
        id="bottom-nav-precheckin"
        className="fixed bottom-0 left-0 w-full z-50 backdrop-blur-xl rounded-t-xl border-t border-white/10 shadow-lg shadow-[#c0c1ff]/5 bg-[#13131b]/90 flex justify-around items-center px-4 pb-6 pt-2"
      >
        <a
          id="nav-anchor-home-precheckin"
          href="#home"
          onClick={(e) => {
            e.preventDefault();
            navigate('dashboard', 'push_back');
          }}
          className="flex flex-col items-center justify-center text-[#c7c4d7] hover:text-[#c0c1ff]/80 active:scale-90 transition-transform duration-200 gap-1 cursor-pointer"
        >
          <span className="material-symbols-outlined">home</span>
          <span className="font-['Inter'] text-[11px]">Home</span>
        </a>

        <a
          id="nav-anchor-map-precheckin"
          href="#map"
          onClick={(e) => {
            e.preventDefault();
            navigate('route-selection', 'push');
          }}
          className="flex flex-col items-center justify-center text-[#c7c4d7] hover:text-[#c0c1ff]/80 active:scale-90 transition-transform duration-200 gap-1 cursor-pointer"
        >
          <span className="material-symbols-outlined">map</span>
          <span className="font-['Inter'] text-[11px]">Map</span>
        </a>

        {/* SOS Button - Central prominent anchor */}
        <a
          id="nav-anchor-sos-precheckin"
          href="#sos"
          onClick={(e) => {
            e.preventDefault();
            navigate('emergency', 'slide_up');
          }}
          className="flex flex-col items-center justify-center active:scale-90 transition-transform duration-200 -mt-8 cursor-pointer"
        >
          <div className="w-14 h-14 rounded-full bg-[#ef4444] hover:bg-[#dc2626] flex items-center justify-center shadow-[0_0_20px_rgba(255,180,171,0.5)] border-4 border-[#13131b]">
            <span
              className="material-symbols-outlined text-white"
              style={{ fontVariationSettings: "'FILL' 1", fontSize: '28px' }}
            >
              emergency
            </span>
          </div>
          <span className="font-['Inter'] text-[11px] text-[#c7c4d7] mt-1 font-bold">SOS</span>
        </a>

        <a
          id="nav-anchor-alerts-precheckin"
          href="#alerts"
          className="flex flex-col items-center justify-center text-[#c7c4d7] hover:text-[#c0c1ff]/80 active:scale-90 transition-transform duration-200 gap-1 cursor-pointer"
        >
          <span className="material-symbols-outlined">notifications</span>
          <span className="font-['Inter'] text-[11px]">Alerts</span>
        </a>

        <a
          id="nav-anchor-profile-precheckin"
          href="#profile"
          className="flex flex-col items-center justify-center text-[#c0c1ff] font-bold active:scale-90 transition-transform duration-200 gap-1 cursor-pointer"
        >
          <span
            className="material-symbols-outlined"
            style={{ fontVariationSettings: "'FILL' 1" }}
          >
            person
          </span>
          <span className="font-['Inter'] text-[11px]">Profile</span>
        </a>
      </nav>
    </div>
  );
};
