import React from 'react'
import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'
import { AiOutlineCheck } from 'react-icons/ai'
import { useNavigate } from 'react-router-dom'

function Success() {
  const navigate = useNavigate();

  return (
    <div>
        <div className='w-screen h-screen flex flex-col relative overflow-hidden'>
        
            <div className='md:w-[50vw] md:h-[50vh] absolute bottom-0 right-0 rounded-tl-[450px] bg-green -z-10 '>
                <div className='w-[75vw] h-[75vw] lg:w-[736px] lg:h-[753px] bg-paysuccess bg-contain bg-center bg-no-repeat scale-90 absolute bottom-0  xl:left-28'/>
            </div>
            
            <Navbar />
            <div className='flex'>
            {/* Left */}
                <div className='w-screen md:w-[50%] flex justify-center items-center mt-8 xl:mt-16 2xl:mt-36'>
                    <div className='w-[60%] flex flex-col justify-start items-center gap-10'>
                        <AiOutlineCheck size='8em' className='text-green'/>
                        <h1 className='text-5xl font-bold text-center'>PAYMENT ACCEPTED</h1>
                        <hr className='w-full text-grey'/>
                        <p className='max-md:w-[90vw]'>Great news! Your payment has been confirmed through Stripe and your purchase is now complete. Thank you for choosing to shop with us.</p>
                        <button className='w-full p-5 bg-footer text-white hover:bg-white hover:text-black hover:border'
                            onClick={() => navigate('/')}>
                            Back to home
                        </button>
                    </div>
                </div>
            </div>
        </div>
        <Footer/>
    </div>
  )
}

export default Success
