import Image from 'next/image'
import React from 'react'
import img6 from "../../public/6.jpg"

const Youtube = () => {
  return (
    <div className='main'>
        <div> 
        <div className='main2'>
        <h1>ABOUT YOUTUBE</h1>
         <p>YouTube is a video-sharing platform launched in 2005, acquired by Google in 2006. With over 2.5 billion monthly active users, YouTube is the largest video-sharing platform globally. Users upload, share, and view videos ranging from music, vlogs, educational content, product reviews, live streams, and more. Features include channels, subscriptions, playlists, comments, and monetization options through AdSense. YouTube has become a hub for entertainment, education, marketing, and community-building, with influencers, content creators, and businesses leveraging its vast reach and diverse audience to share ideas, showcase talent, and advertise products.</p>
         </div></div>
        <div className='pic'><Image alt= "ok" src={img6}/></div>
    </div>
  )
}

export default Youtube
