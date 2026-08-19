/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { AnimatePresence, motion } from 'motion/react';
import { ScreenType, TransitionType } from './types';
import { MinimalSplashScreen } from './components/MinimalSplashScreen';
import { SplashScreen } from './components/SplashScreen';
import { RouteSelectionScreen } from './components/RouteSelectionScreen';
import { ExitNavigationScreen } from './components/ExitNavigationScreen';
import { PreCheckInScreen } from './components/PreCheckInScreen';
import { HomeDashboardScreen } from './components/HomeDashboardScreen';
import { EmergencyScreen } from './components/EmergencyScreen';

export default function App() {
  const [currentScreen, setCurrentScreen] = useState<ScreenType>('minimal-splash');
  const [transitionType, setTransitionType] = useState<TransitionType>('push');
  const [showScreenSwitcher, setShowScreenSwitcher] = useState(false);

  const navigate = (to: ScreenType, transition: TransitionType = 'push') => {
    setTransitionType(transition);
    setCurrentScreen(to);
  };

  const getVariants = (type: TransitionType) => {
    switch (type) {
      case 'slide_up':
        return {
          initial: { y: '100%', opacity: 0.9 },
          animate: { y: 0, opacity: 1 },
          exit: { y: '100%', opacity: 0 },
        };
      case 'push_back':
        return {
          initial: { x: '-100%', opacity: 0.8 },
          animate: { x: 0, opacity: 1 },
          exit: { x: '100%', opacity: 0 },
        };
      case 'none':
        return {
          initial: { opacity: 1 },
          animate: { opacity: 1 },
          exit: { opacity: 1 },
        };
      case 'push':
      default:
        return {
          initial: { x: '100%', opacity: 0.8 },
          animate: { x: 0, opacity: 1 },
          exit: { x: '-100%', opacity: 0 },
        };
    }
  };

  const screenVariants = getVariants(transitionType);

  const screenList: { id: ScreenType; label: string }[] = [
    { id: 'minimal-splash', label: '1. Minimal Splash Screen' },
    { id: 'splash', label: '2. Splash Screen' },
    { id: 'route-selection', label: '3. Screen 4b60f8a313d14f4fa99cf765c916badb (Select Route)' },
    { id: 'exit-navigation', label: '4. GMR Arena Exit Navigation' },
    { id: 'pre-checkin', label: '5. Pre-Check-In Pass' },
    { id: 'dashboard', label: '6. Home Dashboard - Concert Mode' },
    { id: 'emergency', label: '7. Immersive Emergency Center' },
  ];

  return (
    <div className="bg-[#13131b] min-h-screen w-full relative overflow-x-hidden select-none font-['Inter']">
      {/* Floating screen quick switcher for demo / testing */}
      <div className="fixed top-2 left-1/2 -translate-x-1/2 z-[100] flex flex-col items-center">
        <button
          onClick={() => setShowScreenSwitcher((prev) => !prev)}
          className="bg-[#1f1f27]/90 hover:bg-[#292932] border border-[#c0c1ff]/30 text-[#c0c1ff] px-3 py-1 rounded-full text-[11px] font-['Inter'] font-semibold backdrop-blur-md shadow-lg flex items-center gap-1.5 active:scale-95 transition-all opacity-75 hover:opacity-100 cursor-pointer"
        >
          <span className="w-1.5 h-1.5 rounded-full bg-[#c0c1ff] animate-pulse"></span>
          <span>Screens ({currentScreen})</span>
          <span className="material-symbols-outlined text-[14px]">
            {showScreenSwitcher ? 'expand_less' : 'expand_more'}
          </span>
        </button>

        {showScreenSwitcher && (
          <div className="mt-2 bg-[#1f1f27]/95 border border-[#c0c1ff]/30 rounded-xl p-2 shadow-2xl backdrop-blur-xl flex flex-col gap-1 w-72 max-h-96 overflow-y-auto z-[100]">
            <div className="px-2 py-1 text-[10px] uppercase tracking-wider text-[#c7c4d7]/70 font-bold border-b border-white/10">
              Prototype Screens
            </div>
            {screenList.map((screen) => (
              <button
                key={screen.id}
                onClick={() => {
                  navigate(screen.id, 'none');
                  setShowScreenSwitcher(false);
                }}
                className={`text-left px-2.5 py-1.5 rounded-lg text-xs font-medium transition-colors flex items-center justify-between cursor-pointer ${
                  currentScreen === screen.id
                    ? 'bg-[#c0c1ff]/20 text-[#c0c1ff] font-bold'
                    : 'text-[#c7c4d7] hover:bg-white/5 hover:text-white'
                }`}
              >
                <span className="truncate">{screen.label}</span>
                {currentScreen === screen.id && (
                  <span className="material-symbols-outlined text-[14px]">check</span>
                )}
              </button>
            ))}
          </div>
        )}
      </div>

      <AnimatePresence mode="wait">
        <motion.div
          key={currentScreen}
          initial={screenVariants.initial}
          animate={screenVariants.animate}
          exit={screenVariants.exit}
          transition={{ duration: transitionType === 'none' ? 0 : 0.28, ease: [0.16, 1, 0.3, 1] }}
          className="w-full min-h-screen"
        >
          {currentScreen === 'minimal-splash' && (
            <MinimalSplashScreen navigate={navigate} />
          )}
          {currentScreen === 'splash' && (
            <SplashScreen navigate={navigate} />
          )}
          {currentScreen === 'route-selection' && (
            <RouteSelectionScreen navigate={navigate} />
          )}
          {currentScreen === 'exit-navigation' && (
            <ExitNavigationScreen navigate={navigate} />
          )}
          {currentScreen === 'pre-checkin' && (
            <PreCheckInScreen navigate={navigate} />
          )}
          {currentScreen === 'dashboard' && (
            <HomeDashboardScreen navigate={navigate} />
          )}
          {currentScreen === 'emergency' && (
            <EmergencyScreen navigate={navigate} />
          )}
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
