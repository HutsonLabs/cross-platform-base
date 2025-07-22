import React, { useState } from 'react';
import * as Toggle from '@radix-ui/react-toggle';
import { PanelLeftClose, Home, FolderOpen, Settings, Lightbulb, Library } from 'lucide-react';
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
    { icon: Lightbulb, label: 'Ideas', href: '/settings' },
    { icon: Library, label: 'Journal', href: '/help' }
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
                <PanelLeftClose size={20} />
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