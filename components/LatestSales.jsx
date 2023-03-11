import React from 'react'

const SalesRow = ({name, img}) => (
  <div className=' flex justify-between mb-5 items-center'>
        <div className='flex gap-[15px] items-center'>
          <img src={img} alt="" />
          <div>
            <h4 className='text-[13px] font-semibold'>{name}</h4>
            <p>Top Agent</p>
          </div>
        </div>
        <h3 className='text-secondary text-[18px] font-semibold'>+$35</h3>
      </div>
)

const LatestSales = () => {
  return (
    <div className='p-[20px] bg-white  rounded-lg col-span-1 sm:col-span-2 lg:col-span-1'>
      <div className='flex justify-between items-center mb-[30px]'>
        <h1>Latest Sales</h1>
        <img src="/assets/right.svg" alt="" />
      </div>
      <SalesRow 
        name="Metro Jayakar Apartment"
        img="/assets/sale1.svg"
      />
      <SalesRow 
        name="Letdo Ji Hotel & Apartment"
        img="/assets/sale2.svg"
      />
      <SalesRow 
        name="Star Sun Hotel & Apartment"
        img="/assets/sale3.svg"
      />
      <SalesRow 
        name="Metro Jayakar Apartment"
        img="/assets/sale4.svg"
      />
    </div>
  )
}

export default LatestSales