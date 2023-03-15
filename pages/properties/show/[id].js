import { List } from '@/data/PropList'
import { useRouter } from 'next/router'
import { ScreenMode } from '@/context/context'
import React, { useContext } from 'react'
import Details from '@/components/Details'
 
const PropDetails = () => {
    const router = useRouter()
    const id = router.query.id
    const prop = List.find(x => x.id == id)
    const {dark} = useContext(ScreenMode)
  return (
    <div>
      <Details {...prop} />
    </div>
  )
}

export default PropDetails