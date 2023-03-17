import React, { useState } from 'react';
import { BsChevronCompactLeft, BsChevronCompactRight } from 'react-icons/bs';
import { RxDot, RxDotFilled } from 'react-icons/rx';

function Slide({about}) {
  let slides = []
  if (about === '0') {
    slides = [
        { url: require('../images/1.jpg')},
        { url: require('../images/2.jpg')},
        { url: require('../images/3.jpg')},
        { url: require('../images/4.jpg')},
        { url: require('../images/5.jpg')},
      ];
  } else {
    slides = [
      { url: require('../images/about1.png')},
      { url: require('../images/about2.png')},
      { url: require('../images/about3.png')},
      { url: require('../images/about4.png')},
    ]
  }
    
      const [currentIndex, setCurrentIndex] = useState(0);
    
      const prevSlide = () => {
        const isFirstSlide = currentIndex === 0;
        const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
        setCurrentIndex(newIndex);
      };
    
      const nextSlide = () => {
        const isLastSlide = currentIndex === slides.length - 1;
        const newIndex = isLastSlide ? 0 : currentIndex + 1;
        setCurrentIndex(newIndex);
      };
    
      const goToSlide = (slideIndex) => {
        setCurrentIndex(slideIndex);
      };
    
      return (
        <div className='h-[80vh] w-screen relative group'>
            <div style={{ backgroundImage: `url(${slides[currentIndex].url})` }}
                className='w-full h-full bg-center bg-cover duration-500'>                

            <div className='flex justify-center absolute bottom-0 left-[50%] -translate-x-[50%]'>
                {slides.map((slide, slideIndex) => (
                <div
                    key={slideIndex}
                    onClick={() => goToSlide(slideIndex)}
                    className='text-4xl cursor-pointer mb-4'>
                    {
                        currentIndex === slideIndex ? <RxDot color="white"/> : <RxDotFilled color="white" />
                    }
                </div>
                ))}
            </div>

            <div className='hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] left-5 text-2xl  p-2 cursor-pointer'>
                <BsChevronCompactLeft onClick={prevSlide} size={30} color="white"/>
            </div>

            <div className='hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] right-5 text-2xl p-2 cursor-pointer'>
                <BsChevronCompactRight onClick={nextSlide} size={30} color="white"/>
            </div>

            </div>
        </div>
      );
    }

export default Slide
