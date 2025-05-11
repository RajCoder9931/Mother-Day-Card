import React from 'react';
export const Message = () => {
  return <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-40 px-4">
      <div className="bg-white rounded-lg p-8 max-w-lg w-full transform animate-fadeIn">
        <div className="text-center space-y-6">
          <h2 className="text-2xl font-serif text-pink-600">
            My Dearest Mother
          </h2>
          <p className="text-gray-700 leading-relaxed">
            Every moment we've shared, every lesson you've taught, and every
            smile we've exchanged has been a precious gift. Your love has been
            my guiding light, your strength my inspiration, and your wisdom my
            compass.
          </p>
          <p className="text-gray-700 leading-relaxed">
            Today, I celebrate not just a mother, but my best friend, my
            confidante, and my hero. Your unconditional love has shaped me into
            who I am, and for that, I am eternally grateful.
          </p>
          <p className="text-pink-600 font-medium">
            With all my love,
            <br />
            Your Son
          </p>
        </div>
      </div>
    </div>;
};