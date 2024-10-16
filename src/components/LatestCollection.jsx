import React, { useContext, useEffect, useState } from 'react';
import { ShopContext } from '../context/ShopContext';
import Title from './Title';
import ProductItem from './ProductItem';

const LatestCollection = () => {
  const { products } = useContext(ShopContext);
  const [latestProducts, setLatestProducts] = useState([]);

  useEffect(() => {
    setLatestProducts(products.slice(0, 10));
  }, [products]);

  return (
    <div className='my-10 px-4'>
      <div className='text-left py-8 text-3xl'>
        <Title text1={'GAMING '} text2={'ACCESSORIES'} />
        <p className='m-auto text-xs sm:text-sm md:text-base text-green-500'>
         Our latest arraivals
        </p>
      </div>

      {/* Rendering Products */}
      <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6'>
        {latestProducts.map((item, index) => (
          <div key={index} className='bg-gray-800 rounded-lg overflow-hidden shadow-lg transition-transform transform hover:scale-105 duration-300'>
            <div className='relative'>
              {/* Badge for new items */}
              {item.isNew && (
                <span className='absolute top-2 left-2 bg-red-500 text-white text-xs font-bold py-1 px-2 rounded'>NEW</span>
              )}
              <img src={item.image} alt={item.name} className='w-full h-40 object-cover' />
            </div>
            <div className='p-4 bg-purple-900'>
              <h2 className='text-lg text-white font-bold'>{item.name}</h2>
              <p className='text-gray-400 text-sm'>Price: ${item.price.toFixed(2)}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LatestCollection;
