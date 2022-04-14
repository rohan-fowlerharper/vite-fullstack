import { useEffect, useState } from 'react'
import request from 'superagent'

function Fetch() {
  const [response, setResponse] = useState('')

  useEffect(() => {
    request
      .get('/api')
      .then((response) => {
        setResponse(response.body)
      })
      .catch(console.error)
  }, [])

  return <div>{response.message}</div>
}

export default Fetch
