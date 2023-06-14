import React from 'react'
import CarouselFull from '../components/CarouselFull'
import IconBox from '../components/IconBox'
import { iconsHome } from '../data/data'
import car1 from '../images/car1.jpg'
import ImageBox from '../components/ImageBox'

function Home() {
  return (
    <div>
        <section id='home'>
            <CarouselFull />
        </section>
        <section className='max-w-7xl mx-auto px-2 xl:px-O py-10 xl:py-[120px] flex flex-col justify-center'>
            <div className='flex flex-col gap-8 mb-6'>
                <h4 className='mx-auto'>we are an awesome web agency</h4>
                <p className='mx-auto text-center'>The difference between a Designer and Developer when it comes to design skills, is the difference between shooting a bullet and throwing it</p>
            </div>
            <div className='flex flex-wrap gap-6'>
               { iconsHome.map((item, index) => (
                <IconBox key={index} icon={item.icon} title={item.title} content={item.content} />
               ))} 
            </div>
        </section>
        <section className='w-full mx-auto py-10 xl:py-[120px] flex flex-col justify-center'>
                <div className='mx-auto max-w-7xl mb-8 xl:mb-[60px]'>
                    <h4>our portfolio</h4>
                </div>
                <div className='flex flex-wrap gap-6'>
                        <ImageBox image={car1} />
                    </div>
        </section>
    </div>
  )
}

export default Home