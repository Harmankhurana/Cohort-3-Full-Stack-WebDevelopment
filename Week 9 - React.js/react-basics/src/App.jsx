// useState is a Hook that lets you add state to functional components. It returns an array with the current state and a function to update it
import { useState } from "react"

function App() {
  const [count, setCount] = useState(0);

  // function for changing the count state - increment function
  function increment() {
    setCount(count + 1);
  }

  // function for changing the count state - decrement function
  function decrement() {
    setCount(count - 1);
  }

  // function for changing the count state - reset function
  function reset() {
    setCount(0);
  }

  return (
    <>
      <div>{count}</div>
      <button onClick={increment}>Increment value</button>
      <button onClick={decrement}>Decrement value</button>
      <button onClick={reset}>Reset value</button>
    </>
  )
}

export default App
