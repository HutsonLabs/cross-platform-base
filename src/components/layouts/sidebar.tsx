import React from 'react';
import * as Separator from '@radix-ui/react-separator';

interface SidebarProps {
  collapsed: boolean;
}

const Sidebar: React.FC<SidebarProps> = ({ collapsed }) => {
  return (
    <div style={{
      gridColumn: '1',
      gridRow: '1 / -1',
      backgroundColor: 'var(--color-bg-surface)',
      borderRight: `1px solid var(--color-border-default)`,
      overflow: 'hidden'
    }}>
      <nav style={{ padding: '1rem 0.5rem' }}>
        <div style={{ 
          padding: '0.5rem', 
          textAlign: collapsed ? 'center' : 'left',
          fontSize: '0.875rem',
          fontWeight: '500',
          color: 'var(--color-text-high)'
        }}>
          {collapsed ? 'Nav' : 'Sidebar Navigation'}
        </div>
        <Separator.Root 
          style={{ 
            height: '1px', 
            backgroundColor: 'var(--color-border-subtle)', 
            margin: '0.5rem 0' 
          }} 
        />
        <div style={{ 
          padding: '0.5rem',
          color: 'var(--color-text-low)'
        }}>
          {collapsed ? '...' : 'Navigation items will go here'}
        </div>
      </nav>
    </div>
  );
};

export default Sidebar;