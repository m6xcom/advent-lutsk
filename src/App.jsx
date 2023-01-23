import { useState } from 'react'
import sim23Logo from './assets/sim23.png'
import reactLogo from './assets/react.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <div>
        <a href="https://reactjs.org" target="_blank">
          <img src={sim23Logo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Макс Цекут - працівник року</h1>
    </div>
  )
}

export default App
