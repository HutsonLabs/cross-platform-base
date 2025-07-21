import React from 'react';
import * as Separator from '@radix-ui/react-separator';
import './../../styles/components/layouts/sidebar.css';


interface SidebarProps {
  collapsed: boolean;
}

const Sidebar: React.FC<SidebarProps> = ({ collapsed }) => {
  return (
<div className="sidebar">
  <nav className="sidebar__nav">
    <div className={`sidebar__title ${collapsed ? 'sidebar__title--collapsed' : 'sidebar__title--expanded'}`}>
      {collapsed ? 'Nav' : 'Sidebar Navigation'}
    </div>
    <Separator.Root className="sidebar__separator" />
    <div className="sidebar__content">
      {collapsed ? '...' : 'Navigation items will go here'}
    </div>
  </nav>
</div>
  );
};

export default Sidebar;