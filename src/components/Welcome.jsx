import React from 'react'

const Welcome = ({nombre, apellido}) => {
  return (
    <div>
        <h1>Hola {nombre} {apellido}</h1>
    </div>
  )
}

export default Welcome