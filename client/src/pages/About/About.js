import React from 'react'
import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'
import { useNavigate } from 'react-router-dom'
import Slide from '../../components/Slide'

function About() {
    const navigate = useNavigate();

  return (
    <div className='overflow-hidden'>

        <div className='w-screen h-[90vh] bg-light_grey overflow-hidden bg-team bg-cover bg-center'>
            <Navbar hover_color='black'/>
            <div className='w-full h-4/5 flex justify-center items-center'>
                <h1 className='text-6xl font-bold text-white text-center mb-28'>ABOUT ZACKTECH</h1>
            </div>

        </div>
        {/* Page 1 */}
        <div className='w-screen h-[130vh] sm:h-[110vh] relative mt-20'>
            <div className='w-screen mb-16 flex flex-col justify-center items-center gap-6'>
                <h1 className='text-4xl'>OUR STORY</h1>
                <p className='w-[90vw] md:w-[685px] text-center text-base'>We are a peripheral company dedicated to providing high-quality products for gamers and workers alike. Our company has been a trusted name in the industry for over 20 years, with a focus on design, innovation, and customer satisfaction. At our company, we understand that peripherals play a crucial role in enhancing the user experience, whether you're gaming, working, or simply browsing the web. That's why we carefully curate our product selection to offer only the best peripherals on the market. From keyboards and mice to headsets and controllers, we have everything you need to take your setup to the next level.</p>
                <p className='w-[90vw] md:w-[685px] text-center text-base'>Our team is passionate about gaming and technology, and we're always on the lookout for the latest trends and innovations. We work closely with our suppliers to ensure that our products meet the highest standards of quality, performance, and design. Whether you're a casual gamer or a hardcore enthusiast, we have something for you.</p>
            </div>
            <div className='w-screen h-[74vh] flex flex-col gap-10 justify-center items-center'>
                <Slide about='1' className='md:hidden'/>
                <div className='w-screen h-auto flex justify-center gap-10 '>
                    <div className='max-md:hidden md:w-[45vw] md:h-[33vh] xl:w-[575px] xd:h-[285px] overflow-hidden'>
                        <div className='w-[600px] h-[500px] bg-about1 bg-contain hover:scale-110 transition ease-in-out duration-300'/>
                    </div>
                    <div className='max-md:hidden md:w-[45vw] md:h-[33vh] xl:w-[575px] xd:h-[285px] overflow-hidden'>
                        <div className='w-[600px] h-[500px] bg-about2 bg-contain hover:scale-110 transition ease-in-out duration-300'/>
                    </div>
                </div>
                <div className='w-screen h-auto flex justify-center gap-10 '>
                    <div className='max-md:hidden md:w-[45vw] md:h-[33vh] xl:w-[575px] xd:h-[285px] overflow-hidden'>
                        <div className='w-[600px] h-[500px] bg-about3 bg-contain hover:scale-110 transition ease-in-out duration-300'/>
                    </div>
                    <div className='max-md:hidden md:w-[45vw] md:h-[33vh] xl:w-[575px] xd:h-[285px] overflow-hidden'>
                        <div className='w-[600px] h-[500px] bg-about4 bg-contain hover:scale-110 transition ease-in-out duration-300'/>
                    </div>
                </div>
            </div>
         </div>

        {/* Page 2 */}
            <div className='mb-20 mt-20 flex flex-col justify-center items-center'>
                <h1 className='text-3xl m-16'>MEET OUR LEADERSHIP TEAM</h1>
                <div className='flex flex-col md:flex-row justify-center items-center gap-10'>
                    <div className='flex flex-col justify-center items-center gap-5 overflow-hidden'>
                        <div className='w-[25vw] h-[25vw] max-md:w-[90vw] max-md:h-[90vw] xl:w-[300px] xl:h-[300px] relative overflow-hidden'>
                                <div className='w-[25vw] h-[25vw] max-md:w-[90vw] max-md:h-[90vw] xl:w-[300px] xl:h-[300px] bg-musk bg-contain'/>
                            </div>
                            <div className='flex flex-col justify-center items-end '>
                                <h2 className='font-bold text-base'>Elon Musk</h2>
                                <p className='text-base'>Chairperson</p>
                            </div> 
                        </div>
                        <div className='flex flex-col justify-center items-center gap-5'>
                            <div className='w-[25vw] h-[25vw] max-md:w-[90vw] max-md:h-[90vw] xl:w-[300px] xl:h-[300px] relative overflow-hidden'>
                                <div className='w-[25vw] h-[25vw] max-md:w-[90vw] max-md:h-[90vw] xl:w-[300px] xl:h-[300px] bg-me bg-contain'/>
                            </div>
                            <div className='flex flex-col justify-center items-center'>
                                <h2 className='font-bold text-base'>Zackary Devove</h2>
                                <p className='text-base'>President and Chief Executive Officer</p>
                            </div>
                        </div>
                        <div className='flex flex-col justify-center items-center gap-5 overflow-hidden'> 
                        <div className='w-[25vw] h-[25vw] max-md:w-[90vw] max-md:h-[90vw] xl:w-[300px] xl:h-[300px] relative overflow-hidden'>
                                <div className='w-[25vw] h-[25vw] max-md:w-[90vw] max-md:h-[90vw] xl:w-[300px] xl:h-[300px] bg-bezos bg-contain'/>
                            </div>
                            <div className='flex flex-col justify-center items-center'>
                                <h2 className='font-bold text-base'>Jeff Bezos</h2>
                                <p className='text-base'>Chief Financial Officer</p>
                            </div>
                    </div>
                </div>
            </div>

        {/* Page 3 */}
        <div className='w-screen h-auto p-20 bg-light_grey flex flex-col justify-center items-center'>
            <div className='w-[90vw] h-auto lg:w-[90vw] lg:h-[45vw] xl:w-[1200px] xl:h-[600px] flex lg:flex-row flex-col-reverse'>
                <div className='w-[90vw] pt-6 pb-16 lg:w-1/2 lg:h-full bg-white flex flex-col justify-center items-center'>
                    <div className='w-[70%] h-1/2 flex flex-col items-start gap-5'>
                        <h2 className='text-3xl'>OUR HISTORY</h2>
                        <p>Founded in 1999 in Paris, France, and quickly expanding to Europe, Zacktech started connecting people through innovative computer peripherals and many industry firsts, including the infrared cordless mouse, the thumb-operated trackball, the laser mouse, and more. We honor bold innovation and our founders, Elon Musk, Zackary Devove and Jeff Bezos.</p>
                    </div>
                </div>
                <div className='w-[90vw] h-[90vw] lg:w-1/2 lg:h-full bg-abouthistory bg-cover bg-no-repeat'/>
            </div>
            <div className='w-[90vw] h-auto lg:w-[90vw] lg:h-[45vw] xl:w-[1200px] xl:h-[600px] flex lg:flex-row flex-col'>
                <div className='w-[90vw] h-[90vw] lg:w-1/2 lg:h-full bg-aboutcareer bg-cover bg-center bg-no-repeat' />
                <div className='w-[90vw] pt-6 pb-16 lg:w-1/2 lg:h-full bg-white flex flex-col justify-center items-center'>
                    <div className='w-[70%] h-1/2 flex flex-col items-start gap-5'>
                        <h2 className='text-3xl'>CAREERS</h2>
                        <p>We are the sweet spot for people who are passionate about product, making a mark and having fun doing it.</p>
                        <button className='h-[50px] w-[200px] bg-footer text-sm text-white hover:bg-white hover:border hover:text-black transition' onClick={() => navigate('/soon')}>ZACKTECH JOBS</button>
                    </div>
                </div>
            </div>
            <div className='w-[90vw] h-auto lg:w-[90vw] lg:h-[45vw] xl:w-[1200px] xl:h-[600px] flex lg:flex-row flex-col-reverse'>
                <div className='w-[90vw] pt-6 pb-16 lg:w-1/2 lg:h-full bg-white flex flex-col justify-center items-center'>
                    <div className='w-[70%] h-1/2 flex flex-col items-start gap-5'>
                        <h2 className='text-3xl'>DESIGN AWARDS</h2>
                        <p>We keep design at the center of every team and every discipline, to create truly unique and meaningful experiences.</p>
                        <button className='h-[50px] w-[200px] bg-footer text-sm text-white hover:bg-white hover:border hover:text-black transition' onClick={() => navigate('/soon')}>PRODUCT AWARDS</button>
                    </div>
                </div>
                <div className='w-[90vw] h-[90vw] lg:w-1/2 lg:h-full bg-aboutdesign bg-cover bg-center bg-no-repeat'/>
            </div>
            <div className='w-[90vw] h-auto lg:w-[90vw] lg:h-[45vw] xl:w-[1200px] xl:h-[600px] flex lg:flex-row flex-col'>
                <div className='w-[90vw] h-[90vw] lg:w-1/2 lg:h-full bg-aboutsustainability bg-cover bg-center bg-no-repeat' />
                <div className='w-[90vw] pt-6 pb-16  lg:w-1/2 lg:h-full bg-white flex flex-col justify-center items-center'>
                    <div className='w-[70%] h-1/2 flex flex-col justify-center items-start gap-5'>
                        <h2 className='text-3xl'>SUSTAINABILITY</h2>
                        <p>At Zacktech, sustainability is not a buzzword or an afterthought. It’s a mindful principle we infuse into everything we do.</p>
                        <button className='h-[50px] w-[200px] bg-footer text-sm text-white hover:bg-white hover:border hover:text-black transition' onClick={() => navigate('/soon')}>SUSTAINABLE DESIGN</button>
                    </div>
                </div>
            </div>
        </div>

        <Footer />
    </div>
  )
}

export default About
