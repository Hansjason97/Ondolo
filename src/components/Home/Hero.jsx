import React from 'react'
import {hero, heroH1} from '../../data/lang'


function Hero() {
  //console.log(hero);
  return (
    <div className='bg-[url("https://i.imgur.com/xRSjGn9.png")] bg-cover'>
      <div className='max-w-[700px] mx-auto py-[120px] md:py-[200px] flex flex-col gap-[50px]'>
        <h1>{heroH1.fixed}</h1>
        <p className='text-center px-5 text-xl'>{hero.text}</p>
        <button className='mx-auto btn-hero'>Nous contacter</button>
      </div>
    </div>
  )
}

export default Hero