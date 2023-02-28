import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import { MdBarChart, MdPerson, MdHome, MdLock, MdOutlineShoppingCart } from 'react-icons/md';
import { FiPackage } from 'react-icons/fi';
import { TbLayoutGridAdd } from 'react-icons/tb';
import { RiNodeTree, RiChatHistoryFill } from 'react-icons/ri';
import { HiUserGroup, HiDocumentText } from 'react-icons/hi';
import { FaWallet, FaLock } from 'react-icons/fa';
import { IoMdWallet } from 'react-icons/io';
import { FaHistory } from 'react-icons/fa';
import { MdManageAccounts } from 'react-icons/md';
import { GiNothingToSay } from 'react-icons/gi';

const SideNavigations = () => {
    return (
        <div className='bg-[#111c44]'>
            <label htmlFor="my-drawer">


                <div className='flex justify-center items-center border-b border-gray-400 pb-6'>
                    <div className='text-2xl text-white font-extrabold pt-14 pb-3'>HELLWETSOFT <span className='font-normal'>PRO</span>
                    </div>
                </div>

                <div className=" my-8"></div>

                <div className='flex justify-start mx-8 mt-2'>
                    <div>
                        {/* ---------------- */}
                        <div className='text-white flex items-center mb-4'>
                            <div className='text-[20px] mr-2'><MdHome></MdHome></div>
                            <NavLink to='/'>Dashboard</NavLink>
                        </div>
                        {/* ---------------- */}
                        <div className='text-white flex items-center mb-4'>
                            <div className='text-[20px] mr-2'><TbLayoutGridAdd></TbLayoutGridAdd></div>
                            <NavLink to='/nft_market_place'>Add Benificiary</NavLink>
                        </div>
                        {/* ---------------- */}
                        <div className='text-white flex items-center mb-4'>
                            <div className='text-[20px] mr-2'><MdOutlineShoppingCart></MdOutlineShoppingCart></div>
                            <NavLink to='/sign_in'>Signin</NavLink>
                        </div>
                        {/* ---------------- */}
                        <div className='text-white flex items-center mb-4'>
                            <div className='text-[20px] mr-2'><TbLayoutGridAdd></TbLayoutGridAdd></div>
                            <NavLink to='/sign_up'>Sign up</NavLink>
                        </div>
                        {/* ---------------- */}
                        <div className='text-white flex items-center mb-4'>
                            <div className='text-[20px] mr-2'><TbLayoutGridAdd></TbLayoutGridAdd></div>
                            <NavLink to='/nft_market_place'>Add Benificiary</NavLink>
                        </div>
                        {/* ---------------- */}
                        <div className='text-white flex items-center mb-4'>
                            <div className='text-[20px] mr-2'><MdOutlineShoppingCart></MdOutlineShoppingCart></div>
                            <NavLink to='/nft_market_place'>NFT Marketplace</NavLink>
                        </div>
                        {/* ---------------- */}
                        <div className='text-white flex items-center mb-4'>
                            <div className='text-[20px] mr-2'><TbLayoutGridAdd></TbLayoutGridAdd></div>
                            <NavLink to='/nft_market_place'>Authentication</NavLink>
                        </div>
                        {/* ---------------- */}
                        <div className='text-white flex items-center mb-4'>
                            <div className='text-[20px] mr-2'><TbLayoutGridAdd></TbLayoutGridAdd></div>
                            <NavLink to='/nft_market_place'>Add Benificiary</NavLink>
                        </div>
                        {/* ---------------- */}
                        <div className='text-white flex items-center mb-4'>
                            <div className='text-[20px] mr-2'><MdOutlineShoppingCart></MdOutlineShoppingCart></div>
                            <NavLink to='/nft_market_place'>NFT Marketplace</NavLink>
                        </div>
                        {/* ---------------- */}
                        <div className='text-white flex items-center mb-4'>
                            <div className='text-[20px] mr-2'><TbLayoutGridAdd></TbLayoutGridAdd></div>
                            <NavLink to='/nft_market_place'>Authentication</NavLink>
                        </div>
                        {/* ---------------- */}
                        <div className='text-white flex items-center mb-4'>
                            <div className='text-[20px] mr-2'><TbLayoutGridAdd></TbLayoutGridAdd></div>
                            <NavLink to='/nft_market_place'>Add Benificiary</NavLink>
                        </div>
                        {/* ---------------- */}
                        <div className='text-white flex items-center mb-4'>
                            <div className='text-[20px] mr-2'><MdOutlineShoppingCart></MdOutlineShoppingCart></div>
                            <NavLink to='/nft_market_place'>NFT Marketplace</NavLink>
                        </div>
                        {/* ---------------- */}
                        <div className='text-white flex items-center mb-4'>
                            <div className='text-[20px] mr-2'><TbLayoutGridAdd></TbLayoutGridAdd></div>
                            <NavLink to='/nft_market_place'>Authentication</NavLink>
                        </div>
                        {/* ---------------- */}
                        <div className='text-white flex items-center mb-4'>
                            <div className='text-[20px] mr-2'><TbLayoutGridAdd></TbLayoutGridAdd></div>
                            <NavLink to='/nft_market_place'>Add Benificiary</NavLink>
                        </div>
                        {/* ---------------- */}
                        <div className='text-white flex items-center mb-4'>
                            <div className='text-[20px] mr-2'><MdOutlineShoppingCart></MdOutlineShoppingCart></div>
                            <NavLink to='/nft_market_place'>NFT Marketplace</NavLink>
                        </div>
                        {/* ---------------- */}
                        <div className='text-white flex items-center mb-4'>
                            <div className='text-[20px] mr-2'><TbLayoutGridAdd></TbLayoutGridAdd></div>
                            <NavLink to='/nft_market_place'>Authentication</NavLink>
                        </div>
                        {/* ---------------- */}
                        <div className='text-white flex items-center mb-4'>
                            <div className='text-[20px] mr-2'><TbLayoutGridAdd></TbLayoutGridAdd></div>
                            <NavLink to='/nft_market_place'>Add Benificiary</NavLink>
                        </div>
                        {/* ---------------- */}
                        <div className='text-white flex items-center mb-4'>
                            <div className='text-[20px] mr-2'><MdOutlineShoppingCart></MdOutlineShoppingCart></div>
                            <NavLink to='/nft_market_place'>NFT Marketplace</NavLink>
                        </div>
                        {/* ---------------- */}
                        <div className='text-white flex items-center mb-4'>
                            <div className='text-[20px] mr-2'><TbLayoutGridAdd></TbLayoutGridAdd></div>
                            <NavLink to='/nft_market_place'>Authentication</NavLink>
                        </div>
                        {/* ---------------- */}
                        {/* ---------------- */}
                        <div className='text-white flex items-center mb-4'>
                            <div className='text-[20px] mr-2'><TbLayoutGridAdd></TbLayoutGridAdd></div>
                            <NavLink to='/nft_market_place'>Authentication</NavLink>
                        </div>
                        {/* ---------------- */}
                        <div className='text-white flex items-center mb-4'>
                            <div className='text-[20px] mr-2'><TbLayoutGridAdd></TbLayoutGridAdd></div>
                            <NavLink to='/nft_market_place'>Add Benificiary</NavLink>
                        </div>
                        {/* ---------------- */}
                        <div className='text-white flex items-center mb-4'>
                            <div className='text-[20px] mr-2'><MdOutlineShoppingCart></MdOutlineShoppingCart></div>
                            <NavLink to='/nft_market_place'>NFT Marketplace</NavLink>
                        </div>
                        {/* ---------------- */}
                        <div className='text-white flex items-center mb-4'>
                            <div className='text-[20px] mr-2'><TbLayoutGridAdd></TbLayoutGridAdd></div>
                            <NavLink to='/nft_market_place'>Authentication</NavLink>
                        </div>
                        {/* ---------------- */}
                        <div className='text-white flex items-center mb-4'>
                            <div className='text-[20px] mr-2'><TbLayoutGridAdd></TbLayoutGridAdd></div>
                            <NavLink to='/nft_market_place'>Add Benificiary</NavLink>
                        </div>
                        {/* ---------------- */}
                        <div className='text-white flex items-center mb-4'>
                            <div className='text-[20px] mr-2'><MdOutlineShoppingCart></MdOutlineShoppingCart></div>
                            <NavLink to='/nft_market_place'>NFT Marketplace</NavLink>
                        </div>
                        {/* ---------------- */}
                        <div className='text-white flex items-center mb-4'>
                            <div className='text-[20px] mr-2'><TbLayoutGridAdd></TbLayoutGridAdd></div>
                            <NavLink to='/nft_market_place'>Authentication</NavLink>
                        </div>
                        {/* ---------------- */}
                        <div className='text-white flex items-center mb-4'>
                            <div className='text-[20px] mr-2'><TbLayoutGridAdd></TbLayoutGridAdd></div>
                            <NavLink to='/nft_market_place'>Add Benificiary</NavLink>
                        </div>
                        {/* ---------------- */}
                        <div className='text-white flex items-center mb-4'>
                            <div className='text-[20px] mr-2'><MdOutlineShoppingCart></MdOutlineShoppingCart></div>
                            <NavLink to='/nft_market_place'>NFT Marketplace</NavLink>
                        </div>
                        {/* ---------------- */}
                        <div className='text-white flex items-center mb-4'>
                            <div className='text-[20px] mr-2'><TbLayoutGridAdd></TbLayoutGridAdd></div>
                            <NavLink to='/nft_market_place'>Authentication</NavLink>
                        </div>
                        {/* ---------------- */}
                        {/* ---------------- */}
                        <div className='text-white flex items-center mb-4'>
                            <div className='text-[20px] mr-2'><TbLayoutGridAdd></TbLayoutGridAdd></div>
                            <NavLink to='/nft_market_place'>Authentication</NavLink>
                        </div>
                        {/* ---------------- */}
                        <div className='text-white flex items-center mb-4'>
                            <div className='text-[20px] mr-2'><TbLayoutGridAdd></TbLayoutGridAdd></div>
                            <NavLink to='/nft_market_place'>Add Benificiary</NavLink>
                        </div>
                        {/* ---------------- */}
                        <div className='text-white flex items-center mb-4'>
                            <div className='text-[20px] mr-2'><MdOutlineShoppingCart></MdOutlineShoppingCart></div>
                            <NavLink to='/nft_market_place'>NFT Marketplace</NavLink>
                        </div>
                        {/* ---------------- */}
                        <div className='text-white flex items-center mb-4'>
                            <div className='text-[20px] mr-2'><TbLayoutGridAdd></TbLayoutGridAdd></div>
                            <NavLink to='/nft_market_place'>Authentication</NavLink>
                        </div>
                        {/* ---------------- */}
                        <div className='text-white flex items-center mb-4'>
                            <div className='text-[20px] mr-2'><TbLayoutGridAdd></TbLayoutGridAdd></div>
                            <NavLink to='/nft_market_place'>Add Benificiary</NavLink>
                        </div>
                        {/* ---------------- */}
                        <div className='text-white flex items-center mb-4'>
                            <div className='text-[20px] mr-2'><MdOutlineShoppingCart></MdOutlineShoppingCart></div>
                            <NavLink to='/nft_market_place'>NFT Marketplace</NavLink>
                        </div>
                        {/* ---------------- */}
                        <div className='text-white flex items-center mb-4'>
                            <div className='text-[20px] mr-2'><TbLayoutGridAdd></TbLayoutGridAdd></div>
                            <NavLink to='/nft_market_place'>Authentication</NavLink>
                        </div>
                        {/* ---------------- */}
                        <div className='text-white flex items-center mb-4'>
                            <div className='text-[20px] mr-2'><TbLayoutGridAdd></TbLayoutGridAdd></div>
                            <NavLink to='/nft_market_place'>Add Benificiary</NavLink>
                        </div>
                        {/* ---------------- */}
                        <div className='text-white flex items-center mb-4'>
                            <div className='text-[20px] mr-2'><MdOutlineShoppingCart></MdOutlineShoppingCart></div>
                            <NavLink to='/nft_market_place'>NFT Marketplace</NavLink>
                        </div>
                        {/* ---------------- */}
                        <div className='text-white flex items-center mb-4'>
                            <div className='text-[20px] mr-2'><TbLayoutGridAdd></TbLayoutGridAdd></div>
                            <NavLink to='/nft_market_place'>Authentication</NavLink>
                        </div>
                        {/* ---------------- */}

                    </div>
                </div>


            </label>
        </div>
    );
};

export default SideNavigations;