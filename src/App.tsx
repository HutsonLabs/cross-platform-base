import React from 'react';
import Layout from './components/layouts/main';
import Editor from './pages/editor';
// Removed unused useTheme import
import './styles/App.css';

function App() {
  return (
    <Layout>
      <Editor />
    </Layout>
  );
}

export default App;