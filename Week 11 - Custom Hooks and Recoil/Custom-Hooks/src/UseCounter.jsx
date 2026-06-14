// Creating my own Custom Hook
import React, { useState } from "react";

// custom hook
function useCounter() {
    const [count, setCount] = useState(0);

    // a function for increasing the count
    function increaseCount() {
        setCount(count => count + 1)
    }

    // a function for decreasing the count
    function decreaseCount() {
        setCount(count => count - 1)
    }

    // returning count, increaseCount and decreaseCount - that can be used later
    return {
        count : count,
        increaseCount : increaseCount,
        decreaseCount : decreaseCount,
    }
}

// main component
function CounterComponent() {
    // calling all the props that useCounter provides
    const {count, increaseCount, decreaseCount} = useCounter();
    return (
        <div>
            <h1>Count : {count}</h1>
            <button onClick={increaseCount}>Increase Count</button>
            <button onClick={decreaseCount}>Decrease Count</button>
        </div>
    )
}

export default CounterComponent