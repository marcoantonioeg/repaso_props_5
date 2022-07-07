import React from 'react'
import Welcome from './components/Welcome'

const App = () => {
    const datos={
        nombre: 'Gabriela',
        apellido: 'Guadarrama',
    }
  return (
    <div>
        <Welcome nombre="Marco" apellido="Estrello"/>
        <Welcome {...datos}/>
    </div>
  )
}

export default App