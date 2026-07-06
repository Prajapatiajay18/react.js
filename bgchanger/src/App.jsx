import { useState } from "react";

function App() {
  const [color, setColor] = useState("olive")

  return (
    <div
  className="w-full h-screen duration-200"
  style={{ backgroundColor: color }}
>
  <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
    <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-3 rounded-xl">

      <button onClick = {() => setColor("red")} className="outline-none px-4 py-1 rounded-full text-white"
       style={{ backgroundColor: "red" }}>Red</button>

      <button onClick = {() => setColor("pink")} className="outline-none px-4 py-1 rounded-full text-black"
       style={{ backgroundColor: "pink" }}>Pink</button>

      <button onClick = {() => setColor("Blue")} className="outline-none px-4 py-1 rounded-full text-white"
       style={{ backgroundColor: "blue" }}>Blue</button>

      <button onClick = {() => setColor("Green")} className="outline-none px-4 py-1 rounded-full text-white"
       style={{ backgroundColor: "green" }}>Green</button>

      <button onClick = {() => setColor("gray")} className="outline-none px-4 py-1 rounded-full text-white"
       style={{ backgroundColor: "gray" }}>gray</button>

      <button onClick = {() => setColor("black")} className="outline-none px-4 py-1 rounded-full text-white"
       style={{ backgroundColor: "black" }}>black</button>
       
       <button onClick = {() => setColor("purple")} className="outline-none px-4 py-1 rounded-full text-white"
       style={{ backgroundColor: "purple" }}>purple</button>
       
       <button onClick = {() => setColor("white")} className="outline-none px-4 py-1 rounded-full text-black border-2"
       style={{ backgroundColor: "white" }}>white</button>
    </div>
      </div>
</div>
  )
}

export default App
