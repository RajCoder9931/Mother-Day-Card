// import React, { memo } from 'react';
// export const PhotoGallery = () => {
//   const photos = ['https://images.unsplash.com/photo-1504439904031-93ded9f93e4e?q=80&w=1471&auto=format&fit=crop', 'https://images.unsplash.com/photo-1543342384-1f1350e27861?q=80&w=1374&auto=format&fit=crop', 'https://images.unsplash.com/photo-1600880292203-757bb62b4baf?q=80&w=1470&auto=format&fit=crop', 'https://images.unsplash.com/photo-1577368211130-4bbb935f0d4a?q=80&w=1470&auto=format&fit=crop', 'https://images.unsplash.com/photo-1492725764893-90b379c2b6e7?q=80&w=1470&auto=format&fit=crop', 'https://images.unsplash.com/photo-1571210059434-edf0dc48e414?q=80&w=1470&auto=format&fit=crop'];
//   return <section className="mt-16 mb-12">
//       <h2 className="text-3xl font-semibold text-center text-pink-600 mb-8">
//         Cherished Memories
//       </h2>
//       <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
//         {photos.map((photo, index) => <div key={index} className="overflow-hidden rounded-lg shadow-md transition-transform duration-300 hover:scale-105 hover:shadow-xl">
//             <img src={photo} alt={`Mom memory ${index + 1}`} className="w-full h-64 object-cover" />
//           </div>)}
//       </div>
//     </section>;
// };
import img1 from '../images/Maa.jpg';
import img2 from '../images/Maa1.jpg';
import img3 from '../images/Maa2.jpg';
import img4 from '../images/Maa3.jpg';
import img5 from '../images/Maa4.jpg';
import img6 from '../images/Maa5.jpg';

export const PhotoGallery = () => {
  const photos = [img1, img2, img3, img4, img5, img6];

  return (
    <section className="mt-16 mb-12">
      <h2 className="text-3xl font-semibold text-center text-pink-600 mb-8">
        Cherished Memories
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {photos.map((photo, index) => (
          <div
            key={index}
            className="overflow-hidden rounded-lg shadow-md transition-transform duration-300 hover:scale-105 hover:shadow-xl"
          >
            <img src={photo} alt={`Mom memory ${index + 1}`} className="w-full h-64 object-cover" />
          </div>
        ))}
      </div>
    </section>
  );
};
