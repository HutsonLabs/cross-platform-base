import React from 'react';

interface EditorProps {
  children: React.ReactNode;
  sidebarCollapsed?: boolean;
}

const Editor: React.FC<EditorProps> = ({ children, sidebarCollapsed = false }) => {
  return (
    <main style={{
      gridColumn: sidebarCollapsed ? '1' : '2',
      gridRow: '2',
      padding: '1rem',
      backgroundColor: 'var(--color-bg-app)',
      overflow: 'auto'
    }}>
      <div style={{ 
        padding: '1rem',
        border: `2px dashed var(--color-border-default)`,
        borderRadius: '8px',
        textAlign: 'center',
        color: 'var(--color-text-low)',
        backgroundColor: 'var(--color-bg-surface)'
      }}>
        Main Content Area (Editor)
        <br />
        <small>Column 2 - Content goes here</small>
      </div>
      {children}
    </main>
  );
};

export default Editor;