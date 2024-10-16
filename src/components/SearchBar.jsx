import React, { useContext, useEffect, useState } from 'react';
import { ShopContext } from '../context/ShopContext';
import { assets } from '../assets/assets';
import { useLocation } from 'react-router-dom';
import { IoSearchOutline } from "react-icons/io5";

const SearchBar = () => {
    const { search, setSearch, showSearch, setShowSearch } = useContext(ShopContext);
    const [visible, setVisible] = useState(false);
    const location = useLocation();

    useEffect(() => {
        if (location.pathname.includes('collection')) {
            setVisible(true);
        } else {
            setVisible(false);
        }
    }, [location]);

    return showSearch && visible ? (
        <div className='border-t border-b bg-black text-center'>
            <div className='inline-flex items-center justify-center border border-white px-5 py-2 my-5 mx-3 rounded-full w-3/4 sm:w-1/2'>
                <input
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    className='flex-1 outline-none bg-black text-sm text-white placeholder-gray-400'
                    type="text"
                    placeholder='Search'
                />
                {/* <img className='w-4 text-white' src={assets.search_icon} alt="Search" /> */}
                <IoSearchOutline size={20} color='green'/>
            </div>
            <img
                onClick={() => setShowSearch(false)}
                className='inline w-3 cursor-pointer text-white hover:scale-110 transition-transform'
                src={assets.cross_icon}
                alt="Close"
            />
        </div>
    ) : null;
};

export default SearchBar;
