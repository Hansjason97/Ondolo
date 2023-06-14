import React from 'react'

function ImageBox(props) {
  return (
    <a className='w-[350px] h-[200px] mx-auto relative group bg-cover bg-center p-4'
    style={{backgroundImage: `url(${props.image})`}}
    href={props.link || '/'}>
        <div className='w-[330px] h-0 group-hover:h-[190px] bg-secondary/80 absolute duration-150 ease-in top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]'></div>
        <div className='w-full opacity-0 group-hover:opacity-100 text-white absolute duration-200 ease-in top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]'>
            <p className='tracking-wider font-semibold text-sm text-center'>{props.title || 'An amazing website'}</p>
        </div>
        <div className='w-fit absolute opacity-0 top-[120%] left-2 translate-y-[-50%] group-hover:top-[90%] group-hover:opacity-100 duration-300'>
            <p className='px-3 py-1 bg-white text-secondary text-xs rounded-full'>{props.tag || 'website'}</p>
        </div>
    </a>
  )
}

export default ImageBox