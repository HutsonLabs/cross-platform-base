import React, { useEffect, useState } from 'react';
import './../../styles/components/layouts/titlebar.css';

const TitleBar: React.FC = () => {
  const [platform, setPlatform] = useState<string>('');

  useEffect(() => {
    if (window.electronAPI?.platform) {
      setPlatform(window.electronAPI.platform);
    }
  }, []);

  return (
    <div className={`titlebar titlebar--${platform}`}>
      <div className="titlebar-drag-region">
        <div className="titlebar-content">
          {/* App title or other content */}
        </div>
      </div>
    </div>
  );
};

export default TitleBar;