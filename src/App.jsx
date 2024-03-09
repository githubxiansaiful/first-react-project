import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  function handleClick(){
    alert("This is first react click");
  }

  return (
    <>
      <h3>First React Project- Practice</h3>
      <button onClick={handleClick}>Click Here</button>
    </>
  )
}

export default App
