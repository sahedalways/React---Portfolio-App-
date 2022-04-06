import React, {  useState } from 'react'

const UseEffect = () => {
const [count, setCount] = useState(0)

const handleIncrementCount = ( ) => {
setCount ((count) => count + 1)
}

const handleDecrementCount = () => {
    setCount ((count) => count - 1)
}



  return (
    <div >
        <h1>Count : {count}</h1>
        
        <button style={{marginRight: "10px"}}  onClick={handleIncrementCount}>Increment</button>
        <button onClick={handleDecrementCount}>Decrement</button>
    </div>
  )
}

export default UseEffect