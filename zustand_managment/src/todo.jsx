import React from 'react'
import useUsers from '../zustand/userContext'

const todo = () => {

    const users = useUsers((state)=>state.users)
    console.log(users)
    
  return (
    <div>todo</div>
  )
}

export default todo