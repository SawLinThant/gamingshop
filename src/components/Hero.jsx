import React from 'react';
import { assets } from '../assets/assets';
import { useNavigate } from 'react-router-dom';
import { useInView } from 'react-intersection-observer';
import clsx from 'clsx';

const Hero = () => {
  const navigate = useNavigate();
  const { ref: heroLeftRef, inView: heroLeftInView } = useInView({
    triggerOnce: false,
  });
  const { ref: heroRightRef, inView: heroRightInView } = useInView({
    triggerOnce: false,
  });
  return (
    <div className='flex flex-col sm:flex-row mt-4 bg-black'>
      {/* Hero Left Side */}
      <div
      ref={heroLeftRef} className='w-full sm:w-1/2 flex flex-col items-start justify-center py-10 sm:py-0 px-6'>
        <div className='text-neon-green'>
          <div className='flex items-center gap-2 mb-2'>
            {/* <p className='w-8 md:w-11 h-[2px] bg-neon-green'></p> */}
            <p
             className={clsx('font-medium text-sm md:text-base text-left transition-all duration-[2000ms]',{
              "opacity-0": !heroLeftInView,
              "opacity-100": heroLeftInView,
             })}>OUR BESTSELLERS</p>
          </div>
          <h1 className={clsx('text-white font-extrabold text-2xl sm:py-3 lg:text-4xl leading-tight transition-all duration-[1000ms]',{
             "opacity-0 translate-y-10": !heroLeftInView,
             "opacity-100 translate-y-0": heroLeftInView,
          })}>
            Latest Arrivals
          </h1>
          <div className='flex items-center gap-2 mt-4'>
            <p
            onClick={() => navigate('/collection')}
            className={clsx('font-semibold text-lg text-neon-blue cursor-pointer hover:text-neon-pink transition-all duration-[1000ms]',{
              "opacity-0 translate-y-10": !heroLeftInView,
             "opacity-100 translate-y-0": heroLeftInView,
            })}>
              SHOP NOW
            </p>
            {/* <p className='w-8 md:w-11 h-[1px] bg-neon-blue'></p> */}
          </div>
        </div>
      </div>
      {/* Hero Right Side */}
      <img
      ref={heroRightRef}
      className={clsx('w-full sm:w-1/2 object-cover transition-all duration-[1500ms]',{
        "scale-75": !heroRightInView,
        "scale-100": heroRightInView,
      })} src={assets.hero} alt='Hero Image' />
    </div>
  );
};

export default Hero;
