import React from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const brands = [
  { name: 'MRF', logo: 'path/to/mrf-logo.png' },
  { name: 'CEAT', logo: 'path/to/ceat-logo.png' },
  { name: 'Goodyear', logo: 'path/to/goodyear-logo.png' },
  { name: 'Apollo', logo: 'path/to/apollo-logo.png' },
  { name: 'Bridgestone', logo: 'path/to/bridgestone-logo.png' },
  { name: 'JK Tyre', logo: 'path/to/jktyre-logo.png' },
];

const deal = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <div className="bg-white mt-3 shadow-md rounded-lg overflow-hidden w-full mx-auto p-6">
      <h2 className="text-2xl font-bold text-gray-800 mb-4">Deals in</h2>
      
      <div className="hidden lg:grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 w-full">
        {brands.map((brand, index) => (
          <div key={index} className="flex flex-col items-center bg-gray-50 border rounded-lg p-4">
            <img src={brand.logo} alt={brand.name} className="h-12 mb-2" />
            <span className="text-gray-800 font-semibold">{brand.name}</span>
          </div>
        ))}
      </div>

      {/* Slider for smaller screens */}
      <div className="lg:hidden w-full">
        <Slider {...settings}>
          {brands.map((brand, index) => (
            <div key={index} className="flex flex-col items-center bg-gray-50 border rounded-lg p-4">
              <img src={brand.logo} alt={brand.name} className="h-12 mb-2" />
              <span className="text-gray-800 font-semibold">{brand.name}</span>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default deal;
