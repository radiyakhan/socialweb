import Link from 'next/link'
import React from 'react'

const Header = () => {
  return (
    <div>
      <div>
      <div className='header'>
      <nav className='header2'>
        <Link href={'/'}>Home</Link>
        <Link href={'/about'}>About</Link>
        <Link href={'#contact'}>Contact</Link>
      </nav>
      </div>
    </div>
    </div>
  )
}

export default Header
