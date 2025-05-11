import React, { useEffect, useState } from 'react';
import { XIcon } from 'lucide-react';
export const SurpriseMessage = ({
  onClose
}) => {
  const [isVisible, setIsVisible] = useState(false);
  useEffect(() => {
    setTimeout(() => {
      setIsVisible(true);
    }, 100);
  }, []);
  const handleClose = () => {
    setIsVisible(false);
    setTimeout(onClose, 500);
  };
  return <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className={`bg-white rounded-lg shadow-2xl max-w-md w-full p-6 md:p-8 transform transition-all duration-500 ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-90'}`}>
        <div className="flex justify-between items-start mb-4">
          <h3 className="text-2xl font-semibold text-pink-600">
            A Special Message
          </h3>
          <button onClick={handleClose} className="text-gray-400 hover:text-gray-600">
            <XIcon size={24} />
          </button>
        </div>
        <div className="text-center">
          <div className="text-pink-500 text-4xl mb-4">❤️</div>
          <p className="text-gray-700 mb-4">
            Mom, you are the heart of our family. Your love is the foundation
            upon which I've built my life. I promise to make you proud every
            day.
          </p>
          <p className="text-gray-700 font-medium">
            I love you to the moon and back, today and always.
          </p>
        </div>
      </div>
    </div>;
};