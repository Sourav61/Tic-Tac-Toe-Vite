import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0);

  // function updateState() {
  //   if(count % 2 == 0){

  //   }
  // }

  return (
    <div className="App">
      <div className='parentContainer'>
        <div className='container'>
          <div className="box" onClick={() => updateState()}>
            <h1 className='marker'>X</h1>
          </div>
          <div className="box" onClick={() => updateState()}></div>
          <div className="box" onClick={() => updateState()}></div>
        </div>
        <div className='container'>
          <div className="box" onClick={() => updateState()}></div>
          <div className="box" onClick={() => updateState()}></div>
          <div className="box" onClick={() => updateState()}></div>
        </div>
        <div className='container'>
          <div className="box" onClick={() => updateState()}></div>
          <div className="box" onClick={() => updateState()}></div>
          <div className="box" onClick={() => updateState()}></div>
        </div>
      </div>
    </div>
  )
}

export default App
