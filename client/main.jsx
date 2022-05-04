import React from 'react'
import { render } from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
// import { Provider } from 'react-redux'
import { ChakraProvider } from '@chakra-ui/react'

// import store from './store'
import App from './App'

import './globals.css'

document.addEventListener('DOMContentLoaded', () => {
  render(
    <React.StrictMode>
      <ChakraProvider>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </ChakraProvider>
    </React.StrictMode>,
    document.getElementById('root')
  )
})
