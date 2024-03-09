import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Team from './Team'

function App() {

  // Regular function
  function handleClick(){
    alert("This is first react click- from first button");
  }

  // Array function
  const handleClickTwo = () => {
    alert("This is button two");
  } 


  return (
    <>
      <Team></Team>
      <h3>First React Project- Practice</h3>
      <button onClick={handleClick}>Click Here</button>
      <button onClick={handleClickTwo}>Click Here 2</button>
    </>
  )
}

export default App
