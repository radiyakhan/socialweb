import Image from 'next/image'
import React from 'react'
import img5 from "../../public/5.jpg"

const Linkdin = () => {
  return (
    <div>
      <div className='main'>
        <div className='pic1'><Image alt= "ok" src={img5}/>   
        <div> 
        <div className='main2'>
        <h1>ABOUT LINKDIN</h1>
         <p>LinkedIn is a professional networking platform launched 
            in 2002, acquired by Microsoft in 2016. With over 900 
            million users, LinkedIn connects professionals, businesses, 
            and organizations worldwide. Users create profiles showcasing 
            their work experience, skills, education, and achievements. 
            Features include networking, job searching, news sharing, 
            group discussions, and career development resources. LinkedIn 
            facilitates business connections, recruitment, and B2B 
            marketing, allowing users to build personal brands, expand 
            networks, and stay updated on industry news and trends. 
            Its premium features, such as LinkedIn Learning and Sales 
            Navigator, enhance professional growth and business opportunities</p>
         </div></div>
         </div>

    </div>
    </div>
  )
}

export default Linkdin
