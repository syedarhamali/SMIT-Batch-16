import { useState } from "react"
import EyeIcon from "./components/svgs/eye-icon"
import EyeSlashIcon from "./components/svgs/slash-eye-icon"
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "./config/firebase";

function App() {
  const [userData, setUserData] = useState({
    fullName: '',
    email: '',
    password: ''
  })
  const [showPassword, setShowPassword] = useState(false)

  const handleShowPassword = () => {
    setShowPassword(!showPassword)
  }

  const submitForm = () => {
    createUserWithEmailAndPassword(auth, userData.email, userData.password)
      .then((userCredential) => {
        // Signed up 
        const user = userCredential.user;
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        // ..
      });
  }



  console.log(userData)
  return (
    <div className="bg-blue-600 h-screen">
      <h1 className="text-4xl text-center py-4">Facebook</h1>

      <div className="bg-white h-[600px] space-y-2 max-w-max mx-auto p-4 rounded-[5px]">
        <div className="flex justify-between w-full">
          <label htmlFor="email">Full Name</label>
          <input type="text" onChange={(event) => setUserData({ ...userData, fullName: event.target.value })} value={userData.fullName} id="fullName" className="border border-black" />
        </div>
        <div className="flex justify-between w-full">
          <label htmlFor="email">Email</label>
          <input type="email" id="email" onChange={(event) => setUserData({ ...userData, email: event.target.value })} value={userData.email} className="border border-black" />
        </div>
        <div className="flex gap-6">
          <label htmlFor="password">password</label>
          <input value={userData.password} type={showPassword ? "text" : "password"} onChange={(event) => setUserData({ ...userData, password: event.target.value })} id="password" className="border border-black" />
          <span onClick={handleShowPassword}>{showPassword ? <EyeSlashIcon /> : <EyeIcon />}</span>
        </div>
        <button onClick={submitForm} className="border border-black bg-green-400 rounded-sm px-4">Sign up</button>
      </div>
    </div>
  )
}

export default App
