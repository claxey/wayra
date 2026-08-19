export type ScreenType =
  | 'minimal-splash'
  | 'splash'
  | 'route-selection' // Screen 4b60f8a313d14f4fa99cf765c916badb
  | 'exit-navigation' // GMR Arena Exit Navigation
  | 'pre-checkin'     // Pre-Check-In Pass
  | 'dashboard'        // Home Dashboard - Concert Mode
  | 'emergency';       // Immersive Emergency Center

export type TransitionType = 'none' | 'slide_up' | 'push' | 'push_back';

export interface NavigationProps {
  currentScreen: ScreenType;
  navigate: (to: ScreenType, transition?: TransitionType) => void;
  goBack?: () => void;
}
