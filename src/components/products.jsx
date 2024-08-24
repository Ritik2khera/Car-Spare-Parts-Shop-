import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

// Expanded products array with 10 products
const products = [
  {
    brand: 'Apollo',
    name: 'AMAZER 4G LIFE',
    size: '145/80 R12',
    price: '₹ 3,136',
    reviews: 320,
    rating: 4,
    warranty: '5 Year Warranty',
    availability: 'Offer available',
    type: 'Tube Type',
    image: 'path/to/tyre-image.png',
  },
  {
    brand: 'MRF',
    name: 'ZVTS',
    size: '155/65 R14',
    price: '₹ 3,618',
    reviews: 250,
    rating: 4,
    warranty: '3 Year Warranty',
    availability: 'Limited offer',
    type: 'Tubeless',
    image: 'path/to/tyre-image.png',
  },
  {
    brand: 'CEAT',
    name: 'Milaze',
    size: '165/70 R13',
    price: '₹ 3,774',
    reviews: 200,
    rating: 3.5,
    warranty: '5 Year Warranty',
    availability: 'Available',
    type: 'Tubeless',
    image: 'path/to/tyre-image.png',
  },
  {
    brand: 'Goodyear',
    name: 'Duraplus',
    size: '175/65 R14',
    price: '₹ 4,013',
    reviews: 150,
    rating: 4.5,
    warranty: '4 Year Warranty',
    availability: 'Offer available',
    type: 'Tubeless',
    image: 'path/to/tyre-image.png',
  },
  {
    brand: 'Bridgestone',
    name: 'B290',
    size: '185/65 R15',
    price: '₹ 4,500',
    reviews: 180,
    rating: 4,
    warranty: '6 Year Warranty',
    availability: 'Available',
    type: 'Tubeless',
    image: 'path/to/tyre-image.png',
  },
  {
    brand: 'JK Tyre',
    name: 'VECTRA',
    size: '155/70 R13',
    price: '₹ 3,401',
    reviews: 300,
    rating: 4,
    warranty: '5 Year Warranty',
    availability: 'Limited offer',
    type: 'Tube Type',
    image: 'path/to/tyre-image.png',
  },
  {
    brand: 'Michelin',
    name: 'Energy XM2',
    size: '195/60 R15',
    price: '₹ 4,200',
    reviews: 270,
    rating: 4.5,
    warranty: '5 Year Warranty',
    availability: 'Offer available',
    type: 'Tubeless',
    image: 'path/to/tyre-image.png',
  },
  {
    brand: 'Continental',
    name: 'ContiComfortContact',
    size: '165/65 R14',
    price: '₹ 3,562',
    reviews: 320,
    rating: 4,
    warranty: '5 Year Warranty',
    availability: 'Available',
    type: 'Tubeless',
    image: 'path/to/tyre-image.png',
  },
  {
    brand: 'Pirelli',
    name: 'Cinturato P1',
    size: '175/65 R15',
    price: '₹ 5,000',
    reviews: 100,
    rating: 5,
    warranty: '4 Year Warranty',
    availability: 'Limited offer',
    type: 'Tubeless',
    image: 'path/to/tyre-image.png',
  },
  {
    brand: 'Yokohama',
    name: 'Earth-1',
    size: '185/65 R14',
    price: '₹ 4,600',
    reviews: 210,
    rating: 4.5,
    warranty: '5 Year Warranty',
    availability: 'Offer available',
    type: 'Tubeless',
    image: 'path/to/tyre-image.png',
  },
];

const ProductCard = ({ product }) => {
  return (
    <div className="border rounded-lg shadow-sm bg-white overflow-hidden w-full">
      <div className="flex items-center p-4">
        <img src={product.image} alt={product.name} className="h-20 w-20 object-contain mr-4" />
        <div>
          <h3 className="text-lg font-bold text-gray-900">{product.brand}</h3>
          <p className="text-sm text-gray-700">{product.name}</p>
          <p className="text-sm text-gray-700">{product.size}</p>
          <div className="flex items-center mt-1">
            <span className="bg-green-600 text-white px-2 py-1 text-xs rounded-md">{product.rating}★</span>
            <span className="text-xs text-gray-600 ml-2">({product.reviews} Reviews)</span>
          </div>
          <p className="text-xl font-semibold text-gray-900 mt-2">{product.price}</p>
          <p className="text-xs text-green-600">{product.availability}</p>
          <p className="text-xs text-gray-500">{product.type}</p>
        </div>
      </div>
      <div className="bg-gray-100 text-xs font-semibold text-gray-600 p-2 flex justify-between items-center">
        <span>{product.warranty}</span>
      </div>
    </div>
  );
};

const ProductGrid = () => {
  const sliderSettings = {
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
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="w-full mx-auto p-4">
      <h2 className="text-xl font-bold text-gray-800 mb-4">Tyres sold by this Dealer</h2>
      <div className="hidden lg:block">
        {/* Grid Layout for Larger Screens */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
          {products.map((product, index) => (
            <ProductCard key={index} product={product} />
          ))}
        </div>
      </div>
      <div className="lg:hidden">
        {/* Slider for Smaller Screens */}
        <Slider {...sliderSettings} className="w-full">
          {products.map((product, index) => (
            <div key={index} className="px-2">
              <ProductCard product={product} />
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default ProductGrid;
