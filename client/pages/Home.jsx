import React from 'react'
import { Link } from 'react-router-dom'

export default function Home() {
  return (
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
  )
}
