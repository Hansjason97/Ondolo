import React from 'react'
import Hero from './Home/Hero'
import Services from './Home/Services'
import Portfolio from './Home/Portfolio'
import CallToAction from './Home/CallToAction'
import Articles from './Home/Articles'
import Contact from './Home/Contact'

import websiteIcon from '../images/website.svg'
import codeIcon from '../images/code.svg'
import mobileIcon from '../images/mobile.svg'
import supportIcon from '../images/support.svg'
import designIcon from '../images/design.svg'

function Home() {
  return (
    <div>
      <Hero />
      <section className='py-[80px] md:py-[120px] flex flex-col max-w-[1560px] mx-auto px-5 md:px-0'>
        <h2>Des Solutions sur mesure</h2>
        {/**List of services */}
        <div className='flex flex-col px-2 mx-auto pt-[120px] pb-[40px] md:flex-row gap-[40px]'>
          {/**card one */}
          <div className='px-5 py-[50px] bg-[#A1FFFF] max-w-[200px] rounded-[10px] shadow-sm'>
            <img src={websiteIcon} alt="website icon" className='mx-auto'/>
            <p className='text-[18px] font-semibold text-gray-900 text-center my-[10px]'>Création de Site Web</p>
            <p className='text-center text-gray-500'>Incontournable pour les sites vitrines et Boutiques en ligne</p>
          </div>
          {/**card two */}
          <div className='px-5 py-[50px] bg-[#FFEAA1] max-w-[200px] rounded-[10px] shadow-sm'>
            <img src={codeIcon} alt="code icon" className='mx-auto'/>
            <p className='text-[18px] font-semibold text-gray-900 text-center my-[10px]'>Développement d'applications Web</p>
            <p className='text-center text-gray-500'>Incontournable pour les sites vitrines et Boutiques en ligne</p>
          </div>
          {/**card three */}
          <div className='px-5 py-[50px] bg-[#C5A1FF] max-w-[200px] rounded-[10px] shadow-sm'>
            <img src={mobileIcon} alt="mobile icon" className='mx-auto'/>
            <p className='text-[18px] font-semibold text-gray-900 text-center my-[10px]'>Développement d'applications Mobile</p>
            <p className='text-center text-gray-500'>Incontournable pour les sites vitrines et Boutiques en ligne</p>
          </div>
          {/**card four */}
          <div className='px-5 py-[50px] bg-[#F7A1FF] max-w-[200px] rounded-[10px] shadow-sm'>
            <img src={designIcon} alt="design icon" className='mx-auto'/>
            <p className='text-[18px] font-semibold text-gray-900 text-center my-[10px]'>Infographie</p>
            <p className='text-center text-gray-500'>Incontournable pour les sites vitrines et Boutiques en ligne</p>
          </div>
          {/**card five */}
          <div className='px-5 py-[50px] bg-[#B4FFA1] max-w-[200px] rounded-[10px] shadow-sm'>
            <img src={supportIcon} alt="support icon" className='mx-auto'/>
            <p className='text-[18px] font-semibold text-gray-900 text-center my-[10px]'>Support</p>
            <p className='text-center text-gray-500'>Incontournable pour les sites vitrines et Boutiques en ligne</p>
          </div>
        </div>
        <button className='mx-auto'>En savoir plus</button>
      </section>
      <Portfolio />
      <CallToAction />
      <Services />
      <Articles />
      <Contact />
    </div>
  )
}

export default Home