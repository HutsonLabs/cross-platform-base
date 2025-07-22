import React, { useEffect, useState } from 'react';
import * as Toggle from '@radix-ui/react-toggle';
import { PanelLeftOpen, CircleCheck, X } from 'lucide-react';
import './../../styles/components/layouts/header.css';

interface HeaderProps {
  sidebarCollapsed: boolean;
  onToggleSidebar: (collapsed: boolean) => void;
  rightPanelOpen: boolean;
  onToggleRightPanel: (open: boolean) => void;
}

const Header: React.FC<HeaderProps> = ({ 
  sidebarCollapsed, 
  onToggleSidebar, 
  rightPanelOpen, 
  onToggleRightPanel 
}) => {
  const [platform, setPlatform] = useState<string>('');

  useEffect(() => {
    if (window.electronAPI?.platform) {
      setPlatform(window.electronAPI.platform);
    }
  }, []);

  return (
    <div className={`header header--${platform} ${sidebarCollapsed ? 'header--sidebar-collapsed' : 'header--sidebar-expanded'}`}>
      <div className="header__left">
        {/* Show sidebar toggle only when sidebar is collapsed */}
        {sidebarCollapsed && (
          <Toggle.Root
            pressed={false}
            onPressedChange={() => onToggleSidebar(false)}
            className="header__toggle"
          >
            <PanelLeftOpen size={20} />
          </Toggle.Root>
        )}
      </div>
      
      {/* Show right panel toggle only when right panel is closed */}
      {!rightPanelOpen && (
        <Toggle.Root
          pressed={false}
          onPressedChange={() => onToggleRightPanel(true)}
          className="header__toggle"
        >
          <CircleCheck size={20} />
        </Toggle.Root>
      )}
    </div>
  );
};

export default Header;