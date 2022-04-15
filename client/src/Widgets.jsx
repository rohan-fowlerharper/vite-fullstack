import { useState, useEffect } from 'react'
import request from 'superagent'

function Widgets() {
  const [widgets, setWidgets] = useState([])

  useEffect(() => {
    request.get('/api/widgets/').then((response) => {
      setWidgets(response.body.widgets)
    })
  }, [])

  return (
    <div>
      {widgets.map((widget) => {
        return <p key={widget.id}>{widget.name}</p>
      })}
    </div>
  )
}

export default Widgets
