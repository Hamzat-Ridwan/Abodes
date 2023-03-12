import { List } from '@/data/PropList'
import {RiMessage2Fill} from 'react-icons/ri'
import {MdCall} from 'react-icons/md'
import { useRouter } from 'next/router'
import React from 'react'

const PropDetails = () => {
    const router = useRouter()
    const id = router.query.id
    const prop = List.find(x => x.id == id)
  return (
    <div className='p-[20px] w-full bg-white rounded-lg'>
      <h1 className='mb-[20px] text-2xl'>Details</h1>
      <div className='sm:flex gap-[30px] w-full'>
        <div className='w-full sm:w-[64%]'>
          <img className='w-full'  src={prop.img} alt="img" />
          <div className='flex justify-between mt-[30px]'>
            <div className='mb-[40px]'>
              <h2 className='mb-2 text-[20px]'>{prop.title}</h2>
              <p className='flex gap-2 text-base'><img src="/assets/location.svg" alt="" /> {prop.location}</p>
            </div>
            <div>
              <h3 className='text-[20px]'>Price</h3>
              <h2 className='text-primary text-xl font-semibold'>${prop.price}</h2>
            </div>
          </div>
          <div>
            <h2 className=' text-2xl font-semibold'>Description</h2>
            <p className='text-base'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quae similique animi quasi cupiditate rem aliquid odio sunt, placeat laudantium possimus consequatur! Ab iste, asperiores magni perspiciatis exercitationem dicta nulla similique!
            <br /> <br />
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis qui libero saepe voluptatibus ab sequi eligendi quo modi iusto, nesciunt quae, quam, assumenda illum similique fugit placeat quibusdam laborum sapiente.
            </p>
          </div>
        </div>
        <div className='flex-1'>
          <div className='p-[20px] border border-gray-300 rounded-xl w-full'>
            <div className='w-full text-center my-6 '>
              <img className='mx-auto mb-4 h-14' src="/assets/abode.svg" alt="img" />
              <h2 className='mb-3 text-[20px] font-semibold'>Abodes Properties</h2>
              <p className='text-[16px] mb-3'>Agent</p>
              {/* <p className='flex gap-2 justify-center mb-3 text-[16px]'><img src="/assets/location.svg" alt="" /> Agbado Estate</p> */}
            </div>
            <div className='flex w-full justify-between gap-[15px]'>
              <button className='bg-primary justify-center w-[50%] ease-in-out text-lg hover:bg-secondary text-white items-center gap-1 flex rounded-lg px-[20px] py-2'><RiMessage2Fill/> Message</button>
              <button className='bg-green-500 w-[50%] ease-in-out duration-300 justify-center text-lg hover:bg-green-400 text-white items-center gap-1 flex rounded-lg px-[20px] py-2'><MdCall/> Call</button>
            </div>
          </div>
          <div className='w-full mt-[20px]'>
            <img className='w-full mb-[15px]' src="/assets/map.png" alt="img" />
            <button className='w-full bg-primary rounded-lg text-white py-3'>Book Now</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default PropDetails