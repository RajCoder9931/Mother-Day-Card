import React, { useState } from 'react';
import { InvitationCard } from './components/InvitationCard';
import { RotatingGallery } from './components/RotatingGallery';
import { Message } from './components/Message';
import { MusicPlayer } from './components/MusicPlayer';
export function App() {
  const [isOpen, setIsOpen] = useState(false);
  const [showMessage, setShowMessage] = useState(false);
  const handleCardClick = () => {
    setIsOpen(true);
    setTimeout(() => setShowMessage(true), 3000);
  };
  return <div className="min-h-screen w-full bg-gradient-to-br from-pink-50 via-purple-50 to-pink-50 relative overflow-hidden">
      <div className="container mx-auto px-4 py-8 relative min-h-screen flex items-center justify-center">
        {!isOpen && <InvitationCard onClick={handleCardClick} />}
        {isOpen && <RotatingGallery />}
        {showMessage && <Message />}
      </div>
      <div className="fixed bottom-4 right-4 z-50">
        <MusicPlayer />
      </div>
    </div>;
}