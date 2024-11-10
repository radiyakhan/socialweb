import Image from 'next/image'
import React from 'react'
import img4 from "../../public/4.jpg"

const Tiktok = () => {
  return (
      <div className='main'>
        <div> 
        <div className='main2'>
        <h1>ABOUT TIKTOK</h1>
         <p>TikTok is a short-form video-sharing social media platform launched in China as Douyin in 2016 and rebranded globally 
           as TikTok in 2018. With over 1 billion active users, TikTok allows users to create and share 15-60 second videos showcasing 
           creativity, talent, or daily life, often set to music or other audio. Features include filters, effects, hashtags, duets, 
           and reactions. TikTok algorithm-driven For You page provides personalized content, making it a hub for entertainment, 
           dance, music, and community-building. Owned by ByteDance, TikTok has become a cultural phenomenon among Gen Z users, with 
           influencers, brands, and marketers leveraging its vast reach and creative possibilities.</p>
         </div></div>
        <div className='pic'><Image alt= "ok" src={img4}/></div>
    </div>
    
  )
}

export default Tiktok
