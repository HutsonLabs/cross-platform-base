import React from 'react';
import { Dialog } from 'radix-ui';
import { Heart, Smartphone, Monitor } from 'lucide-react';

const Welcome: React.FC = () => {
  return (
    <div style={{ padding: '2rem', textAlign: 'center', fontFamily: 'system-ui, sans-serif' }}>
      <h1>Welcome to Your New Project!</h1>
      <p>Your project includes:</p>
      <ul style={{ textAlign: 'left', maxWidth: '400px', margin: '0 auto' }}>
        <li>✅ React with TypeScript</li>
        <li>📱 Capacitor (mobile apps)</li>
        <li>🖥️ Electron Forge (desktop apps)</li>
        <li>🎨 Radix UI (component library)</li>
        <li>🎯 Lucide Icons</li>
        <li>📝 Lexical (rich text editor)</li>
      </ul>
      <div style={{ marginTop: '2rem' }}>
        <Dialog.Root>
          <Dialog.Trigger asChild>
            <button style={{
              display: 'inline-flex', alignItems: 'center', padding: '0.75rem 1.5rem',
              backgroundColor: '#6366f1', color: 'white', border: 'none',
              borderRadius: '0.5rem', cursor: 'pointer'
            }}>
              <Heart size={16} style={{ marginRight: '0.5rem' }} />
              Test Dialog
            </button>
          </Dialog.Trigger>
          <Dialog.Portal>
            <Dialog.Overlay style={{
              position: 'fixed', inset: 0, backgroundColor: 'rgba(0,0,0,0.5)', zIndex: 50
            }} />
            <Dialog.Content style={{
              position: 'fixed', top: '50%', left: '50%', transform: 'translate(-50%, -50%)',
              backgroundColor: 'white', padding: '2rem', borderRadius: '0.5rem',
              boxShadow: '0 10px 25px rgba(0,0,0,0.2)', zIndex: 51
            }}>
              <Dialog.Title style={{ marginBottom: '1rem', fontSize: '1.25rem', fontWeight: 'bold' }}>
                Platform Ready!
              </Dialog.Title>
              <Dialog.Description style={{ marginBottom: '1.5rem', color: '#666' }}>
                This works on web, mobile, and desktop!
              </Dialog.Description>
              <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  <Smartphone size={20} /><span>Mobile</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  <Monitor size={20} /><span>Desktop</span>
                </div>
              </div>
              <Dialog.Close asChild>
                <button style={{
                  marginTop: '1.5rem', padding: '0.5rem 1rem', backgroundColor: '#6366f1',
                  color: 'white', border: 'none', borderRadius: '0.25rem', cursor: 'pointer'
                }}>
                  Close
                </button>
              </Dialog.Close>
            </Dialog.Content>
          </Dialog.Portal>
        </Dialog.Root>
      </div>
    </div>
  );
};

export default Welcome;