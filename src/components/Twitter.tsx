import Image from 'next/image'
import React from 'react'
import img7 from "../../public/7.jpg"


const Twitter = () => {
  return (
    <div>
      <div className='main'>
        <div className='pic1'><Image alt= "ok" src={img7}/>   
        <div> 
        <div className='main2'>
        <h1>ABOUT TWITTER</h1>
         <p>Twitter is a microblogging platform launched in 2006. With over 440 million monthly active users, Twitter allows users to share short messages (tweets) up to 280 characters. Features include hashtags, @mentions, retweets, replies, and direct messaging. Twitter serves as a real-time news feed, discussion forum, and social networking hub, connecting users with celebrities, politicians, businesses, and influencers. Users follow accounts to stay updated on news, trends, entertainment, sports, and politics, making Twitter a vital platform for information sharing, public discourse, and brand engagement. Its iconic features include trending topics, Twitter Polls, and Twitter Moments.</p>
            </div></div>
            </div>

    </div>
    </div>
  )
}

export default Twitter
