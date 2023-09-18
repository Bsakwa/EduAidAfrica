import React, { useState, useEffect } from 'react';
import img1 from '../../../../assets/hero-bg-4.jpg';
import img2 from '../../../../assets/hero-bg-3.jpg';
import img3 from '../../../../assets/hero-bg-2.jpg';
import img4 from '../../../../assets/hero-bg-1.jpg';

const images = [img1, img2, img3, img4]; // Create an array of imported images

const Homeslide = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const nextImage = () => {
      setCurrentImageIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    };

    const slideshowInterval = setInterval(nextImage, 3000); // Automatically change image every 3 seconds (adjust as needed)

    return () => clearInterval(slideshowInterval); // Clear the interval when the component unmounts
  }, []);

  return (
    <div className="homeslide">
      <img src={images[currentImageIndex]} alt={`Image ${currentImageIndex + 1}`} />
    </div>
  );
};

export default Homeslide;
