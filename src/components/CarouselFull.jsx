import React, { useEffect, useState } from 'react'
import { carousel } from '../data/data.js'
import { Link } from 'react-router-dom';



function CarouselFull() {


    const [currentIndex, setCurrentIndex] = useState(0);
  const prevSlide = ()=> {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? carousel.length -1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  }
  const nextSlide =() => {
    const isLastSlide = currentIndex === carousel.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  }
  const goToSlide = (slideIndex) => {
    setCurrentIndex(slideIndex);
  }

  
  useEffect(() => {
    const autoplay = () => {
        currentIndex === carousel.length - 1 ? setCurrentIndex(0) : setCurrentIndex(currentIndex + 1);
      }
    const intervalId = setInterval(autoplay, 3500);
    return () => {
        clearInterval(intervalId);
    };
  },[currentIndex]);

  return (
    <section className='w-full h-[100vh] m-auto relative group justify-center items-center'>
        <div style={{backgroundImage: `url(${carousel[currentIndex].image})`}} 
        className={`w-full h-full bg-center bg-cover bg-no-repeat duration-500`}></div>
        {/**Overlay */}
        <div className='absolute h-full w-full bg-black/70 top-0'></div>
        {/**left arrow */}
        <div className='hidden group-hover:block absolute top-[50%] translate-x-0 translate-y-[-50%] left-5 p-2 cursor-pointer text-white'
        onClick={prevSlide}>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-7 h-7">
            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
          </svg>
        </div>
        {/**right arrow */}
        <div className='hidden group-hover:block absolute top-[50%] translate-x-0 translate-y-[-50%] right-5 p-2 cursor-pointer text-white'
        onClick={nextSlide}>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-7 h-7">
            <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
          </svg>
        </div>
        {/**Content */}
        <div className='absolute top-[50%] translate-y-[-50%] left-[50%] translate-x-[-50%] max-w-7xl w-full'>
          <div className='p-2 md:px-2 md:py-12 w-full text-center flex flex-col gap-4 text-white'>
            <h1 className='text-center'>{carousel[currentIndex].title}</h1>
            <p className='px-4'>Welcome to Ondolo, your one-stop-shop for web development, design, and support services. We are a team of experienced professionals dedicated to delivering high-quality solutions that meet the unique needs of our clients.</p>
            <button className='mt-8'><Link to={carousel[currentIndex].link}>En savoir plus</Link></button>
          </div>
        </div>
        {/**Navigation */}
        <div className='absolute bottom-[5%] translate-y-[-50%] left-[50%] translate-x-[-50%] flex justify-center items-center rounded-full w-fit gap-5'>
          { carousel.map((item,slideIndex)=>(
            <div key={slideIndex} className={ slideIndex === currentIndex ? 'cursor-pointer text-white border-2 border-white rounded-full' : ' cursor-pointer text-white' }
            onClick={()=> goToSlide(slideIndex)}>
              <svg height="12" width="12">
                <circle cx="6" cy="6" r="3" fill="currentColor" /> 
              </svg>
            </div>
          ))}
        </div>
      </section>
  )
}

export default CarouselFull