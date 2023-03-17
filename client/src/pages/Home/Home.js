import React from 'react'
import Footer from '../../components/Footer'
import Navbar from '../../components/Navbar'
import Slide from '../../components/Slide'
import { AiOutlineRight } from 'react-icons/ai'
import { useNavigate } from 'react-router-dom'

function Home() {
    const navigate = useNavigate();

  return (
    <div className='overflow-hidden'>
            <Navbar hover_color='black'/>
        {/* Page 1 */}
        <div className='w-screen h-[75vh] bg-4 bg-cover bg-center bg-no-repeat overflow-hidden'>
            <div className='h-[100%] flex flex-col justify-center items-center xl:items-start xl:absolute xl:right-60 xl:bottom-12 gap-5'>
                <div>
                    <h1 className='text-5xl sm:text-7xl max-w-[500px] w-64 sm:w-96 text-white max-xl:text-center'>SHOW UP YOUR WAY</h1>
                </div>
                <p className='text-xl text-white max-md:text-center max-sm:w-[90%]'>Look and sound natural on every video call</p>
                <div className='flex lg:flex-row flex-col gap-5'>
                    <button className='p-5 bg-white text-black hover:text-white hover:bg-opacity-0 hover:border-2 transition'
                        onClick={() => navigate('/shop')}>DISCOVER B50</button>
                    <button className='p-5 bg-white text-black hover:text-white hover:bg-opacity-0 hover:border-2 transition'
                        onClick={() => navigate('/shop')}>DISCOVER M20 </button>
                </div>
            </div>
        </div>

        {/* Page 2 */}
        <div className='w-screen h-auto pt-10 pb-10 md:h-[120vh] flex flex-col justify-center gap-20'>
            <div className='w-screen flex flex-col md:flex-row justify-center items-center gap-6'>
                <div>
                    <div className='xl:w-96 xl:h-96 md:w-[30vw] md:h-[30vw] w-[90vw] h-[90vw] bg-big_img1 bg-contain bg-no-repeat'/>
                    <div className='flex flex-col pt-5 gap-2'>
                        <h1 className='text-xl font-bold'>OWN YOUR SPACE</h1>
                        <p className='text-base'>B70 Slim Keyboard Mouse Combo</p>
                        <div className='flex items-center gap-3 hover:cursor-pointer'>
                            <button className='text-sm font-bold'
                                onClick={() => navigate('/shop')}>DISCOVER B70</button>
                            <AiOutlineRight size={'1.2em'} onClick={() => navigate('/shop')}/>
                        </div>
                    </div>
                </div>
                <div>
                    <div className='xl:w-96 xl:h-96 md:w-[30vw] md:h-[30vw] w-[90vw] h-[90vw]  bg-big_img2 bg-contain bg-no-repeat'/>
                    <div className='flex flex-col pt-5 gap-2'>
                        <h1 className='text-xl font-bold'>OWN YOUR SPACE</h1>
                        <p className='text-base'>B70 Slim Keyboard Mouse Combo</p>
                        <div className='flex items-center gap-3 hover:cursor-pointer'>
                            <div href="pipi" className='text-sm font-bold'
                                onClick={() => navigate('/shop')}>DISCOVER B70</div>
                            <AiOutlineRight size={'1.2em'} onClick={() => navigate('/shop')} />
                        </div>
                    </div>
                </div>
                <div>
                    <div className='xl:w-96 xl:h-96 md:w-[30vw] md:h-[30vw] w-[90vw] h-[90vw]  bg-big_img3 bg-contain bg-no-repeat'/>
                    <div className='flex flex-col pt-5 gap-2'>
                        <h1 className='text-xl font-bold'>CREATE YOUR DESIGN</h1>
                        <p className='text-base'>X250 Slim Tablet Pen Combo</p>
                        <div className='flex items-center gap-3 hover:cursor-pointer'>
                            <div href="pipi" className='text-sm font-bold'
                                onClick={() => navigate('/shop')}>DISCOVER X250</div>
                            <AiOutlineRight size={'1.2em'} onClick={() => navigate('/shop')}/>
                        </div>
                    </div>
                </div>
            </div>
            <div className='flex flex-col gap-8 justify-center items-center'>
                <h1 className='text-3xl'>RECOMMENDED FOR YOU</h1>
                <div className='w-[70%] flex justify-center items-center gap-8'>
                    <div className='flex flex-col gap-3'>
                        <div className='w-56 h-56 bg-product4 bg-contain bg-no-repeat hover:scale-150 hover:cursor-pointer transition bg-center' onClick={() => navigate('/shop')}/>
                        <h2 className='text-xl font-bold'>M20 PRO</h2>
                        <p className='w-56 text-base'>Advanced Wireless Pro Mouse</p>
                        <p>$59,99</p>  
                    </div>
                    <div className='sm:flex-col sm:gap-3 hidden sm:flex'>
                        <div className='w-56 h-56 bg-product5 bg-contain bg-no-repeat hover:scale-150 hover:cursor-pointer transition bg-center' onClick={() => navigate('/shop')}/>
                        <h2 className='text-xl font-bold'>M20 PRO</h2>
                        <p className='w-56 text-base'>Advanced Pro Keyboard</p>
                        <p>$59,99</p>  
                    </div>
                    <div className='sm:flex-col sm:gap-3 hidden md:flex'>
                        <div className='w-56 h-56 bg-product6 bg-contain bg-no-repeat hover:scale-150 hover:cursor-pointer transition bg-center' onClick={() => navigate('/shop')}/>
                        <h2 className='text-xl font-bold'>X250 TABLET</h2>
                        <p className='w-56 text-base'>Slim Tablet</p>
                        <p>$479,99</p>  
                    </div>
                    <div className='sm:flex-col sm:gap-3 hidden lg:flex'>
                        <div className='w-56 h-56 bg-product9 bg-contain bg-no-repeat hover:scale-150 hover:cursor-pointer transition bg-center' onClick={() => navigate('/shop')}/>
                        <h2 className='text-xl font-bold'>X20 Headphone</h2>
                        <p className='w-56 text-base'>Best surrounded sound</p>
                        <p>$89,99</p>  
                    </div>
                    <div className='sm:flex-col sm:gap-3 hidden xl:flex'>
                        <div className='w-56 h-56 bg-product1 bg-contain bg-no-repeat hover:scale-150 hover:cursor-pointer transition bg-center' onClick={() => navigate('/shop')}/>
                        <h2 className='text-xl font-bold'>B70 SPEAKER</h2>
                        <p className='w-56 text-base'>3D Movie Speaker</p>
                        <p>$89,99</p>  
                    </div>
                </div>
            </div>
        </div>

        <div className='h-[75vh] relative bg-light_grey'>
            <div className='w-full h-full bg-home2_bg bg-cover max-md:bg-center xl:bg-contain bg-no-repeat absolute xl:left-10 xl:bottom-0'/>
            <div className='flex flex-col h-full justify-center items-center gap-7 md:absolute  md:right-28 md:top-[50%] md:-translate-y-[50%]'>
                <h2 className='z-10 text-4xl w-96 font-bold max-md:text-center'>FIND THE BEST PRODUCTS FOR YOUR WORKSPACE</h2>
                <p className='z-10 text-sm w-96 max-md:text-center'>Upgrade your workstation with the latest and most efficient computer peripherals, exclusively available at our shop!.</p>
                <button className='z-10 bg-purple h-12 w-44 text-sm hover:bg-light_grey hover:border'
                    onClick={() => navigate('/shop')}>SEE PRODUCTS</button>
            </div>
        </div>

        <div className='w-screen h-[90vh] flex justify-center items-center'>
            <div className='w-full lg:w-[95%] xl:w-[1248px] h-[77%] xl:h-[656px] flex gap-6 justify-center items-center'>
                {/* colonne gauche */}
                <div className='w-[95%] lg:w-[70%] xl:w-[875px] h-full flex flex-col gap-6'>
                    {/* up */}
                    <div className='w-full h-[67%] xl:h-[442px]  overflow-hidden relative hover:cursor-pointer'
                        onClick={() => navigate('/shop')}>
                        <div className='w-full h-full bg-micekeyboard bg-cover bg-center bg-no-repeat hover:scale-110 transition'/>
                        <button className='absolute bottom-10 left-[50%] translate-x-[-50%] font-bold'>MICE & KEYBOARD</button>
                    </div>
                    {/* down */}
                    <div className='w-full h-[33%] xl:h-[217px] flex gap-6'>
                        {/* left */}
                        <div className='w-full sm:w-[50%] h-full overflow-hidden relative hover:cursor-pointer'
                            onClick={() => navigate('/shop')}>
                            <div className='w-full h-full bg-tablet bg-cover bg-center bg-no-repeat hover:scale-110 transition' />
                            <button className='absolute bottom-10 left-[50%] translate-x-[-50%] font-bold'>TABLET</button>
                        </div>
                        {/* right */}
                        <div className='hidden sm:block sm:w-[50%] h-full overflow-hidden relative hover:cursor-pointer'
                            onClick={() => navigate('/shop')}>
                            <div className='w-full h-full bg-headphone bg-cover bg-center bg-no-repeat hover:scale-110 transition' />
                            <button className='absolute bottom-10 left-[50%] translate-x-[-50%] font-bold'>HEADPHONE</button>
                        </div>
                    </div>
                </div>
                {/* colonne droite */}
                <div className='hidden lg:flex lg:w-[30%] h-full flex-col gap-6'>
                    {/* up */}
                    <div className='w-full h-[35%] overflow-hidden relative hover:cursor-pointer'
                        onClick={() => navigate('/shop')}>
                        <div className='w-full h-full bg-streaming bg-cover bg-center bg-no-repeat hover:scale-110 transition' />
                        <button className='absolute top-10 left-[50%] translate-x-[-50%] font-bold'>STREAMING</button>
                    </div>
                    {/* down */}
                    <div className='w-full h-[65%] overflow-hidden relative hover:cursor-pointer'
                        onClick={() => navigate('/shop')}>
                        <div className='w-full h-full bg-webcamvideo bg-cover bg-center bg-no-repeat hover:scale-110 transition' />
                        <button className='absolute bottom-10 left-[50%] translate-x-[-50%] font-bold'>WEBCAM</button>
                    </div>
                </div>
            </div>
        </div>

        {/* Page 4 */}
        <Slide about='0' />

        <Footer />

        <div className='hidden bg-product1'/>
        <div className='hidden bg-product2'/>
        <div className='hidden bg-product3'/>
        <div className='hidden bg-product4'/>
        <div className='hidden bg-product5'/>
        <div className='hidden bg-product6'/>
        <div className='hidden bg-product7'/>
        <div className='hidden bg-product8'/>
        <div className='hidden bg-product9'/>
        <div className='hidden bg-product10'/>
        <div className='hidden bg-product11'/>
        <div className='hidden bg-product12'/>
    </div>
  )
}

export default Home
