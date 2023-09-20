import React, { useState, useEffect } from 'react';
import './hs.css'; // Make sure the path to your CSS file is correct
import img1 from '../../../../assets/hero-bg-6.jpg';
import img2 from '../../../../assets/hero-bg-3.jpg';
import img3 from '../../../../assets/scholar.jpg';

const slideData = [
  {
    image: img1,
    heading: 'Position Your Student For College Success',
    description: 'Discover What Needs To Be Achieved To Succeed In The Process Of Admissions.',
  },
  {
    image: img2,
    heading: 'Understand What Lies Ahead',
    description: 'Our Greatest Joy Is In Helping Parents And Students Get The Results They Hope For.',
  },
  {
    image: img3,
    heading: 'Success Stories Client Testimonials',
    description: 'Our Clients Have Secured Millions In Scholarship Funding And Admission Into Their Most Desired Schools.',
  },
 
];

const Homeslide = () => {
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);

  useEffect(() => {
    const nextSlide = () => {
      setCurrentSlideIndex((prevIndex) =>
        prevIndex === slideData.length - 1 ? 0 : prevIndex + 1
      );
    };

    const slideshowInterval = setInterval(nextSlide, 3000);

    return () => clearInterval(slideshowInterval);
  }, []);

  const currentSlide = slideData[currentSlideIndex];

  return (
    <div className="homeslide-container h-[70vh] w-full">
      <div className="homeslide-image flex justify-between items-center">
        <img
          src={currentSlide.image}
          alt={currentSlide.heading}
          className="image-content w-full h-full object-fill"
        />
      </div>
      <div className="homeslide-text  text-white ">
        <h1 className= "text-4xl font-extrabold">
          {currentSlide.heading}
        </h1>
        <p className= "text-2xl">{currentSlide.description}</p>
      </div>
    </div>
  );
};

export default Homeslide;
