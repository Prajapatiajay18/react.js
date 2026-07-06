
// import Image from "next/image";
import { useState } from "react";
import Card1 from "./componets/card";

function App(){
  const[count, setCount] = useState(0)
  let myObj = {
    username: "ajay",
    age : 21
  }
}

export default function Apps() {
  return (
    <div className="p-6">
    <Card1 username ="ajay" btnText = "Click me" />
    <Card1 username ="ajay"/>
    </div>
    

   
  );
}


