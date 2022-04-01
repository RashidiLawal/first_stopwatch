import { useState, useEffect } from 'react'
import './App.css'

function App() {
  const [isRunning, setIsRunning] = useState(false)
  const [count, setCount] = useState(0)


const start = () => {
  setIsRunning(true)
}

const stop = () => {
  setIsRunning(false)
}

const reset = () => {
  stop()
  setCount(0)
}

useEffect(() => {
  let interval = null;

  if (isRunning) {
    interval = setInterval(() => {
      setCount((count) => count + 1)
    }, 10)
  } else {
    clearInterval(interval)
  }

  return () => {
    clearInterval(interval)
  }
}, [isRunning])


const twoDigits = (num) => {
  return String(num).padStart(2, '0')
  // return num.length ===1 ? `0${num}` : num
}


const ms = twoDigits(Math.floor(count % 99))
const sec = twoDigits(Math.floor((count / 100) % 60))
const min = twoDigits(Math.floor((count /100 /60) % 60))
const hr = twoDigits(Math.floor((count /100 / 60/ 60) % 60))


  return (
    <div>
      <h1>
        {hr}h:{min}m:{sec}s {ms}
      </h1>
      {isRunning ? ( <button onClick={stop}>Pause</button> ) : 
      ( <button onClick={start}>{count > 0 ? 'continue' : 'Start'}</button> )}
      <button onClick={reset}>reset</button>
    </div>
  )
}

export default App
