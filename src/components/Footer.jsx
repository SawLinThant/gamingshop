import React from 'react';

const Footer = () => {
  return (
    <div className="bg-black text-neon-green">
      <div className="flex flex-col sm:grid grid-cols-3 gap-14 my-10 mt-40 text-sm px-6 sm:px-10 lg:px-20">

        {/* Logo and Description Section */}
        <div>
          <h1 className="mb-5 w-32 text-2xl font-bold">Our Provision</h1>
          <p className="w-full md:w-2/3 text-gray-400">
            We bring you the best desktop accessories to enhance your work and play experience. From sleek mouse pads to high-quality keyboards, discover products designed for comfort and style.
          </p>
        </div>

        {/* Company Links Section */}
        <div>
          <p className="text-xl font-medium mb-5">COMPANY</p>
          <ul className="flex flex-col gap-1 text-gray-400">
            <li className="hover:text-neon-blue cursor-pointer">Home</li>
            <li className="hover:text-neon-blue cursor-pointer">About Us</li>
            <li className="hover:text-neon-blue cursor-pointer">Delivery</li>
            <li className="hover:text-neon-blue cursor-pointer">Privacy Policy</li>
            <li className="hover:text-neon-blue cursor-pointer">Terms of Service</li>
          </ul>
        </div>

        {/* Contact Information Section */}
        <div>
          <p className="text-xl font-medium mb-5">GET IN TOUCH</p>
          <ul className="flex flex-col gap-1 text-gray-400">
            <li className="hover:text-neon-blue cursor-pointer">+1-212-456-7890</li>
            <li className="hover:text-neon-blue cursor-pointer">Follow us on Social Media:</li>
            <li className="hover:text-neon-blue cursor-pointer">Facebook</li>
            <li className="hover:text-neon-blue cursor-pointer">Instagram</li>
            <li className="hover:text-neon-blue cursor-pointer">Twitter</li>
          </ul>
        </div>

      </div>

      {/* Copyright Section */}
      <div className="border-t border-gray-600">
        <p className="py-5 text-sm text-center text-gray-400">
          © 2024. All Rights Reserved.
        </p>
      </div>
    </div>
  );
};

export default Footer;
