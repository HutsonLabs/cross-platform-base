import React, { useState } from 'react';
import Header from './header';
import Sidebar from './sidebar';
import Editor from './editor';
import RightPanel from './rightpanel';
import './../../styles/components/layouts/main.css';

interface MainLayoutProps {
  children: React.ReactNode;
}

const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);
  const [rightPanelOpen, setRightPanelOpen] = useState(false);

  return (
    <div className={`
        main-layout 
        ${sidebarCollapsed ? 'main-layout--sidebar-collapsed' : 'main-layout--sidebar-expanded'}
        ${rightPanelOpen ? 'main-layout--right-panel-open' : ''}
      `.trim()}>
      {!sidebarCollapsed && (
        <Sidebar 
          collapsed={sidebarCollapsed} 
        />
      )}
      
      <Header 
        sidebarCollapsed={sidebarCollapsed}
        onToggleSidebar={setSidebarCollapsed}
        rightPanelOpen={rightPanelOpen}
        onToggleRightPanel={setRightPanelOpen}
      />
      
      <Editor sidebarCollapsed={sidebarCollapsed}>
        {children}
      </Editor>
      
      {rightPanelOpen && <RightPanel />}
    </div>
  );
};

export default MainLayout;