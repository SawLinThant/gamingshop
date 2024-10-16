import React, { useContext, useEffect, useState } from 'react';
import { ShopContext } from '../context/ShopContext';
import { assets } from '../assets/assets';
import Title from '../components/Title';
import ProductItem from '../components/ProductItem';

const Collection = () => {
  const { products, search, showSearch } = useContext(ShopContext);
  const [showFilter, setShowFilter] = useState(false);
  const [filterProducts, setFilterProducts] = useState([]);
  const [category, setCategory] = useState([]);
  const [subCategory, setSubCategory] = useState([]);
  const [sortType, setSortType] = useState('relevant');

  const toggleCategory = (e) => {
    if (category.includes(e.target.value)) {
      setCategory((prev) => prev.filter((item) => item !== e.target.value));
    } else {
      setCategory((prev) => [...prev, e.target.value]);
    }
  };

  const toggleSubCategory = (e) => {
    if (subCategory.includes(e.target.value)) {
      setSubCategory((prev) => prev.filter((item) => item !== e.target.value));
    } else {
      setSubCategory((prev) => [...prev, e.target.value]);
    }
  };

  const applyFilter = () => {
    let productsCopy = products.slice();

    if (showSearch && search) {
      productsCopy = productsCopy.filter((item) =>
        item.name.toLowerCase().includes(search.toLowerCase())
      );
    }

    if (category.length > 0) {
      productsCopy = productsCopy.filter((item) => category.includes(item.category));
    }

    if (subCategory.length > 0) {
      productsCopy = productsCopy.filter((item) => subCategory.includes(item.subCategory));
    }

    setFilterProducts(productsCopy);
  };

  const sortProduct = () => {
    let fpCopy = filterProducts.slice();

    switch (sortType) {
      case 'low-high':
        setFilterProducts(fpCopy.sort((a, b) => a.price - b.price));
        break;

      case 'high-low':
        setFilterProducts(fpCopy.sort((a, b) => b.price - a.price));
        break;

      default:
        applyFilter();
        break;
    }
  };

  useEffect(() => {
    applyFilter();
  }, [category, subCategory, search, showSearch, products]);

  useEffect(() => {
    sortProduct();
  }, [sortType]);

  return (
    <div className="flex flex-col sm:flex-row gap-8 sm:gap-12 pt-10 bg-black text-white min-h-screen">

      {/* Filter Options */}
      <div className="sm:w-1/4 lg:w-1/5">
        <div>
          <p
            onClick={() => setShowFilter(!showFilter)}
            className="mb-4 text-xl flex items-center cursor-pointer gap-2 text-neon-green"
          >
            FILTERS
            <img className={`h-3 sm:hidden ${showFilter ? 'rotate-90' : ''}`} src={assets.dropdown_icon} alt="" />
          </p>

          {/* Category Filter */}
          <div className={`border border-neon-green px-5 py-3 ${showFilter ? '' :'hidden'} sm:block`}>
            <p className="mb-3 text-base font-semibold text-neon-pink">Brand</p>
            <div className="flex flex-col gap-2 text-sm font-light text-neon-blue">
              <label className="flex items-center gap-2 cursor-pointer">
                <input className="accent-neon-pink" type="checkbox" value={'Razor'} onChange={toggleCategory}/> 
                Razor
              </label>
              <label className="flex items-center gap-2 cursor-pointer">
                <input className="accent-neon-pink" type="checkbox" value={'GForce'} onChange={toggleCategory}/> 
                GForce
              </label>
              <label className="flex items-center gap-2 cursor-pointer">
                <input className="accent-neon-pink" type="checkbox" value={'Navidia'} onChange={toggleCategory}/> 
                Navidia
              </label>
              <label className="flex items-center gap-2 cursor-pointer">
                <input className="accent-neon-pink" type="checkbox" value={'ROG'} onChange={toggleCategory}/> 
                ROG
              </label>
            </div>
          </div>

          {/* SubCategory Filter */}
          <div className={`border border-neon-green px-5 py-3 mt-6 ${showFilter ? '' :'hidden'} sm:block`}>
            <p className="mb-3 text-base font-semibold text-neon-pink">TYPE</p>
            <div className="flex flex-col gap-2 text-sm font-light text-neon-blue">
              <label className="flex items-center gap-2 cursor-pointer">
                <input className="accent-neon-pink" type="checkbox" value={'Monitor'} onChange={toggleSubCategory}/> 
                Monitor
              </label>
              <label className="flex items-center gap-2 cursor-pointer">
                <input className="accent-neon-pink" type="checkbox" value={'Desktop'} onChange={toggleSubCategory}/> 
                Desktop
              </label>
              <label className="flex items-center gap-2 cursor-pointer">
                <input className="accent-neon-pink" type="checkbox" value={'Ram'} onChange={toggleSubCategory}/> 
                Ram
              </label>
              <label className="flex items-center gap-2 cursor-pointer">
                <input className="accent-neon-pink" type="checkbox" value={'GPU'} onChange={toggleSubCategory}/> 
                GPU
              </label>
            </div>
          </div>
        </div>
      </div>

      {/* Product Section */}
      <div className="flex-1">

        {/* Title and Sort */}
        <div className="flex justify-between items-center text-lg mb-8">
          <Title text1={'ALL'} text2={'COLLECTIONS'} />
          <select
            onChange={(e) => setSortType(e.target.value)}
            className="border-2 border-neon-green bg-gray-800 text-neon-green text-sm px-4 py-2 rounded-lg"
          >
            <option value="relevant">Sort by: Relevant</option>
            <option value="low-high">Price: Low to High</option>
            <option value="high-low">Price: High to Low</option>
          </select>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 xl:grid-cols-6 gap-6">
          {
            filterProducts.map((item, index) => (
              <ProductItem
                key={index}
                name={item.name}
                id={item._id}
                price={item.price}
                image={item.image}
                className="hover:scale-105 hover:shadow-neon-glow transition-transform duration-300"
              />
            ))
          }
      </div>
      </div>
    </div>
  );
};

export default Collection;
