import PropertyItem from '@/components/PropertyItem'
import PropertyList from '@/components/PropertyList'
import { List } from '@/data/PropList'
import { useRouter } from 'next/router'
import React from 'react'


const Properties = () => {
  const router = useRouter()
  return (
    <div>
      <div className='flex justify-between items-center'>
        <h1 className='text-[25px] font-bold'>All Properties</h1> 
        <button onClick={()=>router.push('/properties/create')} className='bg-primary text-white px-6 py-3 rounded-lg'>+ Add Property</button>
      </div>
      {/* <PropertyList /> */}
      <div className='bg-white p-[20px] mt-[20px] rounded-xl ease-in-out duration-300'>
        <h1 className='mb-[20px]'>Property List</h1>
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3  flex-wrap gap-[30px]'>
            {List.map((item, id) =>(
              <PropertyItem {...item} />
            ))}
        </div>
      </div>
    </div>
  )
}

export default Properties