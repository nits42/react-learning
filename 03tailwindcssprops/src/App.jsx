import { useState } from 'react'
import './App.css'
import Card from './components/Card'

function App() {
  const [count, setCount] = useState(0)
  let arr = [1, 2, 3, 4, 5]
  let obj = { name: 'John', age: 25 }

  return (
    <>
      <h1 className='text-3xl bg-green-400 p-4 rounded-xl mb-4'>Tailwind Test</h1>
      <Card name="Alysa" btnTxt="View Profile" 
        image="https://images.unsplash.com/photo-1546961329-78bef0414d7c?ixlib=rb-4.0.3&amp;ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fHVzZXJ8ZW58MHx8MHx8&amp;auto=format&amp;fit=crop&amp;w=800&amp;q=60"obj={obj}/>
      <Card name="MacBook" arr={arr} btnTxt= "Buy Now"
          image="https://images.unsplash.com/photo-1522199755839-a2bacb67c546?ixlib=rb-4.0.3&amp;ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fGJsb2d8ZW58MHx8MHx8&amp;auto=format&amp;fit=crop&amp;w=800&amp;q=60" />

    </>
  )
}

export default App
