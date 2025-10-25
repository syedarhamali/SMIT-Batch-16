import { useState } from 'react'
import './App.css'
import ChildComponent from './component/child'

function App() {
  const [theme, setTheme] = useState("dark")
  return (
    <>
    <button onClick={() => setTheme('light')}>Click to change Theme</button>
    <ChildComponent theme={theme} />
    </>
  )
}

export default App
