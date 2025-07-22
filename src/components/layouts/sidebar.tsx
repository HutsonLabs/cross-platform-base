import React, { useState } from 'react';
import * as Separator from '@radix-ui/react-separator';
import * as Toggle from '@radix-ui/react-toggle';
import { PanelLeft, Home, FolderOpen, Settings, HelpCircle } from 'lucide-react';
import SettingsModal from './modal';
import './../../styles/components/layouts/sidebar.css';

interface SidebarProps {
  collapsed: boolean;
  onToggleSidebar?: (collapsed: boolean) => void;
}

const Sidebar: React.FC<SidebarProps> = ({ collapsed, onToggleSidebar }) => {
  const [settingsOpen, setSettingsOpen] = useState(false);

  const navigationItems = [
    { icon: Home, label: 'Home', href: '/' },
    { icon: FolderOpen, label: 'Projects', href: '/projects' },
    { icon: Settings, label: 'Settings', href: '/settings' },
    { icon: HelpCircle, label: 'Help', href: '/help' }
  ];

  return (
    <>
      <div className="sidebar">
        <nav className="sidebar__nav">
          <div className="sidebar__header">
            <div className="sidebar__title">
            </div>
            {onToggleSidebar && (
              <Toggle.Root
                pressed={false}
                onPressedChange={() => onToggleSidebar(true)}
                className="sidebar__toggle"
              >
                <PanelLeft size={20} />
              </Toggle.Root>
            )}
          </div>
          <div className="sidebar__content">
            <ul className="sidebar__menu">
              {navigationItems.map((item, index) => {
                const IconComponent = item.icon;
                return (
                  <li key={index} className="sidebar__menu-item">
                    <a href={item.href} className="sidebar__menu-link">
                      <IconComponent size={18} className="sidebar__menu-icon" />
                      <span className="sidebar__menu-label">{item.label}</span>
                    </a>
                  </li>
                );
              })}
            </ul>
          </div>

          {/* Settings Button at Bottom */}
          <div className="sidebar__footer">
            <button 
              className="sidebar__settings-button"
              onClick={() => setSettingsOpen(true)}
              aria-label="Open settings"
            >
              <Settings size={18} />
            </button>
          </div>
        </nav>
      </div>

      <SettingsModal 
        isOpen={settingsOpen} 
        onClose={() => setSettingsOpen(false)} 
      />
    </>
  );
};

export default Sidebar;