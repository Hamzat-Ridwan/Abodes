import { ScreenMode } from '@/context/context'
import React, { useContext } from 'react'

const Customer = () => {
    const {dark} = useContext(ScreenMode)
  return ( 
    <div className={` ${dark ? 'bg-primarydark text-white' : 'bg-white' } flex flex-col rounded-lg relative`}>
        <div className=' flex justify-between p-[20px]'>
            <h1>Customer</h1>
            <img className='mr-2' src="/assets/dots.svg" alt="" />
        </div>
        <div className='p-[20px] pt-0'>
            <p className='mb-[20px]'>Total Customers</p>
            <div className='flex justify-between items-center'>
                <div>
                    <h2 className='text-[26px] font-semibold'>5007K</h2>
                    <h5 className='text-[#2ED480]'>21.77%</h5>
                </div>
                <img src="/assets/customer-c1.svg" alt="" />
            </div>
        </div>
        <div className='bg-gray-200 h-[2px] w-full mt-[20px] mb-[10px]' />
        <div className='p-[20px]'>
            <p className='mb-[20px]'>New Customers This Month</p>
            <div className='flex justify-between items-center'>
                <div>
                    <h2 className='text-[26px] font-semibold'>5007K</h2>
                    <h5 className='text-[#2ED480]'>21.77%</h5>
                </div>
                <img src="/assets/customer-c1.svg" alt="" />
            </div>
        </div>
    </div>
  )
}

export default Customer