// import React from 'react';
// import img1 from '../images/Maa.jpg';
// import img2 from '../images/Maa1.jpg';
// import img3 from '../images/Maa2.jpg';
// import img4 from '../images/Maa3.jpg';
// import img5 from '../images/Maa4.jpg';
// import img6 from '../images/Maa5.jpg';
// export const RotatingGallery = () => {
//   const images = [img1, img2, img3, img4, img5, img6];
//   return <div className="relative w-full h-[300px] md:h-[400px]">
//       {images.map((src, index) => <div key={index} className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" style={{
//       animation: `rotate${index + 1} 25s infinite linear`
//     }}>
//           <img src={src} alt={`Mother's Day ${index + 1}`} className="w-32 h-32 md:w-40 md:h-40 rounded-full object-cover shadow-lg border-4 border-white" style={{
//         animation: 'counter-rotate 25s infinite linear'
//       }} />
//         </div>)}
//       <style jsx>{`
//         @keyframes rotate1 {
//           from {
//             transform: translate(-50%, -50%) rotate(0deg) translateX(100px);
//           }
//           to {
//             transform: translate(-50%, -50%) rotate(360deg) translateX(100px);
//           }
//         }
//         @keyframes rotate2 {
//           from {
//             transform: translate(-50%, -50%) rotate(72deg) translateX(100px);
//           }
//           to {
//             transform: translate(-50%, -50%) rotate(432deg) translateX(100px);
//           }
//         }
//         @keyframes rotate3 {
//           from {
//             transform: translate(-50%, -50%) rotate(144deg) translateX(100px);
//           }
//           to {
//             transform: translate(-50%, -50%) rotate(504deg) translateX(100px);
//           }
//         }
//         @keyframes rotate4 {
//           from {
//             transform: translate(-50%, -50%) rotate(216deg) translateX(100px);
//           }
//           to {
//             transform: translate(-50%, -50%) rotate(576deg) translateX(100px);
//           }
//         }
//         @keyframes rotate5 {
//           from {
//             transform: translate(-50%, -50%) rotate(288deg) translateX(100px);
//           }
//           to {
//             transform: translate(-50%, -50%) rotate(648deg) translateX(100px);
//           }
//         }
//         @keyframes counter-rotate {
//           from {
//             transform: rotate(0deg);
//           }
//           to {
//             transform: rotate(-360deg);
//           }
//         }
//       `}</style>
//     </div>;
// };

import React, { useState, useEffect } from 'react';
import img1 from '../images/Maa.jpg';
import img2 from '../images/Maa1.jpg';
import img3 from '../images/Maa2.jpg';
import img4 from '../images/Maa3.jpg';
import img5 from '../images/Maa4.jpg';
import img6 from '../images/Maa5.jpg';

export const RotatingGallery = () => {
  const images = [img1, img2, img3, img4, img5, img6];
  const [showMessage, setShowMessage] = useState(false);
  const [modalImage, setModalImage] = useState(null);
  const [lastHovered, setLastHovered] = useState(Date.now());

  // Track hover timing
  useEffect(() => {
    const interval = setInterval(() => {
      if (Date.now() - lastHovered > 10000) {
        setShowMessage(true);
      } else {
        setShowMessage(false);
      }
    }, 1000);
    return () => clearInterval(interval);
  }, [lastHovered]);

  return (
    <div className="relative w-full h-[300px] md:h-[400px]">
      {images.map((src, index) => (
        <div
          key={index}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
          style={{
            animation: `rotate${index + 1} 25s infinite linear`
          }}
        >
          <img
            src={src}
            alt={`Mother's Day ${index + 1}`}
            onClick={() => setModalImage(src)}
            onMouseEnter={() => setLastHovered(Date.now())}
            className="w-32 h-32 md:w-40 md:h-40 rounded-[30px] object-cover shadow-lg border-4 border-white cursor-pointer transition-transform hover:scale-110"
            style={{
              animation: 'counter-rotate 25s infinite linear'
            }}
          />
        </div>
      ))}

      {/* Message */}
      {showMessage && (
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-black bg-opacity-70 text-white px-4 py-2 rounded-md text-sm">
          You haven't hovered over any picture for a while 🕒
        </div>
      )}

      {/* Full Image Modal */}
      {modalImage && (
        <div
          className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50"
          onClick={() => setModalImage(null)}
        >
          <img src={modalImage} alt="Full" className="max-w-full max-h-full rounded-xl shadow-2xl" />
        </div>
      )}

      {/* Keyframes */}
      <style jsx>{`
        @keyframes rotate1 {
          from { transform: translate(-50%, -50%) rotate(0deg) translateX(120px); }
          to { transform: translate(-50%, -50%) rotate(360deg) translateX(120px); }
        }
        @keyframes rotate2 {
          from { transform: translate(-50%, -50%) rotate(60deg) translateX(120px); }
          to { transform: translate(-50%, -50%) rotate(420deg) translateX(120px); }
        }
        @keyframes rotate3 {
          from { transform: translate(-50%, -50%) rotate(120deg) translateX(120px); }
          to { transform: translate(-50%, -50%) rotate(480deg) translateX(120px); }
        }
        @keyframes rotate4 {
          from { transform: translate(-50%, -50%) rotate(180deg) translateX(120px); }
          to { transform: translate(-50%, -50%) rotate(540deg) translateX(120px); }
        }
        @keyframes rotate5 {
          from { transform: translate(-50%, -50%) rotate(240deg) translateX(120px); }
          to { transform: translate(-50%, -50%) rotate(600deg) translateX(120px); }
        }
        @keyframes rotate6 {
          from { transform: translate(-50%, -50%) rotate(300deg) translateX(120px); }
          to { transform: translate(-50%, -50%) rotate(660deg) translateX(120px); }
        }
        @keyframes counter-rotate {
          from { transform: rotate(0deg); }
          to { transform: rotate(-360deg); }
        }
      `}</style>
    </div>
  );
};
