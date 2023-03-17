import React from 'react'
import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'
import { RxCross1 } from 'react-icons/rx'
import { useNavigate } from 'react-router-dom'

function Success() {
  const navigate = useNavigate();

  return (
    <div>
        <div className='w-screen h-screen flex flex-col relative overflow-hidden'>

            <div className='md:w-[50vw] md:h-[50vh] absolute bottom-0 right-0 rounded-tl-[450px] bg-red -z-10 '>
                <div className='w-[75vw] h-[75vw] lg:w-[736px] lg:h-[753px] bg-payfail bg-contain bg-center bg-no-repeat scale-90 absolute bottom-0  xl:left-28'/>
            </div>
            
            <Navbar />
            <div className='flex'>
            {/* Left */}
                <div className='w-screen md:w-[50%] flex justify-center items-center mt-8 xl:mt-16 2xl:mt-36'>
                    <div className='w-[60%] flex flex-col justify-start items-center gap-10'>
                      <RxCross1 size='8em' className='text-red'/>
                        <h1 className='text-5xl font-bold text-center'>PAYMENT FAILED</h1>
                        <hr className='w-full text-grey'/>
                        <p className='max-md:w-[90vw]'>We're sorry, but it looks like there was an issue processing your payment. Please double-check that the payment information you entered is correct and try again. If you continue to experience issues, please contact our support team for assistance. Thank you for your patience and understanding.</p>
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