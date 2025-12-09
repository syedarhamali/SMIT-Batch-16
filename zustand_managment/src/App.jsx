import { useRef, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import useUsers from '../zustand/userContext'
import useAuth from '../zustand/authContext'
import useTheme from '../zustand/themeContext'

function App() {
  let userNameInput = useRef(null);
  const {users, addNewUser, removeAllUsers, filterUser} = useUsers();
  const { deleteAuth} = useAuth()
  const { theme,changeTheme} = useTheme()
  // const addNewUser = useUsers((state) => state.addNewUser);
  console.log(users)
  console.log(theme)
  /// onAuthstatechange
  // if(!auth.user) deleteAuth()
  // else setAuth(auth.user)
  return (
    <>
    <button
    onClick={()=>changeTheme() }
    >change theme</button>
      <h2>Zustand</h2>
      <div>
        <input ref={userNameInput} type="text" placeholder='enter user name' />
        <button
          onClick={() => {
            addNewUser(userNameInput?.current?.value)
          }}
        >add</button>
        <button
          onClick={() => {
            removeAllUsers()
          }}
        >remove all users</button>
        <button
          onClick={() => {
            filterUser(2)
          }}
        >find user</button>
      </div>





    </>
  )
}

export default App
