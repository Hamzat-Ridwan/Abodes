import { useRouter } from 'next/router'
import React, { useEffect,useNavigate } from 'react'
import Home from '.'
// import { useNavigate } from 'react-router-dom'


const review = () => {
  // const router = useRouter()
  // useEffect(()=>(
  //   router.push('/')
  // ), [])
  return (
    <div>
      <Home />
    </div>
  )
}

export default review