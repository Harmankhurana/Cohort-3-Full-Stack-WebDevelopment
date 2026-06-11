// Creating a count component with context api for props passing
import React, { createContext, useState } from "react";

const CountContext = createContext();

// parent component for Increase, Decrease and Value
function Parent() {
    const [count, setCount] = useState(0);
    return (
        <div>
            <CountContext.Provider value={{count, setCount}}>
                <Increase />
                <Decrease />
                <Value />
            </CountContext.Provider>
        </div>
    )
}

// Component for Increasing the count
function Increase() {
    return (
        <div>

        </div>
    )
}

// Component for Decreasing the count
function Decrease() {
    return (
        <div>

        </div>
    )
}

function Value() {
    return (
        <div>
            
        </div>
    )
}

const CountContext = () => {
    return (
        <div>
            <Parent />
        </div>
    )
}

export default CountContext