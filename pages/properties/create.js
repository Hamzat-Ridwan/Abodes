import { ScreenMode } from '@/context/context'
import React, { useContext } from 'react'

const create = () => {
  const {dark} = useContext(ScreenMode)
  return (
    <div>
      <h1 className='text-[25px] font-bold'>Add Property</h1> 
      <div className={`${dark ? 'bg-primarydark text-white' : 'bg-white' } rounded-lg p-[20px] mt-3`}>
        <div className='flex flex-col w-full mb-[20px]'>
          <label htmlFor="name">Enter Property Name</label>
          <input className={`border border-gray-300 rounded-lg h-[50px] ${dark ? 'bg-primarydark text-white' : 'bg-white' } p-[10px] mt-1 outline-none`} type="text" name='name' />
        </div>
        <div className='flex flex-col w-full mb-[20px]'>
          <label htmlFor="name">Enter Description</label>
          <textarea placeholder='Write description' className={`border p-[10px] mt-1 border-gray-300 rounded-lg h-[130px] ${dark ? 'bg-primarydark text-white' : 'bg-white' } outline-none`} type="text" name='name' />
        </div>
        <div className='flex gap-[20px]'>
          <div className='flex flex-col mb-[20px] relative w-[60%]'>
            <label htmlFor="name">Select Property Type</label>
            <select name="" id="" className={`border border-gray-300 rounded-lg h-[50px] p-[10px] mt-1 ${dark ? 'bg-primarydark text-white' : 'bg-white' } outline-none`}>
              <option className='h-[40px] absolute top-full left-0 right-0 z-10 p-2'>Detached</option>
              <option>Apartment</option>
              <option>Duplex</option>
              <option>Bungalow</option>
            </select>
          </div>
          <div className='flex flex-col w-[40%] mb-[20px]'>
            <label htmlFor="name">Enter Price</label>
            <input className={`border border-gray-300 rounded-lg h-[50px] p-[10px] ${dark ? 'bg-primarydark text-white' : 'bg-white' } mt-1 outline-none`} type="number" name='name' />
          </div>
        </div>
        <div className='flex flex-col w-full mb-[20px]'>
          <label htmlFor="name">Enter Location</label>
          <input className={`border border-gray-300 rounded-lg h-[50px] p-[10px] mt-1 ${dark ? 'bg-primarydark text-white' : 'bg-white' } outline-none`} type="text" name='name' />
        </div>
        <button className='bg-primary rounded-lg text-white p-[40px] py-3'>Submit</button>
      </div>
    </div>
  )
}

export default create