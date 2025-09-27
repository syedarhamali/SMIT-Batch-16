//  component 

import Signin from "./components/views/signin"

function App() { 
  return (
    // JavaScript XML 
    <div>
        My name is React 123
        <Signin text="Hello React" />
        {/* signin("text") */}
        {/* properties (passing data to component) (props) (read-only value) */}
        <Signin text="My new react value" number="0" />
        <Signin text="Arham"/>
        <Signin />
    </div>
    
  )
}

export default App
