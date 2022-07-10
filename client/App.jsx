import React, { useState } from 'react'
import { Routes, Route } from 'react-router-dom'

import logo from './logo.svg'
import './App.css'

import Widgets from './pages/Widgets'
import Home from './pages/Home'

function App() {
  const [count, setCount] = useState(0)
  return (
    <div className='App'>
      <header className='App-header'>
        <img src={logo} className='App-logo' alt='logo' />
        <p>Hello Vite + React!</p>
        <p>
          <button onClick={() => setCount((count) => count + 1)}>
            count is: {count}
          </button>
        </p>

        <Routes>
          <Route path='widgets' element={<Widgets />} />
          <Route path='/' element={<Home />} />
        </Routes>
      </header>
    </div>
  )
}

export default App
