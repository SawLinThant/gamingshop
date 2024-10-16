import React from 'react'
import Title from '../components/Title'
import { assets } from '../assets/assets'
import NewsletterBox from '../components/NewsletterBox'

const Contact = () => {
  return (
    <div>
      
      <div className='text-center text-2xl pt-10'>
          <Title text1={'CONTACT'} text2={'US'} />
      </div>

      <div className='my-10 flex flex-col justify-center md:flex-row gap-10 mb-28'>
        <img className='w-full md:max-w-[480px] rounded-md' src='/contactus.png' alt="" />
        <div className='flex flex-col justify-center items-start text-white gap-6'>
          <p className='font-semibold text-xl '>Our Store</p>
          <p className=' '>54709 Willms Station <br /> Suite 350, Washington, USA</p>
          <p className=' '>Tel: (415) 555-0132 <br /> Email: admin@forever.com</p>
          <p className='font-semibold text-xl'>Careers at Forever</p>
          <p className=' '>Learn more about our teams and job openings.</p>
          <button className='border border-black px-8 py-4 text-sm hover:bg-black hover:text-green-700 transition-all duration-500'>Explore Jobs</button>
        </div>
      </div>

      <NewsletterBox/>
    </div>
  )
}

export default Contact
