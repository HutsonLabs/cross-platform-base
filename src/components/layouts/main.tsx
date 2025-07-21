import React, { useState } from 'react';
import Header from './header';
import Sidebar from './sidebar';
import Editor from './editor';
import RightPanel from './rightpanel';
import TitleBar from './titlebar';
import './../../styles/components/layouts/main.css';

interface MainLayoutProps {
  children: React.ReactNode;
}

const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);
  const [rightPanelOpen, setRightPanelOpen] = useState(false);

  return (
    <>
    <TitleBar />
    <div className={`
        main-layout 
        ${sidebarCollapsed ? 'main-layout--sidebar-collapsed' : 'main-layout--sidebar-expanded'}
        ${rightPanelOpen ? 'main-layout--right-panel-open' : ''}
      `.trim()}>
      {!sidebarCollapsed && (
        <Sidebar 
          collapsed={sidebarCollapsed}
          onToggleSidebar={setSidebarCollapsed}
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
      
      {rightPanelOpen && (
        <RightPanel 
          sidebarCollapsed={sidebarCollapsed}
          onToggleRightPanel={setRightPanelOpen}
        />
      )}
    </div>
    </>
  );
};

export default MainLayout;