import React from 'react';
import { Outlet } from 'react-router-dom';
import SearchBar from '../component/searchbar/SearchBar';
import SideNavigations from '../component/side_navigations/SideNavigations';

const Main = () => {
    return (
        <div className='grid grid-cols-12'>
            <div className="col-span-12 xl:col-span-3 relative h-screen overflow-auto">
                <SideNavigations></SideNavigations>
            </div>
            <div className='col-span-12 xl:col-span-9 relative h-screen overflow-auto'>
                <div className='fixed top-0 min-w-[75%] pr-4 right-0 z-40 '><SearchBar></SearchBar></div>
                <div className='mt-[120px] mx-4 z-50'>
                    <Outlet></Outlet>
                </div>
            </div>
        </div>
    );
};

export default Main;