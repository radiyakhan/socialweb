import Image from 'next/image'
import React from 'react'
import img1 from "../../public/1.jpeg" 

const Hero = () => {
  return (
    <div>
        <div className='backpic'>
        <div className='text'>
            About Social Media
        </div>
        <Image src={img1} alt='bg'/>
        </div>
    </div>
  )
}

export default Hero