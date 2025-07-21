import React from 'react';
import './../../styles/components/layouts/rightpanel.css';


const RightPanel: React.FC = () => {
  return (
    <div className="right-panel">
        <div className="right-panel__placeholder">
            Right Panel
            <br />
            <small>Column 3 - Toggled view</small>
        </div>
    </div>
  );
};

export default RightPanel;