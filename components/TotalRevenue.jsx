import { TotalRevenueOptions, TotalRevenueSeries } from '@/data/TotalRevData'
import { ScreenMode } from '@/context/context'
import React, { useContext } from 'react'
import dynamic from 'next/dynamic';
const ReactApexChart = dynamic(() => import('react-apexcharts'), { ssr: false });

const TotalRevenue = () => {
    const {dark} = useContext(ScreenMode)
  return (
    <div className={`flex flex-1 p-4 ${dark ? 'bg-primarydark text-white' : 'bg-white' } flex-col rounded-lg`}>
        <h1>Total Revenue</h1>
        <div>
            <div className='flex gap-[50px] my-[20px]'>
                <h1 className='text-[28px]'>$124576</h1>
                <div className='flex items-center gap-2'>
                    <img src="/assets/arrow.svg" alt="" />
                    <div className=''>
                        <h5>0.8%</h5>
                        <p className='text-[10px]'>Than Last Month</p>
                    </div>
                </div>
            </div>
        </div>
        <ReactApexChart
            series={TotalRevenueSeries}
            type="bar"
            height={310}
            options={TotalRevenueOptions}
        />
    </div>
  )
}

export default TotalRevenue