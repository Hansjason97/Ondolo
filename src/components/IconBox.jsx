import React from 'react'
import defaultIcon from '../images/code.svg'

function IconBox(props) {
  return (
    <div className='max-w-sm flex flex-col gap-6 py-6 mx-auto text-center'>
                    <img src={props.icon || defaultIcon} alt="" className='h-[70px] mx-auto'/>
                    <h6 className='uppercase text-xl font-semibold tracking-wide'>{props.title || 'default title'}</h6>
                    <p className='text-gray-600'>{props.content || 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repellat harum id accusamus at omnis, voluptas facilis praesentium, excepturi error perspiciatis culpa ab quos, blanditiis quisquam voluptatem ipsa eaque consequuntur. Est.'}</p>
                </div>
  )
}

export default IconBox