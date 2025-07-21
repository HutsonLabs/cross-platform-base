// src/components/layouts/main.tsx - COMPLETE REPLACEMENT
import React, { useState, useRef, useCallback, useEffect } from 'react';
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
  
  // Resize states
  const [sidebarWidth, setSidebarWidth] = useState(250);
  const [rightPanelWidth, setRightPanelWidth] = useState(300);
  const [isResizing, setIsResizing] = useState<'sidebar' | 'rightPanel' | null>(null);
  
  const layoutRef = useRef<HTMLDivElement>(null);

  // Resize constraints
  const MIN_PANEL_WIDTH = 200;
  const MIN_CONTENT_PERCENT = 40;
  const MAX_PANEL_PERCENT = 60;

  const handleResize = useCallback((e: MouseEvent) => {
    if (!layoutRef.current || !isResizing) return;
    
    const layoutRect = layoutRef.current.getBoundingClientRect();
    const layoutWidth = layoutRect.width;
    
    if (isResizing === 'sidebar') {
      const maxWidth = layoutWidth * (MAX_PANEL_PERCENT / 100);
      const rightWidth = rightPanelOpen ? rightPanelWidth : 0;
      const minContentWidth = layoutWidth * (MIN_CONTENT_PERCENT / 100);
      const maxAllowed = layoutWidth - rightWidth - minContentWidth;
      
      const newWidth = Math.min(
        Math.max(e.clientX - layoutRect.left, MIN_PANEL_WIDTH),
        Math.min(maxWidth, maxAllowed)
      );
      
      setSidebarWidth(Math.round(newWidth));
    } else if (isResizing === 'rightPanel') {
      const maxWidth = layoutWidth * (MAX_PANEL_PERCENT / 100);
      const leftWidth = sidebarCollapsed ? 0 : sidebarWidth;
      const minContentWidth = layoutWidth * (MIN_CONTENT_PERCENT / 100);
      const maxAllowed = layoutWidth - leftWidth - minContentWidth;
      
      const newWidth = Math.min(
        Math.max(layoutRect.right - e.clientX, MIN_PANEL_WIDTH),
        Math.min(maxWidth, maxAllowed)
      );
      
      setRightPanelWidth(Math.round(newWidth));
    }
  }, [isResizing, sidebarCollapsed, sidebarWidth, rightPanelOpen, rightPanelWidth]);

  const handleMouseUp = useCallback(() => {
    setIsResizing(null);
  }, []);

  useEffect(() => {
    if (isResizing) {
      document.addEventListener('mousemove', handleResize);
      document.addEventListener('mouseup', handleMouseUp);
      document.body.style.cursor = 'col-resize';
      
      return () => {
        document.removeEventListener('mousemove', handleResize);
        document.removeEventListener('mouseup', handleMouseUp);
        document.body.style.cursor = '';
      };
    }
  }, [isResizing, handleResize, handleMouseUp]);

  const cssVars = {
    '--sidebar-width': `${sidebarWidth}px`,
    '--right-panel-width': `${rightPanelWidth}px`,
  } as React.CSSProperties;

  return (
    <>
    <TitleBar />
    <div 
      ref={layoutRef}
      className={`
        main-layout 
        ${sidebarCollapsed ? 'main-layout--sidebar-collapsed' : 'main-layout--sidebar-expanded'}
        ${rightPanelOpen ? 'main-layout--right-panel-open' : ''}
        ${isResizing ? 'main-layout--resizing' : ''}
      `.trim()}
      style={cssVars}
    >
      <Header 
        sidebarCollapsed={sidebarCollapsed}
        onToggleSidebar={setSidebarCollapsed}
        rightPanelOpen={rightPanelOpen}
        onToggleRightPanel={setRightPanelOpen}
      />
      
      {!sidebarCollapsed && (
        <Sidebar 
          collapsed={sidebarCollapsed}
          onToggleSidebar={setSidebarCollapsed}
        />
      )}
      
      <Editor sidebarCollapsed={sidebarCollapsed}>
        {children}
      </Editor>
      
      {rightPanelOpen && (
        <RightPanel 
          sidebarCollapsed={sidebarCollapsed}
          onToggleRightPanel={setRightPanelOpen}
        />
      )}
      
      {/* Resize handles */}
      {!sidebarCollapsed && (
        <div 
          className="resize-handle resize-handle--sidebar"
          onMouseDown={(e) => {
            e.preventDefault();
            setIsResizing('sidebar');
          }}
        >
          <div className="resize-handle__pill" />
        </div>
      )}
      
      {rightPanelOpen && (
        <div 
          className="resize-handle resize-handle--right-panel"
          onMouseDown={(e) => {
            e.preventDefault();
            setIsResizing('rightPanel');
          }}
        >
          <div className="resize-handle__pill" />
        </div>
      )}
    </div>
    </>
  );
};

export default MainLayout;