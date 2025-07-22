import React, { useState } from 'react';
import { 
  X, 
  ChevronLeft, 
  ChevronRight,
  User,
  Shield,
  Bell,
  Palette,
  Globe,
  Accessibility,
  Zap,
  HardDrive,
  Code
} from 'lucide-react';
import './../../styles/components/layouts/modal.css';

interface SettingsModalProps {
  isOpen: boolean;
  onClose: () => void;
}

type SettingsPage = 'main' | string;

const SettingsModal: React.FC<SettingsModalProps> = ({ isOpen, onClose }) => {
  const [currentPage, setCurrentPage] = useState<SettingsPage>('main');

  const handleEscapeKey = (e: React.KeyboardEvent) => {
    if (e.key === 'Escape') {
      if (currentPage !== 'main') {
        setCurrentPage('main');
      } else {
        onClose();
      }
    }
  };

  const handleBackdropClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  const handleClose = () => {
    setCurrentPage('main'); // Reset to main page when closing
    onClose();
  };

  const handleBack = () => {
    setCurrentPage('main');
  };

  const navigateToSetting = (settingId: string) => {
    setCurrentPage(settingId);
  };

  if (!isOpen) return null;

  return (
    <div 
      className="settings-modal-backdrop"
      onClick={handleBackdropClick}
    >
      <div 
        className="settings-modal"
        onKeyDown={handleEscapeKey}
        tabIndex={-1}
      >
        <div className="settings-modal__container">
          <div className="settings-modal__header">
            {currentPage !== 'main' && (
              <button 
                className="settings-modal__back"
                onClick={handleBack}
                aria-label="Go back"
              >
                <ChevronLeft size={24} />
              </button>
            )}
            
            <h1 className="settings-modal__title">
              {currentPage === 'main' ? 'Settings' : getPageTitle(currentPage)}
            </h1>
            
            <button 
              className="settings-modal__close"
              onClick={handleClose}
              aria-label="Close settings"
            >
              {currentPage === 'main' ? <X size={24} /> : 'Done'}
            </button>
          </div>
          
          <div className="settings-modal__body">
            {currentPage === 'main' ? (
              <SettingsMainPage onNavigate={navigateToSetting} />
            ) : (
              <SettingDetailPage settingId={currentPage} />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

// Main settings page with list of setting categories
const SettingsMainPage: React.FC<{ onNavigate: (settingId: string) => void }> = ({ onNavigate }) => {
  const settingsSections = [
    {
      title: 'Account',
      settings: [
        { id: 'profile', title: 'Profile', icon: User },
        { id: 'privacy', title: 'Privacy', icon: Shield },
        { id: 'notifications', title: 'Notifications', icon: Bell },
      ]
    },
    {
      title: 'App Settings',
      settings: [
        { id: 'appearance', title: 'Appearance', icon: Palette },
        { id: 'language', title: 'Language & Region', icon: Globe },
        { id: 'accessibility', title: 'Accessibility', icon: Accessibility },
      ]
    },
    {
      title: 'Advanced',
      settings: [
        { id: 'performance', title: 'Performance', icon: Zap },
        { id: 'storage', title: 'Storage', icon: HardDrive },
        { id: 'developer', title: 'Developer', icon: Code },
      ]
    }
  ];

  return (
    <div className="settings-main">
      {settingsSections.map((section) => (
        <div key={section.title} className="settings-section">
          <h2 className="settings-section__title">{section.title}</h2>
          
          <div className="settings-list">
            {section.settings.map((setting) => {
              const IconComponent = setting.icon;
              return (
                <button
                  key={setting.id}
                  className="settings-list__item"
                  onClick={() => onNavigate(setting.id)}
                >
                  <div className="settings-list__content">
                    <IconComponent size={20} className="settings-list__icon" />
                    <div className="settings-list__title">{setting.title}</div>
                  </div>
                  <ChevronRight size={20} className="settings-list__arrow" />
                </button>
              );
            })}
          </div>
        </div>
      ))}
    </div>
  );
};

// Individual setting detail page
const SettingDetailPage: React.FC<{ settingId: string }> = ({ settingId }) => {
  return (
    <div className="setting-detail">
      <div className="settings-placeholder">
        <h3>Settings for: {getPageTitle(settingId)}</h3>
        <p>This is where the detailed settings for "{settingId}" will be implemented.</p>
        <p>Each setting will have its own dedicated interface here.</p>
      </div>
    </div>
  );
};

// Helper function to get page titles
function getPageTitle(settingId: string): string {
  const titles: Record<string, string> = {
    profile: 'Profile',
    privacy: 'Privacy',
    notifications: 'Notifications',
    appearance: 'Appearance',
    language: 'Language & Region',
    accessibility: 'Accessibility',
    performance: 'Performance',
    storage: 'Storage',
    developer: 'Developer Options',
  };
  return titles[settingId] || settingId;
}

export default SettingsModal;