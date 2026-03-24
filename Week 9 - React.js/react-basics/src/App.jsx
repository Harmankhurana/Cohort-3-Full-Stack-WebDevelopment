// useState is a Hook that lets you add state to functional components. It returns an array with the current state and a function to update it
import { useState } from "react"

function App() {
  const [count, setCount] = useState(0);

  // function for changing the count state
  function counter() {
    setCount(count + 1);
  }

  return (
    <>
      <button onClick={counter}>Add value: {count}</button>
    </>
  )
}

export default App
