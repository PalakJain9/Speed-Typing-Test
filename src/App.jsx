import React from 'react'
import './app.css'
import Word from './Word'

function App() {
  return (
    <div className='outer-container'>
      <div className='container'>
        <div className='info'>
          <Word />
          <h3>time</h3>
        </div>
        <div className='typeArea'>
          <form>
            <input></input>
          </form>
        </div>
      </div>
    </div>
  )
}

export default App
