import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'

function App() {
  
  let [Counter, setCounter] =useState(15)

// let Counter = 0

 const addvalue =() =>{
   //  Counter = Counter + 1
   setCounter(Counter=>Counter+1)
   setCounter(Counter=>Counter+1)
   setCounter(Counter=>Counter+1)
   setCounter(Counter=>Counter+1)

   console.log("clicked",Counter)
 }

 const removevalue = () => {
  setCounter(Counter - 1)
 }

  return (
    <>
    <h1>hello</h1>
    <h2>Counter value : {Counter}</h2>
    <button onClick ={addvalue}>Add Value {Counter}</button>
    <br />
    <button onClick={removevalue}>Remove Value {Counter}</button>
    </>
  )
}

export default App
