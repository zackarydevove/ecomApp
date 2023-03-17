import React from 'react'
import { useNavigate } from 'react-router-dom'

function Footer() {
    const navigate = useNavigate();
  return (
    <div className=' md:h-[55vh] lg:h-[50vh] bg-footer flex flex-col justify-center items-center text-white'> 
        <div className='w-[95%] flex-wrap md:w-[70%] lg:w-[717px] m-20 flex justify-between'>
            <ul className='flex flex-col gap-5 max-md:m-5  '>
                <h2 className='text-sm'>ABOUT</h2>
                <li className='text-sm hover:cursor-pointer' onClick={() => navigate('/about#top')}>Zacktech Story</li>
                <li className='text-sm hover:cursor-pointer' onClick={() => navigate('/soon')}>Careers</li>
                <li className='text-sm hover:cursor-pointer' onClick={() => navigate('/soon')}>Investors</li>
                <li className='text-sm hover:cursor-pointer' onClick={() => navigate('/soon')}>Blog</li>
                <li className='text-sm hover:cursor-pointer' onClick={() => navigate('/soon')}>Press</li>
                <li className='text-sm hover:cursor-pointer' onClick={() => navigate('/soon')}>Contact Us</li>
            </ul>

            <ul className='flex flex-col gap-5 max-md:m-5  '>
                <h2 className='text-sm'>VALUES</h2>
                <li className='text-sm hover:cursor-pointer' onClick={() => navigate('/soon')}>Social Impact</li>
                <li className='text-sm hover:cursor-pointer' onClick={() => navigate('/soon')}>Sustainability</li>
                <li className='text-sm hover:cursor-pointer' onClick={() => navigate('/soon')}>Recycling</li>
                <li className='text-sm hover:cursor-pointer' onClick={() => navigate('/soon')}>Accessibility</li>
            </ul>

            <ul className='flex flex-col gap-5 max-md:m-5  '>
                <h2 className='text-sm'>PARTNERS</h2>
                <li className='text-sm hover:cursor-pointer' onClick={() => navigate('/soon')}>Affiliate Program</li>
                <li className='text-sm hover:cursor-pointer' onClick={() => navigate('/soon')}>Influencer</li>
            </ul>

            <ul className='flex flex-col gap-5 max-md:m-5  '>
                <h2 className='text-sm'>CUSTOMERS</h2>
                <li className='text-sm hover:cursor-pointer' onClick={() => navigate('/soon')}>Return Policy</li>
                <li className='text-sm hover:cursor-pointer' onClick={() => navigate('/soon')}>Email Preferences</li>
                <li className='text-sm hover:cursor-pointer' onClick={() => navigate('/soon')}>Student Discount</li>
            </ul>
        </div>

        <hr className='w-[90%] md:w-[70%] lg:w-[717px]'/>

        <div className='w-[95%] mb-5 flex flex-wrap m-5 gap-5 justify-center items-center'>
            <p className='text-sm'>©2023 Zacktech. All rights reserved</p>

            <ul className='flex gap-5'>
                <li className='text-sm hover:cursor-pointer' onClick={() => navigate('/soon')}>Terms of Use</li>
                <li className='text-sm hover:cursor-pointer' onClick={() => navigate('/soon')}>Web Privacy Policy</li>
                <li className='text-sm hover:cursor-pointer' onClick={() => navigate('/soon')}>Product Privacy Policy</li>
                <li className='text-sm hover:cursor-pointer' onClick={() => navigate('/soon')}>Cookie Settings</li>
                <li className='text-sm hover:cursor-pointer' onClick={() => navigate('/soon')}>Sitemap</li>
            </ul>
        </div>
    </div>
  )
}

export default Footer
