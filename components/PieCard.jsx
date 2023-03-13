import { ScreenMode } from '@/context/context'
import React, { useContext } from 'react'
import dynamic from 'next/dynamic';
const ReactApexChart = dynamic(() => import('react-apexcharts'), { ssr: false });

const PieCard = ({title, value, series, colors}) => {
  const {dark} = useContext(ScreenMode)
  return (
    <div className={`flex justify-between w-[100%] sm:flex-1 min-h-[110px] ${dark ? 'bg-primarydark text-white' : 'bg-white' } rounded-lg items-center px-4`}> 
      <div>
        <p>{title}</p>
        <h1 className='text-[24px] font-bold'>{value}</h1>
      </div>
      <ReactApexChart
                options={{
                    chart: { type: "donut" },
                    colors,
                    legend: { show: false },
                    dataLabels: { enabled: false },
                }}
                series={series}
                type="donut"
                width="120px"
      />
    </div>
  )
}

export default PieCard