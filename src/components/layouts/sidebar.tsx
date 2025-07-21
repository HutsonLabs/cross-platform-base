import React from 'react';
import * as Separator from '@radix-ui/react-separator';
import * as Toggle from '@radix-ui/react-toggle';
import { PanelLeft } from 'lucide-react';
import './../../styles/components/layouts/sidebar.css';

interface SidebarProps {
  collapsed: boolean;
  onToggleSidebar?: (collapsed: boolean) => void;
}

const Sidebar: React.FC<SidebarProps> = ({ collapsed, onToggleSidebar }) => {
  return (
    <div className="sidebar">
      <nav className="sidebar__nav">
        <div className="sidebar__header">
          <div className="sidebar__title">
            Sidebar Navigation
          </div>
          {/* Show close toggle in upper right when sidebar is visible */}
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
        <Separator.Root className="sidebar__separator" />
        <div className="sidebar__content">
          Navigation items will go here
        </div>
      </nav>
    </div>
  );
};

export default Sidebar;