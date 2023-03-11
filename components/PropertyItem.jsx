import Link from 'next/link'
import React from 'react'

const PropertyItem = ({title, location, price, img, id}) => {
  return (
    <Link href={`/properties/show/${id}`}>
    <div className='flex flex-col w-full'>
        <img src={img} alt="" />
        <div className='flex w-full justify-between mt-[15px]'>
            <div>
                <div>{title}</div>
                <p className='flex gap-2'><img src="/assets/location.svg" alt="" />{location}</p>
            </div>
            <div className='bg-[#DADEFA] text-primary h-fit text-[15px]  rounded-lg py-1 px-[10px]'>${price}</div>
        </div>
    </div>
    </Link>
  )
}

export default PropertyItem
