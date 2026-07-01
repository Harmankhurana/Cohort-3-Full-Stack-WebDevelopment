import React from "react";

function MemoCounterApplication() {
    return (
        <div>
            <Counter />
        </div>
    )
}

function Counter() {
    return (
        <div>
            <CurrentCount />
            <Increase />
            <Decrease />
        </div>
    )
}

function CurrentCount() {
    return (
        <div>
            
        </div>
    )
}

function Increase() {
    return (
        <div>
            <button>Increment</button>
        </div>
    )
}

function Decrease() {
    return (
        <div>
            <button>Decrement</button>
        </div>
    )  
}

export default MemoCounterApplication