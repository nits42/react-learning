import { useState } from 'react'
import './App.css'

function App() {
  let [counter, setCounter] = useState(0,)
  
  //let counter = 0

  const add = () => {
    counter++
    if(counter <= 20) setCounter(counter)
    console.log('Add button clicked '+counter)
  }

  const Remove = () => {
    counter--
    if(counter >= 0) setCounter(counter)
    console.log('Remove button clicked '+counter)
  }

  return (
    <>
      <h1>React Learning </h1>
      <h2>Counter value: {counter}</h2>

      <button onClick={add}>Add {counter}</button>
      <br />
      <button onClick={Remove}>Remove {counter}</button>
    </>
  )
}

export default App
