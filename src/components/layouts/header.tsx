import React from 'react';
import * as Toggle from '@radix-ui/react-toggle';
import { Menu, X } from 'lucide-react';

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
    <div style={{
      gridColumn: sidebarCollapsed ? '1' : '2',
      gridRow: '1',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      padding: '0 1rem',
      borderBottom: `1px solid var(--color-border-default)`,
      backgroundColor: 'var(--color-bg-subtle)'
    }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
        <Toggle.Root
          pressed={sidebarCollapsed}
          onPressedChange={onToggleSidebar}
          style={{
            padding: '0.5rem',
            border: 'none',
            background: 'transparent',
            cursor: 'pointer',
            borderRadius: '4px',
            color: 'var(--color-text-high)'
          }}
        >
          <Menu size={20} />
        </Toggle.Root>
        <h1 style={{ 
          margin: 0, 
          fontSize: '1.125rem', 
          fontWeight: '600',
          color: 'var(--color-text-high)'
        }}>
          App Header
        </h1>
      </div>
      <Toggle.Root
        pressed={rightPanelOpen}
        onPressedChange={onToggleRightPanel}
        style={{
          padding: '0.5rem',
          border: 'none',
          background: 'transparent',
          cursor: 'pointer',
          borderRadius: '4px',
          color: 'var(--color-text-high)'
        }}
      >
        {rightPanelOpen ? <X size={20} /> : <Menu size={20} />}
      </Toggle.Root>
    </div>
  );
};

export default Header;