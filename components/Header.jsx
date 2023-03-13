import { ScreenMode } from '@/context/context'
import Link from 'next/link'
import React, { useContext, useState } from 'react'
import { useRouter } from 'next/router'
import Menu from '../public/assets/menu.svg'
import Dashboard from '../public/assets/dashboard.svg'
import Building from '../public/assets/building.svg'
import Agent from '../public/assets/agent.svg'
import Message from '../public/assets/message.svg'
import Profile from '../public/assets/profile.svg'
import {MdArrowForwardIos, MdArrowBackIos, MdClose, MdDarkMode} from 'react-icons/md'
import {HiLightBulb} from 'react-icons/hi'
import { AnimatePresence, motion } from "framer-motion";


// sticky top-0 right-0
const Header = () => {
  const {dark, setDark} = useContext(ScreenMode)
  const [compress, setCompress] = useState(false)
  const router = useRouter()
  const [showSidebar, setShowSidebar] = useState(false)
  
  return (
    <div className={` flex justify-between items-center px-[30px] py-[17px] ${dark ? 'bg-primarydark' : 'bg-white' } w-full sticky top-0 z-10`}>
        <div>
          <div className={` ${dark? 'bg-secondarydark': 'bg-gray-100'} w-[300px] px-3 py-[6px] rounded-md hidden md:flex`}>
            <img src="/assets/search.svg" alt="" />
            <input className='w-full outline-none bg-transparent text-[12px] ml-1' type="text" placeholder='Search Property, Customer etc'/>
          </div>
          <div className='flex gap-4 md:hidden'>
            <Menu onClick={()=>{setShowSidebar(true), setCompress(false)}} />
            <img src="/assets/search.svg" alt="" />
          </div>
        </div>
        <div className='flex gap-4 items-center'>
          <div onClick={()=>setDark(!dark)} className={`rounded-full text-[25px] p-1 ${dark? 'bg-secondarydark' : 'bg-gray-200'}`}>{dark? <HiLightBulb /> : <MdDarkMode />}</div>
          <img src="/assets/alert.svg" alt="" />
          <div className='flex gap-2 items-center'>
            <img src="/assets/person.svg" alt="" />
            <div className='hidden sm:block'>
              <h5 className='font-bold text-[13px] '>Hawkins Maru</h5>
              <p className='text-typo'>Company Manager</p>
            </div>
          </div>
        </div>

        {/* ----------- */}
        <AnimatePresence>
        { showSidebar &&
        <motion.div 
          initial={{ x: '-350px' }}
          animate={{
            x: 0
          }}
          exit={{x: '-350px'}}
        className={`${compress? 'w-[70px]' : 'w-[350px]'}  duration-500 ease-out   h-[100vh] ${dark ? 'bg-primarydark' : 'bg-white' }  px-[10px] absolute md:hidden top-0 left-0 z-20`}>
        <MdClose className='ml-[10px] my-4 text-4xl' onClick={()=> setShowSidebar(false)} />
        <div className='flex items-center gap-2 mb-[50px] p-3'>
          <img src="/assets/abode.svg" alt="abode" />
          {/* <h1 className='font-bold text-[28px]'>{compress? '': 'Abodes'}</h1> */}
      </div>
      <Link onClick={()=> setCompress(true)} href='/'>
        <div className={`mb-2 ease-in-out duration-300 ${dark && router.pathname != '/'? 'hover:bg-secondarydark': 'hover:bg-gray-100'} h-[45px] text-[16px] pl-3 w-full flex items-center ${router.pathname === '/' ? 'bg-primary hover:bg-secondary text-white' : 'text-typo' } rounded-lg`}>
          <Dashboard className={`${compress? 'w-full': ''} mr-1`}/> 
          {compress ? '' : <span className='ml-2'>Dashboard</span>}
          </div>        
      </Link>
      <Link onClick={()=> setCompress(true)} href='/properties'>
        <div className={`mb-2 ease-in-out duration-300 ${dark && !router.pathname.startsWith('/properties')? 'hover:bg-secondarydark': 'hover:bg-gray-100'} h-[45px] pl-3 w-full flex items-center ${router.pathname.startsWith('/properties')  ? 'bg-primary hover:bg-secondary text-white' : 'text-typo' } rounded-lg`}>
          <Building className="mr-1"/> 
          {compress ? '' : <span className='ml-2'>Properties</span>}
        </div>        
      </Link>
      <Link onClick={()=> setCompress(true)} href='/agent'>
        <div className={`mb-2 ease-in-out duration-300 ${dark && router.pathname != '/agent'? 'hover:bg-secondarydark': 'hover:bg-gray-100'} h-[45px] px-3 w-full flex items-center ${router.pathname === '/agent' ? 'bg-primary hover:bg-secondary text-white' : 'text-typo' } rounded-lg`}>
          <Agent className="mr-1"/> 
          {compress ? '' : <span className='ml-2'>Agents</span>}
        </div>        
      </Link>
      
      <Link onClick={()=> setCompress(true)} href='/message'>
        <div className={`mb-2 ease-in-out duration-300 ${dark && router.pathname != '/message'? 'hover:bg-secondarydark': 'hover:bg-gray-100'} h-[45px] px-3 w-full flex items-center ${router.pathname === '/message' ? 'bg-primary hover:bg-secondary  text-white' : 'text-typo' } rounded-lg`}>
          <Message className="mr-1"/> 
          {compress ? '' : <span className='ml-2'>Message</span>}
        </div>        
      </Link>
      <Link onClick={()=> setCompress(true)} href='/profile'>
        <div className={`mb-2 ease-in-out duration-300 ${dark && router.pathname != '/profile' ? 'hover:bg-secondarydark': ''} hover:bg-gray-100 h-[45px] px-3 w-full flex items-center ${router.pathname === '/profile' ? 'bg-primary hover:bg-secondary text-white' : 'text-typo' } rounded-lg`}>
          <Profile className="mr-1"/>
          {compress ? '' : <span className='ml-2'>My Profile</span>}
        </div>        
      </Link>
      <button onClick={()=> setCompress(!compress)} className='absolute flex justify-center items-center bottom-0 left-0 w-full h-12 bg-primary hover:bg-secondary ease-in-out duration-300'>
        {compress? <MdArrowForwardIos className='text-white text-[20px]' />: <MdArrowBackIos className='text-white text-[20px]'/> }
      </button>
    </motion.div>
      }
      </AnimatePresence>
    </div>
  )
}
 
export default Header