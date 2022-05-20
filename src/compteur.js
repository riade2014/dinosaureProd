import React, {useState} from "react"
function Compteur(){
    const [count, increment]= useIncrement(0)
    return <button onClick={increment}>Incrementer : {count}</button>
}

function useIncrement(initial=0,step=1){
    const[count , setCount] =useState(initial)
    const increment= function increment(){
      setCount(c=>c+1)
    }
  
    return [
      count,
      increment
    ]
  }
export default Compteur;