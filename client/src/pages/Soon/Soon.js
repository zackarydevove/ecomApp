import React from 'react'
import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'

function Soon() {
  return (
    <div className='overflow-hidden'>
        <div className='w-screen h-screen'>
            <Navbar />
            <div className='w-screen h-[70%] flex flex-col justify-center items-center gap-10'>
                <h1 className='text-6xl font-bold text-center'>COMING SOON</h1>
                <div className='flex flex-col justify-center items-center'>
                    <p>We're currently working on the website.</p>
                    <p>We'll update soon, subscribe to be notified</p>
                </div>
                <button className='p-5 pl-6 pr-6 bg-footer text-white hover:cursor-pointer hover:bg-white hover:border hover:text-black'>NOTIFY ME</button>
            </div>
        </div>
        <Footer />
    </div>
  )
}

export default Soon
