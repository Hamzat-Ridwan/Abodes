import React from 'react'

const AgentRow = ({name, img}) => (
  <div className=' flex justify-between mb-4'>
        <div className='flex gap-[15px]'>
          <img src={img} alt="" />
          <div>
            <h4 className='text-[13px] font-semibold'>{name}</h4>
            <p>Top Agent</p>
          </div>
        </div>
        <img className='mr-2' src="/assets/dots.svg" alt="" />
      </div>
)

const TopAgent = () => {
  return (
    <div className='p-[20px] bg-white flex flex-col flex-1 rounded-lg'>
      <div className='flex justify-between items-center mb-[30px]'>
        <h1>Top Agent</h1>
        <button className='border border-gray-300 rounded-lg py-2 px-[20px]'>View All</button>
      </div>
      <AgentRow 
        name="Benny Chagur"
        img="/assets/agent1.svg"
      />
      <AgentRow 
        name="Chynita Heree"
        img="/assets/agent2.svg"
      />
      <AgentRow 
        name="David Yers"
        img="/assets/agent3.svg"
      />
      <AgentRow 
        name="Hayder Jahid"
        img="/assets/agent4.svg"
      />
      <AgentRow 
        name="Benny Chagur"
        img="/assets/agent1.svg"
      />
    </div>
  )
}

export default TopAgent