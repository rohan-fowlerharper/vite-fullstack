import React from 'react'

function Widget({ widget }) {
  return (
    <>
      <h2>{widget.name}</h2>
      <p>{widget.mfg}</p>
    </>
  )
}

export default Widget
