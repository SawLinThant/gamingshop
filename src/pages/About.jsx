import React from 'react';
import Title from '../components/Title';
import { assets } from '../assets/assets';
import NewsletterBox from '../components/NewsletterBox';

const DesktopAccessories = () => {
  return (
    <div>
      <div className='text-2xl text-white text-left pt-8'>
        <Title text1={'COMPUTING'} text2={'ACCESSORIES'} />
      </div>

      <div className='my-10 flex text-white flex-col md:flex-row gap-16'>
        <img className='w-full md:max-w-[450px]' src="/aboutus.jpg" alt="Desktop Accessories" />
        <div className='flex flex-col justify-center gap-6 md:w-2/4 text-white'>
          <p className=''>At Gaming Website, we believe that the right desktop accessories can significantly enhance your productivity and comfort. Our collection includes everything you need to create an efficient and stylish workspace.</p>
          <p>From ergonomic keyboards and precision mice to stylish monitor stands and cable management solutions, we offer a range of products designed to meet the needs of every user. Our accessories are sourced from trusted brands, ensuring quality and reliability.</p>
          <b className='text-green-500 text-2xl'>Our Mission</b>
          <p>Our mission is to empower individuals with the tools they need to succeed in their workspaces. We aim to provide a seamless shopping experience and high-quality products that help you stay organized and focused.</p>
        </div>
      </div>

      <div className='text-xl py-4'>
        <Title text1={'WHY'} text2={'CHOOSE OUR ACCESSORIES'} />
      </div>

      <div className='flex flex-col md:flex-row text-sm mb-20'>
        <div className='border border-purple-700 px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5 lg:rounded-l md:rounded-l'>
          <b className='text-green-500 text-xl font-bold'>Economic Design:</b>
          <p className='text-white'>Our accessories are designed with your comfort in mind, helping you maintain good posture and reduce strain during long work hours.</p>
        </div>
        <div className='border border-purple-700 px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
          <b className='text-green-500 text-xl font-bold'>Enhanced Functionality:</b>
          <p className='text-white'>Upgrade your setup with our advanced tech gadgets that improve your productivity and workflow.</p>
        </div>
        <div className='border border-purple-700 px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5 lg:rounded-r md:rounded-r'>
          <b className='text-green-500 text-xl font-bold'>Stylish Aesthetics:</b>
          <p className='text-white'>Our accessories are not just functional but also add a touch of style to your workspace, making it a place you love to work in.</p>
        </div>
      </div>

      <NewsletterBox />
    </div>
  );
};

export default DesktopAccessories;
