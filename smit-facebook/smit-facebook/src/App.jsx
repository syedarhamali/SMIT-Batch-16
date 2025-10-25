import { Route, Routes } from "react-router"
import Home from "./components/views/home"
import SignIn from "./components/views/signin"
import Signup from "./components/views/signup"
import Dashboard from "./components/views/dashboard"

function App() {

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="signin" element={<SignIn />} />
      <Route path="signup" element={<Signup />} />
      <Route path="dashboard" element={<Dashboard />} />
    </Routes>
  )
}

export default App
