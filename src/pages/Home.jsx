import React from 'react'
import CarouselFull from '../components/CarouselFull'
import svg1 from '../images/code.svg'

function Home() {
  return (
    <div>
        <CarouselFull />
        <section className='max-w-7xl mx-auto px-2 xl:px-O py-10 xl:py-[120px] flex flex-col justify-center'>
            <div className='flex flex-col gap-8 mb-6'>
                <h4 className='mx-auto'>we are an awesome web agency</h4>
                <p className='mx-auto text-center'>The difference between a Designer and Developer when it comes to design skills, is the difference between shooting a bullet and throwing it</p>
            </div>
            <div className='flex gap-6'>
                <div className='flex flex-col gap-6 py-6'>
                    <img src={svg1} alt="" className='w-[70px]'/>
                </div>
            </div>
        </section>
    </div>
  )
}

export default Home