import React from 'react';
import { ScreenType, TransitionType } from '../types';

interface BottomNavBarProps {
  currentScreen: ScreenType;
  navigate: (to: ScreenType, transition?: TransitionType) => void;
  asAnchor?: boolean;
}

export const BottomNavBar: React.FC<BottomNavBarProps> = ({
  currentScreen,
  navigate,
  asAnchor = false,
}) => {
  const handleHome = (e: React.MouseEvent) => {
    e.preventDefault();
    if (currentScreen === 'route-selection') {
      navigate('dashboard', 'none');
    } else {
      navigate('dashboard', 'push_back');
    }
  };

  const handleMap = (e: React.MouseEvent) => {
    e.preventDefault();
    navigate('route-selection', 'push');
  };

  const handleSOS = (e: React.MouseEvent) => {
    e.preventDefault();
    navigate('emergency', 'slide_up');
  };

  const isHomeActive = currentScreen === 'dashboard';
  const isMapActive = currentScreen === 'route-selection' || currentScreen === 'exit-navigation';

  if (asAnchor) {
    return (
      <nav
        id="bottom-nav-bar-anchor"
        className="fixed bottom-0 left-0 w-full z-50 backdrop-blur-xl rounded-t-2xl border-t border-white/10 shadow-lg shadow-[#c0c1ff]/5 bg-[#13131b]/90 flex justify-around items-center px-4 pb-6 pt-2"
      >
        <a
          id="nav-anchor-home"
          href="#home"
          onClick={handleHome}
          className={`flex flex-col items-center justify-center transition-transform duration-200 gap-0.5 ${
            isHomeActive
              ? 'text-[#c0c1ff] font-bold'
              : 'text-[#c7c4d7] hover:text-[#c0c1ff]/80 active:scale-90'
          }`}
        >
          <span
            className="material-symbols-outlined mb-1"
            style={{ fontVariationSettings: isHomeActive ? "'FILL' 1" : "'FILL' 0" }}
          >
            home
          </span>
          <span className="font-['Inter'] text-[11px] font-medium">Home</span>
          {isHomeActive && <div className="w-1 h-1 bg-[#c0c1ff] rounded-full mt-0.5"></div>}
        </a>

        <a
          id="nav-anchor-map"
          href="#map"
          onClick={handleMap}
          className={`flex flex-col items-center justify-center transition-transform duration-200 gap-0.5 ${
            isMapActive
              ? 'text-[#c0c1ff] font-bold'
              : 'text-[#c7c4d7] hover:text-[#c0c1ff]/80 active:scale-90'
          }`}
        >
          <span
            className="material-symbols-outlined mb-1"
            style={{ fontVariationSettings: isMapActive ? "'FILL' 1" : "'FILL' 0" }}
          >
            map
          </span>
          <span className="font-['Inter'] text-[11px] font-medium">Map</span>
        </a>

        {/* SOS Central Anchor */}
        <a
          id="nav-anchor-sos"
          href="#sos"
          onClick={handleSOS}
          className="flex flex-col items-center justify-center active:scale-90 transition-transform duration-200 -mt-7"
        >
          <div className="w-14 h-14 rounded-full bg-[#ef4444] hover:bg-[#dc2626] flex items-center justify-center shadow-[0_0_22px_rgba(239,68,68,0.7)] border-4 border-[#13131b] sos-pulse">
            <span
              className="material-symbols-outlined text-white text-[28px]"
              style={{ fontVariationSettings: "'FILL' 1" }}
            >
              emergency
            </span>
          </div>
          <span className="font-['Inter'] text-[11px] font-bold text-[#e4e1ed] mt-1">SOS</span>
        </a>

        <a
          id="nav-anchor-alerts"
          href="#alerts"
          className="flex flex-col items-center justify-center text-[#c7c4d7] hover:text-[#c0c1ff]/80 active:scale-90 transition-transform duration-200 gap-0.5"
        >
          <span className="material-symbols-outlined mb-1">notifications</span>
          <span className="font-['Inter'] text-[11px] font-medium">Alerts</span>
        </a>

        <a
          id="nav-anchor-profile"
          href="#profile"
          className="flex flex-col items-center justify-center text-[#c7c4d7] hover:text-[#c0c1ff]/80 active:scale-90 transition-transform duration-200 gap-0.5"
        >
          <span className="material-symbols-outlined mb-1">person</span>
          <span className="font-['Inter'] text-[11px] font-medium">Profile</span>
        </a>
      </nav>
    );
  }

  return (
    <>
      <nav
        id="bottom-nav-bar"
        className="fixed bottom-0 left-0 w-full z-50 flex justify-around items-center px-4 pb-6 pt-2 backdrop-blur-xl rounded-t-2xl border-t border-white/10 shadow-lg shadow-[#c0c1ff]/5 bg-[#13131b]/90"
      >
        <button
          id="nav-btn-home"
          onClick={handleHome}
          className={`flex flex-col items-center justify-center transition-transform duration-200 cursor-pointer ${
            isHomeActive
              ? 'text-[#c0c1ff] font-bold'
              : 'text-[#c7c4d7] hover:text-[#c0c1ff]/80 active:scale-90'
          }`}
        >
          <span
            className="material-symbols-outlined mb-1"
            style={{ fontVariationSettings: isHomeActive ? "'FILL' 1" : "'FILL' 0" }}
          >
            home
          </span>
          <span className="font-['Inter'] text-[11px] font-medium">Home</span>
          {isHomeActive && <div className="w-1 h-1 bg-[#c0c1ff] rounded-full mt-0.5"></div>}
        </button>

        <button
          id="nav-btn-map"
          onClick={handleMap}
          className={`flex flex-col items-center justify-center transition-transform duration-200 cursor-pointer ${
            isMapActive
              ? 'text-[#c0c1ff] font-bold'
              : 'text-[#c7c4d7] hover:text-[#c0c1ff]/80 active:scale-90'
          }`}
        >
          <span
            className="material-symbols-outlined mb-1"
            style={{ fontVariationSettings: isMapActive ? "'FILL' 1" : "'FILL' 0" }}
          >
            map
          </span>
          <span className="font-['Inter'] text-[11px] font-medium">Map</span>
        </button>

        {/* Space for absolute SOS button */}
        <div className="w-14"></div>

        <button
          id="nav-btn-alerts"
          className="flex flex-col items-center justify-center text-[#c7c4d7] hover:text-[#c0c1ff]/80 active:scale-90 transition-transform duration-200 cursor-pointer"
        >
          <span className="material-symbols-outlined mb-1">notifications</span>
          <span className="font-['Inter'] text-[11px] font-medium">Alerts</span>
        </button>

        <button
          id="nav-btn-profile"
          className="flex flex-col items-center justify-center text-[#c7c4d7] hover:text-[#c0c1ff]/80 active:scale-90 transition-transform duration-200 cursor-pointer"
        >
          <span className="material-symbols-outlined mb-1">person</span>
          <span className="font-['Inter'] text-[11px] font-medium">Profile</span>
        </button>
      </nav>

      {/* Floating Center SOS Button */}
      <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-[60] flex flex-col items-center">
        <button
          id="nav-btn-sos-floating"
          onClick={handleSOS}
          aria-label="Emergency SOS"
          className="w-15 h-15 rounded-full bg-gradient-to-br from-red-500 to-red-700 text-white flex items-center justify-center shadow-lg shadow-red-600/40 sos-pulse active:scale-90 transition-transform cursor-pointer border-2 border-white/20"
        >
          <span
            className="material-symbols-outlined text-3xl"
            style={{ fontVariationSettings: "'FILL' 1" }}
          >
            emergency
          </span>
        </button>
        <span className="font-['Inter'] text-[11px] text-[#e4e1ed] mt-1 font-bold tracking-wider">
          SOS
        </span>
      </div>
    </>
  );
};
