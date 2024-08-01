import React from 'react'
import { Temp } from './TemplateList'
import Image from 'next/image'
import Link from 'next/link'

const TempCard = (item:Temp) => {
  return (
    <Link href={'/dashboard/content/' + item?.slug}>
    <div className='p-5 shadow-md rounded-md border bg-white/10 flex flex-col gap-3 cursor-pointer hover:scale-105 transition-all'>
        <Image src={item.icon} alt='icon'  width={50} height={50}/>
        <h2 className='font-medium text-md '>{item.name}</h2>
        <p className='text-gray-600 line-clamp-3 text-sm'>{item.desc}</p>
    </div>
    </Link>
  )
}

export default TempCard