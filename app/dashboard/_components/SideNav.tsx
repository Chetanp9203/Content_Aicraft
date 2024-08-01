'use client'
import Image from 'next/image'
import React, { useEffect } from 'react'
import logo from '../../../public/Logo.svg'
import { FileClock, Home, Settings, WalletCards } from 'lucide-react'
import { usePathname } from 'next/navigation'
import Link from 'next/link'
import Usagetrack from './Usagetrack'


export const SideNav = () => {

    const path = usePathname();
    useEffect(() => {
        // console.log(path);

    }, [])

    const mlist = [
        {
            name: 'Home',
            icon: Home,
            path: '/dashboard'
        },
        {
            name: 'History',
            icon: FileClock,
            path: '/dashboard/history'
        },
        {
            name: 'Billing',
            icon: WalletCards,
            path: '/dashboard/billing'
        },
        {
            name: 'Setting',
            icon: Settings,
            path: '/dashboard/setting'
        },
    ]
    return (
        <div className='relative'>
            <div aria-hidden="true" className="absolute inset-0 grid grid-cols-2 -space-x-52  opacity-60 dark:opacity-20">
                <div className="blur-[106px] h-56 bg-gradient-to-br from-primary to-purple-400 dark:from-blue-700"> </div>
                <div className="blur-[106px] h-32 bg-gradient-to-r from-cyan-400 to-sky-300 dark:to-indigo-600"></div>
            </div>
            <div className='h-screen relative shadow-sm p-5 border'>
                <div className='flex justify-center '>
                    <Image src={logo} alt='logo' className='h-44 w-auto' />
                </div>
                <hr className='my-5 border-gray-600' />
                <div className='mt-4 '>
                    {mlist.map((menu, index) => (
                        <Link key={index} href={menu.path}>
                            <div className={`flex gap-2 mb-2 p-3 hover:bg-cyan-950 hover:text-white rounded-lg cursor-pointer items-center text-md font-medium ${path == menu.path && 'bg-cyan-950 text-white'}`}>
                                <menu.icon className='h-6 w-6' />
                                <h2 className='text-lg'>{menu.name}</h2>
                            </div>

                        </Link>
                    ))}
                </div>
                <div className='absolute bottom-10 left-0 w-full'>
                    <Usagetrack />
                </div>
            </div>
        </div>
    )
}
