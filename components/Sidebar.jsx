import Link from 'next/link'
import Dashboard from '../public/assets/dashboard.svg'
import Building from '../public/assets/building.svg'
import Agent from '../public/assets/agent.svg'
import Message from '../public/assets/message.svg'
import Profile from '../public/assets/profile.svg'
import { useRouter } from 'next/router'
import {MdArrowForwardIos, MdArrowBackIos} from 'react-icons/md'
import React, {useState, useContext} from 'react'
import { ScreenMode } from '@/context/context'


const Sidebar = () => {
  const [compress, setCompress] = useState(false)
  const router = useRouter()
  const {dark} = useContext(ScreenMode)
  return (
    <div className={`${compress? 'w-[70px]' : 'w-[230px]'} ease-in-out duration-200 hidden md:block h-[100vh] ${dark ? 'bg-primarydark' : 'bg-white' }  px-[10px] sticky top-0`}> 
      <div className='flex items-center gap-2 mb-[50px] p-3'>
          <img src="/assets/abode.svg" alt="abode" />
          <h1 className='font-bold text-[28px]'>{compress? '': 'Abodes'}</h1>
      </div>
      <Link href='/'>
        <div className={`mb-2 ease-in-out duration-300 ${dark && router.pathname != '/'? 'hover:bg-secondarydark': 'hover:bg-gray-100'} h-[45px] text-[16px] pl-3 w-full flex items-center ${router.pathname === '/' ? 'bg-primary hover:bg-secondary text-white' : 'text-typo' } rounded-lg`}>
          <Dashboard className={`${compress? 'w-full': ''} mr-1`}/> 
          {compress ? '' : <span className='ml-2'>Dashboard</span>}
          </div>        
      </Link>
      <Link href='/properties'>
        <div className={`mb-2 ease-in-out duration-300 ${dark && !router.pathname.startsWith('/properties')? 'hover:bg-secondarydark': 'hover:bg-gray-100'} h-[45px] pl-3 w-full flex items-center ${router.pathname.startsWith('/properties')  ? 'bg-primary hover:bg-secondary text-white' : 'text-typo' } rounded-lg`}>
          <Building className="mr-1"/> 
          {compress ? '' : <span className='ml-2'>Properties</span>}
        </div>        
      </Link>
      <Link href='/agent'>
        <div className={`mb-2 ease-in-out duration-300 ${dark && router.pathname != '/agent'? 'hover:bg-secondarydark': 'hover:bg-gray-100'} h-[45px] px-3 w-full flex items-center ${router.pathname === '/agent' ? 'bg-primary hover:bg-secondary text-white' : 'text-typo' } rounded-lg`}>
          <Agent className="mr-1"/> 
          {compress ? '' : <span className='ml-2'>Agents</span>}
        </div>        
      </Link>
      
      <Link href='/message'>
        <div className={`mb-2 ease-in-out duration-300 ${dark && router.pathname != '/message'? 'hover:bg-secondarydark': 'hover:bg-gray-100'} h-[45px] px-3 w-full flex items-center ${router.pathname === '/message' ? 'bg-primary hover:bg-secondary  text-white' : 'text-typo' } rounded-lg`}>
          <Message className="mr-1"/> 
          {compress ? '' : <span className='ml-2'>Message</span>}
        </div>        
      </Link>
      <Link href='/profile'>
        <div className={`mb-2 ease-in-out duration-300 ${dark && router.pathname != '/profile' ? 'hover:bg-secondarydark': ''} hover:bg-gray-100 h-[45px] px-3 w-full flex items-center ${router.pathname === '/profile' ? 'bg-primary hover:bg-secondary text-white' : 'text-typo' } rounded-lg`}>
          <Profile className="mr-1"/>
          {compress ? '' : <span className='ml-2'>My Profile</span>}
        </div>        
      </Link>
      <button onClick={()=> setCompress(!compress)} className='absolute flex justify-center items-center bottom-0 left-0 w-full h-12 bg-primary hover:bg-secondary ease-in-out duration-300'>
        {compress? <MdArrowForwardIos className='text-white text-[20px]' />: <MdArrowBackIos className='text-white text-[20px]'/> }
      </button>
    </div>
  )
}

export default Sidebar