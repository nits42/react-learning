import { useState } from 'react'
import './App.css'
import AddTodo from './components/AddTodo'
import Todo from './components/Todo'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1 className='bg-lime-600 text-white m-4 p-3'>React Redux Toolkit Todo</h1>
      <AddTodo />
      <Todo />
    </>
  )
}

export default App
