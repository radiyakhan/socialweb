import Image from 'next/image'
import React from 'react'
import img3 from "../../public/3.png"

const Insta = () => {
  return (
    <div>
      <div>
      <div className='main'>
        <div className='pic1'><Image alt= "ok" src={img3}/>   
        <div> 
        <div className='main2'>
        <h1>ABOUT INSTAGRAM</h1>
         <p>Instagram is a visual-based social media platform 
            launched in 2010, acquired by Facebook in 2012. 
            With over 2 billion active users, Instagram allows 
            users to share photos, videos, stories, and reels 
            showcasing their lives, interests, and creativity. 
            Features include filters, hashtags, geotagging, and 
            engagement tools. Users follow accounts ranging from 
            friends and influencers to businesses and celebrities. 
            Instagram focus on aesthetics and community-building 
            has made it a hub for social commerce, marketing, and 
            self-expression, with features like Instagram Shopping, 
            IGTV, and Reels contributing to its growing popularity.</p>
         </div></div>
         </div>

    </div>
    </div>
    </div>
  )
}

export default Insta
