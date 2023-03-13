import { propertyReferralsInfo } from '@/data/PropRefData'
import { ScreenMode } from '@/context/context'
import React, { useContext } from 'react'

const ProgressItem=({title, percentage, color})=>(
  <div className='w-full mb-6'>
    <div className='w-full flex justify-between mb-3'>
      <h4>{title}</h4>
      <h5>{percentage}</h5>
    </div>
    <div className='w-full rounded-full bg-gray-100 h-[8px] relative'>
      <div style={{background: color, width: percentage}} className={`rounded-full h-full absolute`}></div>
    </div>
  </div>
)

const PropertyReferrals = () => {
  const {dark} = useContext(ScreenMode)
  return (
    <div className={`flex min-w-[390px] p-4 ${dark ? 'bg-primarydark text-white' : 'bg-white' } flex-col rounded-lg `}>
      <h1 className='mb-[40px]'>Property Referrals</h1>
      <div>
        {propertyReferralsInfo.map((bar)=>
        <ProgressItem key={bar.title} {...bar} />
        )}
      </div>
    </div>
  )
}

export default PropertyReferrals