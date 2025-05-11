import React from 'react';
export const MessageSection = () => {
  return <section className="max-w-2xl mx-auto bg-white bg-opacity-80 rounded-lg p-6 md:p-8 shadow-lg">
      <h2 className="text-2xl font-semibold text-pink-600 mb-4">Dear Mom,</h2>
      <div className="space-y-4 text-gray-700">
        <p>
          Words cannot express how grateful I am to have you as my mother. Your
          unconditional love, unwavering support, and endless sacrifices have
          shaped me into the person I am today.
        </p>
        <p>
          You've been my rock through the toughest storms and my biggest
          cheerleader during my proudest moments. Your wisdom guides me, your
          laughter lifts me, and your strength inspires me every single day.
        </p>
        <p>
          Thank you for the countless sleepless nights, the warm hugs, the life
          lessons, and for always believing in me even when I didn't believe in
          myself. You are not just my mother, but my best friend, my confidant,
          and my hero.
        </p>
        <p className="font-medium">
          With all my love and gratitude,
          <br />
          Your Son
        </p>
      </div>
    </section>;
};