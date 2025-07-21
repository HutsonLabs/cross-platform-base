import React from 'react';
import './../../styles/components/layouts/editor.css';

interface EditorProps {
  children: React.ReactNode;
  sidebarCollapsed?: boolean;
}

const Editor: React.FC<EditorProps> = ({ children, sidebarCollapsed = false }) => {
  return (
    <main className={`editor-layout ${sidebarCollapsed ? 'editor-layout--sidebar-collapsed' : 'editor-layout--sidebar-expanded'}`}>
        <div className="editor-layout__placeholder">
            Main Content Area (Editor)
            <br />
            <small>Column 2 - Content goes here</small>
        </div>
        {children}
    </main>
  );
};

export default Editor;