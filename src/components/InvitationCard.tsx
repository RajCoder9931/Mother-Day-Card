import React from 'react';
import { HeartIcon } from 'lucide-react';
export const InvitationCard = ({
  onClick
}) => {
  return <div onClick={onClick} className="max-w-md w-full bg-white rounded-2xl shadow-2xl p-8 cursor-pointer transform transition-all duration-300 hover:scale-105 hover:shadow-3xl">
      <div className="text-center space-y-6">
        <HeartIcon className="w-12 h-12 text-pink-500 mx-auto" />
        <h1 className="text-3xl font-serif text-pink-600 mb-4">
          Happy Mother's Day
        </h1>
        <div className="w-16 h-1 bg-pink-200 mx-auto"></div>
        <p className="text-gray-600 mt-4">
          Click to open a special surprise for the most amazing mom
        </p>
        <div className="text-sm text-pink-400 animate-pulse mt-4">
          Tap to reveal ✨
        </div>
      </div>
      <div className="absolute inset-0 bg-gradient-to-r from-pink-100 via-purple-100 to-pink-100 opacity-10 rounded-2xl"></div>
    </div>;
};