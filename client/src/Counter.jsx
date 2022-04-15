import { useState } from 'react'

function Counter() {
  const [count, setCount] = useState(0)

  return (
    <>
      <button onClick={() => setCount((count) => count + 1)}>{count}</button>
    </>
  )
}

export default Counter
