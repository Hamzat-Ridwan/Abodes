import React from 'react'
import Header from './Header'
import Sidebar from './Sidebar'

const Layout = ({children}) => {
  return (
    <div className='flex'>
        <Sidebar />
        <div className='w-full'>
          <Header />
          <div className='bg-gray-100 p-[20px]'>
            {children}
          </div>
        </div>
    </div>
  )
}

export default Layout