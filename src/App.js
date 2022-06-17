import React from 'react'
import { useState } from 'react'
import { ten, addTen } from './utils/utils'

function App(){
    let [ counter, setCounter ] = useState(1)
    const [user, setUser] = useState(null)
    const [username, setUsername] = useState('')

    const handleChange = (e) => {
      setUsername(e.target.value)
    }
    return (
      <div>
        <h1>{counter}</h1>
        <h2>{ten}</h2>
        <h3>{addTen(15)}</h3>
        <h4>{counter}</h4>
      </div>
    )
}

export default App;

