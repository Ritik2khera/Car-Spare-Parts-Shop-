import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-8 mt-5">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-between">
          {/* Logo and Contact Info */}
          <div className="w-full md:w-1/3 mb-6 md:mb-0">
            <h1 className="text-2xl font-bold mb-4">Car Tire Shop</h1>
            <p className="mb-2">1234 Tire Avenue</p>
            <p className="mb-2">Tire City, TC 56789</p>
            <p className="mb-2">Phone: (123) 456-7890</p>
            <p>Email: <a href="mailto:info@cartireshop.com" className="text-blue-400 hover:underline">info@cartireshop.com</a></p>
          </div>
          
          {/* Quick Links */}
          <div className="w-full md:w-1/3 mb-6 md:mb-0">
            <h2 className="text-xl font-semibold mb-4">Quick Links</h2>
            <ul>
              <li><a href="#" className="text-gray-400 hover:text-gray-200">Home</a></li>
              <li><a href="#" className="text-gray-400 hover:text-gray-200">About Us</a></li>
              <li><a href="#" className="text-gray-400 hover:text-gray-200">Products</a></li>
              <li><a href="#" className="text-gray-400 hover:text-gray-200">Services</a></li>
              <li><a href="#" className="text-gray-400 hover:text-gray-200">Contact</a></li>
            </ul>
          </div>
          
          {/* Social Media */}
          <div className="w-full md:w-1/3 mb-6 md:mb-0">
            <h2 className="text-xl font-semibold mb-4">Follow Us</h2>
            <div className="flex space-x-4">
            <a href="https://www.facebook.com" className="text-blue-400 hover:text-blue-300" target="_blank" rel="noopener noreferrer">
  <img src="https://images.unsplash.com/photo-1662070479020-73f77887c87c?q=80&w=2054&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Facebook" className="h-6 w-6" />
</a>
<a href="https://www.twitter.com" className="text-blue-400 hover:text-blue-300" target="_blank" rel="noopener noreferrer">
  <img src="path/to/twitter-icon.png" alt="Twitter" className="h-6 w-6" />
</a>
<a href="https://www.instagram.com" className="text-blue-400 hover:text-blue-300" target="_blank" rel="noopener noreferrer">
  <img src="path/to/instagram-icon.png" alt="Instagram" className="h-6 w-6" />
</a>
<a href="https://www.youtube.com" className="text-blue-400 hover:text-blue-300" target="_blank" rel="noopener noreferrer">
  <img src="path/to/youtube-icon.png" alt="YouTube" className="h-6 w-6" />
</a>

            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-4 text-center text-gray-500">
          <p>&copy; 2024 Car Tire Shop. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
