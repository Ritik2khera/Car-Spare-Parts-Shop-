import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

const reviews = [
  {
    name: 'Md Nasir',
    review: 'Excellent service from start to finish. 100% satisfaction with the job, professionalism, and overall service. We were delighted with your courteous, prompt, and professional...',
  },
  {
    name: 'Rohit Bhati',
    review: 'Went for Tyre change. Ultimate service by shoppe boys. Owner behavior very cool. Guide as per your budget. Highly recommend',
  },
  {
    name: 'Pradeep Kumar',
    review: 'Best tyre shop in Indirapuram. Good dealing with customer. All types tyre available here. Price also responsible. Overall good experience',
  },
];


const images = [
  'https://images.unsplash.com/photo-1503924986277-3f922045c7bb?q=80&w=1993&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', // Replace these URLs with your actual image URLs
  'https://images.unsplash.com/photo-1592365559101-19adfefdf294?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  'https://plus.unsplash.com/premium_photo-1675810094937-f5a3755e10fd?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
];

function StoreCard() {
  return (
    <div className="bg-white shadow-md rounded-lg overflow-hidden max-w-4xl mx-auto">
      {/* Image Slider */}
      <div className="w-full">
        <Carousel
          showArrows={true}
          showThumbs={false}
          infiniteLoop={true}
          autoPlay={true}
          interval={3000}
        >
          {images.map((img, index) => (
            <div key={index}>
              <img src={img} alt={`Slide ${index + 1}`} />
            </div>
          ))}
        </Carousel>
      </div>

      {/* Store Information */}
      <div className="p-6 mt">
        <h2 className="text-2xl font-bold text-gray-800">Shree Hemkunt Tyres and Services</h2>
        <div className="flex items-center mt-2">
          <span className="text-green-600 text-xl font-bold">4.9</span>
          <div className="ml-2 text-yellow-400">
            {Array(5).fill('').map((_, i) => (
              <span key={i}>&#9733;</span>
            ))}
          </div>
          <span className="ml-2 text-gray-600">(2278 Reviews)</span>
        </div>
        <p className="text-gray-600 mt-4">
          Plot Number-09 Ground Floor CISF Campus Road, Ahinsa Khand-02 Indirapuram, Ghaziabad, Uttar Pradesh, 201014
        </p>
        <p className="text-gray-600 mt-2">Open - Monday to Sunday - 10:00AM to 8:00PM</p>
        <button className="mt-4 bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600">Get Directions</button>
      </div>

      {/* Reviews Section */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 p-6 bg-gray-50 border-t border-gray-200">
        {reviews.map((review, index) => (
          <div key={index} className="p-4 bg-white rounded shadow-md">
            <div className="flex items-center">
              <div className="text-xl font-bold text-gray-800 bg-gray-300 rounded-full w-10 h-10 flex items-center justify-center">
                {review.name.charAt(0)}
              </div>
              <div className="ml-3">
                <h4 className="text-gray-800 font-semibold">{review.name}</h4>
                <p className="text-gray-600 mt-2">{review.review}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
    
  );
}

export default StoreCard;
