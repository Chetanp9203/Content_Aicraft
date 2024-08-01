import { UserButton } from '@clerk/nextjs'
import { Menu, MenuIcon, Search } from 'lucide-react'
import Image from 'next/image'
import React, { useState } from 'react'
import logo from '../../../public/Logo.svg'


const mlist = [
  {
    name: 'Home',
    path: '/dashboard'
  },
  {
    name: 'History',
    path: '/dashboard/history'
  },
  {
    name: 'Billing',
    path: '/dashboard/billing'
  },
  {
    name: 'Setting',
    path: '/dashboard/setting'
  },
]

const Header = () => {

  return (
    <div className='relative '>
      <div className='p-5 px-10 shadow-sm shadow-blue-100 border-b-2 flex justify-between items-center gap-2'>
      
        <div className='flex gap-2 items-center p-2 border rounded-md max-w-sm bg-white'>
          <Search />
          <input type="text" placeholder='Search...' className='outline-none text-gray-600' />
        </div>
        <div className='flex gap-10 items-center px-3'>
          <h2 className='bg-cyan-950 p-2 rounded-2xl text-sm text-white px-5 hidden md:block'>Join Pro Version just for ₹999/month</h2>
          <UserButton />
        </div>
      </div>
      
    </div>
  )
}

export default Header









