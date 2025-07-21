import React from 'react';

const RightPanel: React.FC = () => {
  return (
    <div style={{
      gridColumn: '3',
      gridRow: '1 / -1',
      backgroundColor: 'var(--color-bg-surface)',
      borderLeft: `1px solid var(--color-border-default)`,
      padding: '1rem',
      overflow: 'auto'
    }}>
      <div style={{ 
        padding: '1rem',
        border: `2px dashed var(--color-border-subtle)`,
        borderRadius: '8px',
        textAlign: 'center',
        color: 'var(--color-text-low)',
        backgroundColor: 'var(--color-bg-subtle)'
      }}>
        Right Panel
        <br />
        <small>Column 3 - Toggled view</small>
      </div>
    </div>
  );
};

export default RightPanel;