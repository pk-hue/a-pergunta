import { useEffect, useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState("")
  useEffect(()=>{
    console.log('está indo')
  }, [count])

  return (
    <>
      <div className="card">
        <h1>VOCÊ É GAY?</h1>
        <button className='btn-1'>Sim</button>
        <button className='btn-2' onClick={() => setCount(prevCount => prevCount + "PARABÊN🎉")}>
          <span className='titulo'>Não</span>
        </button>
        <p>{count}</p>
      </div>
    </>
  )
}

export default App
