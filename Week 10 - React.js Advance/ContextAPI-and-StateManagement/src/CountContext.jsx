// Creating a count component with context api for props passing
import React, { createContext, useContext, useState } from "react";

const CreateCountContext = createContext();

// parent component for Increase, Decrease and Value
function Parent() {
    const [count, setCount] = useState(0);
    return (
        <div>
            <CreateCountContext.Provider value={{count, setCount}}>
                <SubParent />
            </CreateCountContext.Provider>
        </div>
    )
}

function SubParent() {
    return (
        <div>
            <Increase />
            <Decrease />
            <Value />
        </div>
    )
}
// Component for Increasing the count
function Increase() {
    const {count, setCount} = useContext(CreateCountContext);
    return (
        <div>
            <button onClick={() => setCount(count + 1)}>
                Increase
            </button>
        </div>
    )
}

// Component for Decreasing the count
function Decrease() {
    const {count, setCount} = useContext(CreateCountContext);
    return (
        <div>
            <button onClick={() => setCount(count - 1)}>
                Decrease
            </button>
        </div>
    )
}

function Value() {
    const {count} = useContext(CreateCountContext);
    return (
        <div>
            Count : {count}
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