import React from 'react';
import { FiSearch } from 'react-icons/fi'
import { IoMdNotificationsOutline } from 'react-icons/io'
import { ImNotification } from 'react-icons/im'
import { MdLightMode } from 'react-icons/md'
import { GoThreeBars } from 'react-icons/go'

const SearchBar = () => {
    return (
        <div className='bg-green-200 p-3 m-4 mx rounded-2xl shadow-2xl bg-white bg-opacity-20 flex justify-between items-center'>
            <div>
                <div className='text-white'>Pages / Dashboard</div>
                <div className='text-3xl text-white font-bold'>Main Dashboard</div>
            </div>
            {/* --------------- */}
            <div className='flex items-center bg-blue-200 p-2 rounded-full'>
                <div>
                    <label className="relative block">
                        <span className="sr-only">Search</span>
                        <span className="absolute text-white inset-y-0 left-0 flex items-center pl-3">
                            <FiSearch></FiSearch>
                        </span>
                        <input className="block bg-[#0a1436] text-white w-full border border-slate-300 rounded-full py-2 pl-9 pr-3 shadow-sm focus:outline-none focus:border-whitefocus:ring-white focus:ring-0 sm:text-sm" placeholder="Search..." type="text" name="search" />
                    </label>
                </div>
                <div className='text-[24px] ml-2'>
                    <IoMdNotificationsOutline></IoMdNotificationsOutline>
                </div>
                <div className='text-[24px] ml-2'>
                    <GoThreeBars></GoThreeBars>
                </div>

                <div className='text-[18px] ml-2'>
                    <ImNotification></ImNotification>
                </div>

                <div className='text-[18px] ml-2'>
                    <MdLightMode></MdLightMode>
                </div>

                <div className='ml-2'>
                    <div className="avatar placeholder">
                        <div className="bg-neutral-focus text-neutral-content rounded-full w-9">
                            <span>MX</span>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default SearchBar;