import { Search } from 'lucide-react'
import React from 'react'

const SearchSec = ({onSearchInput}:any) => {
  return (
    <div className='p-6  bg-gradient-to-br from-cyan-950 via-gray-400 to-cyan-950 flex justify-center items-center text-black flex-col sticky top-0 shadow-sm shadow-sky-900'>
        <h2 className='text-2xl font-semibold '>Pick a template</h2>
        <p>Let's get creative! What's your vision?</p>
        <div className='w-full flex justify-center'>
             <div className='flex gap-2 items-center p-2 border rounded-md bg-white text-black my-2 w-[40%]'>
                <Search/>
                <input type='text' placeholder='Search...'
                onChange={(event)=>onSearchInput(event.target.value)} className='bg-transparent w-full px-1 outline-none'/>
             </div>
        </div>
    </div>
  ) 
}

export default SearchSec    