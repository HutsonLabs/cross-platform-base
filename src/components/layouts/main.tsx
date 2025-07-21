import React, { useState } from 'react';
import Header from './header';
import Sidebar from './sidebar';
import Editor from './editor';
import RightPanel from './rightpanel';

interface MainLayoutProps {
  children: React.ReactNode;
}

const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);
  const [rightPanelOpen, setRightPanelOpen] = useState(false);

  return (
    <div style={{ 
      height: '100vh', 
      display: 'grid', 
      gridTemplateColumns: sidebarCollapsed 
        ? `1fr ${rightPanelOpen ? '300px' : '0px'}` 
        : `250px 1fr ${rightPanelOpen ? '300px' : '0px'}`,
      gridTemplateRows: '60px 1fr',
      transition: 'grid-template-columns 0.2s ease'
    }}>
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