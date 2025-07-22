import React from 'react';
import { X } from 'lucide-react';
import './../../styles/components/layouts/modal.css';

interface SettingsModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const SettingsModal: React.FC<SettingsModalProps> = ({ isOpen, onClose }) => {
  const handleEscapeKey = (e: React.KeyboardEvent) => {
    if (e.key === 'Escape') {
      onClose();
    }
  };

  const handleBackdropClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  if (!isOpen) return null;

  return (
    <div 
      className="settings-modal"
      onKeyDown={handleEscapeKey}
      onClick={handleBackdropClick}
      tabIndex={-1}
    >
    </div>
  );
};

export default SettingsModal;