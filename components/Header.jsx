import React from 'react'

// sticky top-0 right-0
const Header = () => {
  return (
    <div className=' flex justify-between items-center px-[30px] py-[17px] bg-white w-full sticky top-0 z-10'>
        <div>
          <div className=' bg-gray-100 w-[300px] px-3 py-[6px] rounded-md hidden md:flex'>
            <img src="/assets/search.svg" alt="" />
            <input className='w-full outline-none bg-transparent text-[12px] ml-1' type="text" placeholder='Search Property, Customer etc'/>
          </div>
          <div className='flex gap-4 md:hidden'>
            <img src="/assets/menu.svg" alt="" />
            <img src="/assets/search.svg" alt="" />
          </div>
        </div>
        <div className='flex gap-4'>
          <img src="/assets/alert.svg" alt="" />
          <div className='flex gap-2 items-center'>
            <img src="/assets/person.svg" alt="" />
            <div className='hidden sm:block'>
              <p className='font-bold text-black'>Hawkins Maru</p>
              <p className='text-typo'>Company Manager</p>
            </div>
          </div>
        </div>
    </div>
  )
}

export default Header