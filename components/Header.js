import Image from 'next/image'
import React from 'react'

function Header() {
  return (
    <div>
        <div className='flex justify-between max-w-6xl'>
        <div className='relative hidden lg:inline-grid w-24'> 
            <Image src='/Untitled-3.svg' layout='fill' objectFit='contain'/>
        </div>

        <div className='relative w-10 h-10'>
            <Image src='/Untitled-2.svg' layout='fill' objectFit='contain'/>
        </div>

        </div>
    </div>
  )
}

export default Header