import React, { useState } from 'react'
import { Link, Routes, Route } from 'react-router-dom'
import { Button, useToast } from '@chakra-ui/react'

import logo from './logo.svg'
import './App.css'

import Widgets from './pages/Widgets'

function App() {
  const [count, setCount] = useState(0)
  const toast = useToast()
  return (
    <div className='App'>
      <header className='App-header'>
        <img src={logo} className='App-logo' alt='logo' />
        <p>Hello Vite + React!</p>
        <p>
          <Button onClick={() => setCount((count) => count + 1)}>
            count is: {count}
          </Button>
          {' | '}
          <Button
            onClick={() =>
              toast({
                title: 'Toasted!',
                description: 'hot bread',
                status: 'success',
                duration: 3000,
                isClosable: true,
              })
            }
          >
            Toast
          </Button>
        </p>

        <Routes>
          <Route path='widgets' element={<Widgets />} />
          <Route
            path='/'
            element={
              <>
                <Link className='App-link' to='widgets'>
                  Fetch me some Widgets
                </Link>
                <p>
                  Edit <code>App.jsx</code> and save to test HMR updates.
                </p>
                <p>
                  <a
                    className='App-link'
                    href='https://reactjs.org'
                    target='_blank'
                    rel='noopener noreferrer'
                  >
                    Learn React
                  </a>
                  {' | '}
                  <a
                    className='App-link'
                    href='https://vitejs.dev/guide/features.html'
                    target='_blank'
                    rel='noopener noreferrer'
                  >
                    Vite Docs
                  </a>
                </p>
              </>
            }
          />
        </Routes>
      </header>
    </div>
  )
}

export default App
