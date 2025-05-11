import React, { useState, useRef, useEffect } from 'react';
import { PlayIcon, PauseIcon, VolumeXIcon, Volume2Icon } from 'lucide-react';
import mySound from '../images/Song.mp3'; // Adjust path as needed

export const AudioPlayer = () => {
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(false);
  const audioRef = useRef(null);

  const togglePlay = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const toggleMute = () => {
    if (audioRef.current) {
      audioRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.play().catch((err) => {
        console.warn('Autoplay blocked by browser:', err);
      });
    }
  }, []);

  return (
    <div className="bg-white bg-opacity-90 rounded-full shadow-md p-3 flex items-center space-x-3">
      <button
        onClick={togglePlay}
        className="bg-pink-500 hover:bg-pink-600 text-white rounded-full p-2 transition-colors"
      >
        {isPlaying ? <PauseIcon size={20} /> : <PlayIcon size={20} />}
      </button>
      <button
        onClick={toggleMute}
        className="text-pink-500 hover:text-pink-600 transition-colors"
      >
        {isMuted ? <VolumeXIcon size={20} /> : <Volume2Icon size={20} />}
      </button>
      <audio
        ref={audioRef}
        src={mySound}
        loop
        muted={isMuted}
      />
      <span className="text-sm text-pink-600">Background Music</span>
    </div>
  );
};
