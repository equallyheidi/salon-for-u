import Image from 'next/image'
import React from 'react'
import {
    SearchIcon,
    PlusCircleIcon,
    UserGroupIcon,
    HeartIcon,
    PaperAirplaneIcon,
    MenuIcon,
    HomeIcon,
  } from '@heroicons/react/outline'

function Header() {
  return (
    <div className='shadow-sm border-b bg-white sticky top-0 z-50'>
      <div className='flex justify-between max-w-6xl mx-5 lg:mx-auto'>
        <div className='relative hidden lg:inline-grid w-28 cursor-pointer'> 
            <Image src='/Untitled-3.svg' layout='fill' objectFit='contain'/>
        </div>

        <div className='relative w-10 lg:hidden flex-shrink-0 cursor-pointer'>
            <Image src='/Untitled-2.svg' layout='fill' objectFit='contain'/>
        </div>

        <div className='max-w-xs'>
        <div className='relative mt-1 p-3 rounded-md'>
          <div className='absolute inset-y-0 pl-3 items-center pointer-events-none'>
            <SearchIcon className='mt-5 h-5 w-5 text-gray-500' />
            </div>
            <input 
              className='bg-gray-50 block w-full pl-10 sm:text-sm border-gray-300 rounded-md focus:ring-black focus:border-black'
              type='text'
              placeholder='Search' />
            </div>
        </div>

        <div className='flex items-center justify-end space-x-4'>
          <HomeIcon className='navBtn'/>
          <MenuIcon className='h-6 md:hidden cursor-pointer' />

          <HeartIcon className='navBtn' />
        </div>

      </div>
    </div>
  )
}

export default Header