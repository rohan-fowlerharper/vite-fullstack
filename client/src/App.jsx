import { useState } from 'react'
import { Link, Routes, Route } from 'react-router-dom'

import './App.css'

import Fetch from './Fetch'
import Counter from './Counter'
import Widgets from './Widgets'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='App'>
      <nav>
        <ul>
          <li>
            <Link to='/'>Home</Link>
          </li>
          <li>
            <Link to='/counter'>Counter</Link>
          </li>
          <li>
            <Link to='/widgets'>Widgets</Link>
          </li>
        </ul>
      </nav>
      <Routes>
        <Route path='/' element={<Fetch />} />
        <Route path='/counter' element={<Counter />} />
        <Route path='/widgets' element={<Widgets />} />
      </Routes>
    </div>
  )
}

export default App
