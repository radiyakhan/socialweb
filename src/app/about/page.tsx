import Facebok from '@/components/Facebok'
import Insta from '@/components/Insta'
import Linkdin from '@/components/Linkdin'
import Tiktok from '@/components/Tiktok'
import Twitter from '@/components/Twitter'
import Youtube from '@/components/Youtube'
import React from 'react'

const page = () => {
  return (
    <div>
      <Facebok/>
      <Insta/>
      <Tiktok/>
      <Linkdin/>
      <Youtube/>
      <Twitter/>
    </div>
  )
}

export default page
