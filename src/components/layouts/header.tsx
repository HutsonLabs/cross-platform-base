import React from 'react';
import * as Toggle from '@radix-ui/react-toggle';
import { Menu, X } from 'lucide-react';
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
  return (
    <div className={`header ${sidebarCollapsed ? 'header--sidebar-collapsed' : 'header--sidebar-expanded'}`}>
        <div className="header__left">
            <Toggle.Root
                pressed={sidebarCollapsed}
                onPressedChange={onToggleSidebar}
                className="header__toggle"
                >
                    <Menu size={20} />
            </Toggle.Root>
            <h1 className="header__title">
            App Header
            </h1>
        </div>
        <Toggle.Root
            pressed={rightPanelOpen}
            onPressedChange={onToggleRightPanel}
            className="header__toggle"
            >
            {rightPanelOpen ? <X size={20} /> : <Menu size={20} />}
        </Toggle.Root>
    </div>
  );
};

export default Header;