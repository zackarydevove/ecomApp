import React from 'react'
import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'
import { FaUser } from 'react-icons/fa'
import { IoMdMail } from 'react-icons/io'
import { RiMessage2Fill } from 'react-icons/ri'

function Support() {
  return (
    <div className='overflow-hidden bg-light_grey'>
        <Navbar />
        <div className='h-[92vh] flex justify-center max-lg:mt-32 lg:items-center relative'>
            {/* Image  */}
            <div className='lg:w-[70vw] lg:h-[70vh] lg:z-10 bg-mail bg-contain bg-no-repeat absolute left-32 bottom-40' />

            {/* Contact Form */}
            <div className='lg:z-20 w-[90vw] lg:w-[35vw] lg:h-[72vh] flex flex-col justify-start items-center gap-10 lg:absolute lg:translate-x-[50%]'>
                <h2 className='text-5xl mb-10'>Contact Us</h2>
                <div className='w-[100%] h-[55px] rounded-full flex items-center bg-white'>
                    <IoMdMail className='ml-6 mr-3'/>
                    <input type='email' className='w-[80%] bg-white' placeholder='Email'></input>
                </div>

                <div className='w-[100%] h-[55px] rounded-full flex items-center bg-white' >
                    <FaUser className='ml-6 mr-3' />
                    <input type='text' className='w-[80%] bg-white' placeholder='Name'></input>
                </div>

                <div className='w-[100%] h-[30%] rounded-3xl flex items-start bg-white' >
                    <RiMessage2Fill className='ml-6 mr-3 mt-5' />
                    <textarea type='text' className='w-[80%] h-[90%] mt-4 bg-white resize-none' placeholder='Write your message here' />
                </div>

                <button className='w-full h-14 bg-footer text-white'>SEND</button>
                
            </div>
        </div>
        <Footer />

    </div>
  )
}

export default Support
