import React from 'react'
import App from './App'
import { render, screen } from '@testing-library/react'
import { MemoryRouter as Router } from 'react-router-dom'

describe('<App />', () => {
  it('renders Widgets text', () => {
    render(
      <Router>
        <App />
      </Router>
    )

    expect(screen.getByText(/Widgets/i)).toBeInTheDocument()
  })
})
