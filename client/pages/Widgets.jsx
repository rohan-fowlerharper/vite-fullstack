import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import request from 'superagent'

import Widget from '../components/Widget'

function Widgets() {
  const [widgets, setWidgets] = useState([])
  const [error, setError] = useState(false)

  useEffect(() => {
    request
      .get('/api/widgets')
      .then((res) => {
        console.log(res.body)
        setWidgets(res.body.widgets)
        setError(false)
      })
      .catch(() => {
        setError(true)
      })
  }, [])

  return (
    <div>
      <Link className='App-link' to='/'>
        Go back home
      </Link>
      <h1>Widgets</h1>
      {error && <p>Error loading widgets</p>}
      {widgets.map((widget) => (
        <div key={widget.id}>
          <Widget widget={widget} />
        </div>
      ))}
    </div>
  )
}

export default Widgets
