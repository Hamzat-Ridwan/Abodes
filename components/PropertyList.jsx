import React from 'react'
import PropertyItem from './PropertyItem'

const PropertyList = () => {
  return (
    <div className='bg-white p-[20px] mt-[20px] rounded-xl ease-in-out duration-300'>
        <h1 className='mb-[20px]'>Property List</h1>
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3  flex-wrap gap-[30px]'>
          <PropertyItem 
            title="Star Sun Hotel & Apartment"
            location="North Carolina, USA"
            price='500'
            img='/assets/property1.svg'
            id='1'
          />
          <PropertyItem 
            title="Star Sun Hotel & Apartment"
            location="North Carolina, USA"
            price='500'
            img='/assets/property2.svg'
            id='2'
          />
          <PropertyItem 
            title="Star Sun Hotel & Apartment"
            location="North Carolina, USA"
            price='500'
            img='/assets/property3.svg'
            id='3'
          />
          
        </div>
    </div>
  )
}

export default PropertyList