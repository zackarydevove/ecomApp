import React from 'react'
import { BsFillPersonFill } from 'react-icons/bs';
import { GiHamburgerMenu } from 'react-icons/gi';
import { RxCross1 } from 'react-icons/rx';
import { useNavigate } from 'react-router-dom';
import SearchBar from './SearchBar';
import Cart from './Cart';
import { useState } from 'react';

function Navbar({userCart = [], total = 0, hover_color = 'white'}) {
    const [open, setOpen] = useState(false);
    const navigate = useNavigate();
    console.log(hover_color);

    console.log(open);
    if (hover_color === 'black') {
        return (
            <div className='w-screen flex flex-col'>
                <div className="w-full m-5 flex justify-between lg:justify-evenly items-center">
                    {
                        open ?
                        <RxCross1 size='2em' className='lg:hidden z-10' onClick={() => setOpen(!open)}/>
                        :
                        <GiHamburgerMenu size='2em' className='lg:hidden' onClick={() => setOpen(!open)}/>
                    }
                    <div className='sm:w-64 sm:h-10 z-10 bg-logo1_black bg-center bg-cover bg-no-repeat hover:cursor-pointer' onClick={() => navigate('/')}/>
                    <ul className='hidden lg:flex gap-6 z-10'>
                        <div className='w-auto h-10 p-5 flex justify-center items-center hover:footer hover:text-white rounded-full'
                            onClick={() => navigate('/shop')}>
                            <li className='cursor-pointer'>SHOP</li>
                        </div>
                        <div className={`w-auto h-10 p-5 flex justify-center items-center hover:footer hover:text-white rounded-full`}
                            onClick={() => navigate('/about')}>
                            <li className='cursor-pointer'>ABOUT</li>
                        </div>
                        <div className='w-auto h-10 p-5 flex justify-center items-center hover:footer hover:text-white rounded-full'
                            onClick={() => navigate('/support')}>
                            <li className='cursor-pointer'>SUPPORT</li>
                        </div>
                    </ul>
                    <div className='flex gap-7 mr-10'>
                        <SearchBar />
                        <div className='w-5 h-5 hover:cursor-pointer z-10 flex justify-center items-center'
                            onClick={() => navigate('/profile')}>
                            <BsFillPersonFill size='3em' className='hover:text-grey'/>
                        </div>
                        <Cart userCart={userCart} total={total}/>
                    </div>
                </div>
                {
                    open ?
                    <div className='lg:hidden w-screen h-screen bg-white z-[5] flex flex-col justify-start items-center absolute '>
                        <ul className='flex flex-col gap-10 mt-32'>
                            <div className='sm:hidden w-auto h-10  p-5 flex justify-center items-center hover:footer hover:text-white rounded-full'
                                onClick={() => navigate('/')}>
                                <li className='cursor-pointer text-5xl'>HOME</li>
                            </div>
                            <div className='w-auto h-10  p-5 flex justify-center items-center hover:footer hover:text-white rounded-full'
                                onClick={() => navigate('/shop')}>
                                <li className='cursor-pointer text-5xl'>SHOP</li>
                            </div>
                            <div className={`w-auto h-10 p-5 flex justify-center items-center hover:footer hover:text-white rounded-full`}
                                onClick={() => navigate('/about')}>
                                <li className='cursor-pointer text-5xl'>ABOUT</li>
                            </div>
                            <div className='w-auto h-10 p-5 flex justify-center items-center hover:footer hover:text-white rounded-full'
                                onClick={() => navigate('/support')}>
                                <li className='cursor-pointer text-5xl'>SUPPORT</li>
                            </div>
                        </ul>
                    </div>
                    : null
                }
            </div>
        )
    } else {
        return (
            <div className='w-screen flex flex-col'>
                <div className="w-full m-5 flex justify-between lg:justify-evenly items-center">
                    {
                        open ?
                        <RxCross1 size='2em' className='lg:hidden z-10' onClick={() => setOpen(!open)}/>
                        :
                        <GiHamburgerMenu size='2em' className='lg:hidden' onClick={() => setOpen(!open)}/>
                    }
                    <div className='sm:w-64 sm:h-10 z-10 bg-logo1_black bg-center bg-cover bg-no-repeat hover:cursor-pointer' onClick={() => navigate('/')}/>
                    <ul className='hidden lg:flex gap-6 z-10'>
                        <div className='w-auto h-10 p-5 flex justify-center items-center hover:white rounded-full'
                            onClick={() => navigate('/shop')}>
                            <li className='cursor-pointer'>SHOP</li>
                        </div>
                        <div className={`w-auto h-10 p-5 flex justify-center items-center hover:white rounded-full`}
                            onClick={() => navigate('/about')}>
                            <li className='cursor-pointer'>ABOUT</li>
                        </div>
                        <div className='w-auto h-10 p-5 flex justify-center items-center hover:white rounded-full'
                            onClick={() => navigate('/support')}>
                            <li className='cursor-pointer'>SUPPORT</li>
                        </div>
                    </ul>
                    <div className='flex gap-7 mr-10'>
                        <SearchBar />
                        <div className='w-5 h-5 hover:cursor-pointer z-10 flex justify-center items-center'
                            onClick={() => navigate('/profile')}>
                            <BsFillPersonFill size='3em' className='hover:text-grey'/>
                        </div>
                        <Cart userCart={userCart} total={total}/>
                    </div>
                </div>
                {
                    open ?
                    <div className='lg:hidden w-screen h-screen bg-white z-[5] flex flex-col justify-start items-center absolute '>
                        <ul className='flex flex-col gap-10 mt-32'>
                            <div className='sm:hidden w-auto h-10  p-5 flex justify-center items-center hover:white rounded-full'
                                onClick={() => navigate('/')}>
                                <li className='cursor-pointer text-5xl'>HOME</li>
                            </div>
                            <div className='w-auto h-10  p-5 flex justify-center items-center hover:white rounded-full'
                                onClick={() => navigate('/shop')}>
                                <li className='cursor-pointer text-5xl'>SHOP</li>
                            </div>
                            <div className={`w-auto h-10 p-5 flex justify-center items-center hover:white rounded-full`}
                                onClick={() => navigate('/about')}>
                                <li className='cursor-pointer text-5xl'>ABOUT</li>
                            </div>
                            <div className='w-auto h-10 p-5 flex justify-center items-center hover:white rounded-full'
                                onClick={() => navigate('/support')}>
                                <li className='cursor-pointer text-5xl'>SUPPORT</li>
                            </div>
                        </ul>
                    </div>
                    : null
                }
            </div>
        )
    }
}

export default Navbar
