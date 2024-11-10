import Image from 'next/image'
import React from 'react'
import img2 from "../../public/2.png"

const Facebok = () => {
  return (
    <div>
      <div className='main'>
        <div> 
        <div className='main2'>
        <h1>ABOUT FACEBOOK</h1>
         <p>Facebook is a social media platform founded in 2004 by Mark
          Zuckerberg, connecting over 2.9 billion monthly active users 
          worldwide. Users create profiles, share content, join groups, 
          and interact with friends, family, and interests. Facebook's 
          features include news feed, messaging, events, and pages for 
          personal, business, and community purposes. With subsidiaries 
          like Instagram, WhatsApp, and Oculus VR, Facebook generates 
          revenue primarily through advertising and payment processing 
          fees, revolutionizing online communication, social interaction, 
          and digital marketing.</p>
         </div></div>
        <div className='pic'><Image alt= "ok" src={img2}/></div>

    </div>
    </div>
  )
}

export default Facebok
