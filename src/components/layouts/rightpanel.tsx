import React from 'react';
import * as Toggle from '@radix-ui/react-toggle';
import { PanelRightClose } from 'lucide-react';
import './../../styles/components/layouts/rightpanel.css';

interface RightPanelProps {
  sidebarCollapsed: boolean;
  onToggleRightPanel?: (open: boolean) => void;
}

const RightPanel: React.FC<RightPanelProps> = ({ sidebarCollapsed, onToggleRightPanel }) => {
  return (
    <div className={`right-panel ${sidebarCollapsed ? 'right-panel--sidebar-collapsed' : 'right-panel--sidebar-expanded'}`}>
      <div className="right-panel__header">
        {/* Show close toggle in upper left when right panel is visible */}
        {onToggleRightPanel && (
          <Toggle.Root
            pressed={false}
            onPressedChange={() => onToggleRightPanel(false)}
            className="right-panel__toggle"
          >
            <PanelRightClose size={20} />
          </Toggle.Root>
        )}
        <div className="right-panel__title"></div>
      </div>
      <div className="right-panel__placeholder">
        Right Panel Content
        <br />
        <small>Column 3 - Toggled view</small>
      </div>
    </div>
  );
};

export default RightPanel;