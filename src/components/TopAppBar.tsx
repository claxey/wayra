import React from 'react';

interface TopAppBarProps {
  onSecurityClick?: () => void;
  onNotificationClick?: () => void;
  title?: string;
  isEmergency?: boolean;
}

export const TopAppBar: React.FC<TopAppBarProps> = ({
  onSecurityClick,
  onNotificationClick,
  title = 'WAYRA',
  isEmergency = false,
}) => {
  return (
    <header
      id="top-app-bar"
      className="fixed top-0 left-0 w-full z-50 backdrop-blur-xl border-b border-white/10 flex items-center justify-between px-5 h-16 bg-[#13131b]/85 transition-all"
    >
      <button
        id="btn-security-header"
        aria-label="Security Overview"
        onClick={onSecurityClick}
        className="text-[#c0c1ff] hover:bg-[#34343d]/50 transition-colors active:scale-95 flex items-center justify-center p-2 rounded-full cursor-pointer"
      >
        <span
          className="material-symbols-outlined text-[24px]"
          style={{ fontVariationSettings: "'FILL' 1" }}
        >
          security
        </span>
      </button>

      <h1
        id="app-title-header"
        className={`font-['Manrope'] font-extrabold tracking-tighter text-xl uppercase ${
          isEmergency ? 'text-[#ffb4ab] animate-pulse' : 'text-[#c0c1ff]'
        }`}
      >
        {title}
      </h1>

      <button
        id="btn-notifications-header"
        aria-label="Notifications"
        onClick={onNotificationClick}
        className={`hover:bg-[#34343d]/50 transition-colors active:scale-95 flex items-center justify-center p-2 rounded-full cursor-pointer ${
          isEmergency ? 'text-[#ffb4ab]' : 'text-[#c0c1ff]'
        }`}
      >
        <span
          className="material-symbols-outlined text-[24px]"
          style={{ fontVariationSettings: isEmergency ? "'FILL' 1" : "'FILL' 0" }}
        >
          notifications_active
        </span>
      </button>
    </header>
  );
};
