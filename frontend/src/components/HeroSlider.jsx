import { useState, useEffect } from 'react';
import hero1 from '../assets/pngwing.com (15).png';
import hero2 from '../assets/pngwing.com (16).png';
import hero3 from '../assets/pngwing.com (17).png';
import hero4 from '../assets/pngwing.com (18).png';
import hero5 from '../assets/pngwing.com (19).png';
import hero6 from '../assets/pngwing.com (20).png';

const HeroSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      image: hero1,
      title: 'Cutting-Edge Technology Solutions',
      subtitle: 'Empowering Kenya with Advanced Tech',
    },
    {
      image: hero2,
      title: 'Starlink Internet Solutions',
      subtitle: 'High-Speed Satellite Internet for Everyone',
    },
    {
      image: hero3,
      title: 'Professional Networking Equipment',
      subtitle: 'Enterprise-Grade Solutions for Your Business',
    },
    {
      image: hero4,
      title: 'Premium Laptops & Devices',
      subtitle: 'Quality Technology for Work and Play',
    },
    {
      image: hero5,
      title: 'Latest Smartphones',
      subtitle: 'Stay Connected with the Best Devices',
    },
    {
      image: hero6,
      title: 'Expert Installation Services',
      subtitle: 'Professional Setup and Support',
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000); // Change slide every 5 seconds

    return () => clearInterval(interval);
  }, [slides.length]);

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  const goToPrevious = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const goToNext = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  return (
    <div className="relative h-[400px] md:h-[450px] overflow-hidden">
      {/* Slides */}
      <div className="relative h-full">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === currentSlide ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-primary-800/90 via-primary-700/80 to-primary-600/70 z-10"></div>
            <img
              src={slide.image}
              alt={slide.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 z-20 flex items-center">
              <div className="container mx-auto px-4">
                <div className="max-w-3xl">
                  <h1 className="text-3xl md:text-5xl font-bold text-white mb-3 animate-fade-in">
                    {slide.title}
                  </h1>
                  <p className="text-lg md:text-xl text-primary-100 mb-6 animate-fade-in-delay">
                    {slide.subtitle}
                  </p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={goToPrevious}
        className="absolute left-4 top-1/2 -translate-y-1/2 z-30 bg-white/20 hover:bg-white/30 text-white p-3 rounded-full transition-all backdrop-blur-sm"
        aria-label="Previous slide"
      >
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M15 19l-7-7 7-7"
          />
        </svg>
      </button>
      <button
        onClick={goToNext}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-30 bg-white/20 hover:bg-white/30 text-white p-3 rounded-full transition-all backdrop-blur-sm"
        aria-label="Next slide"
      >
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9 5l7 7-7 7"
          />
        </svg>
      </button>

      {/* Slide Indicators */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-30 flex gap-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`h-2 rounded-full transition-all ${
              index === currentSlide
                ? 'w-8 bg-white'
                : 'w-2 bg-white/50 hover:bg-white/75'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default HeroSlider;
