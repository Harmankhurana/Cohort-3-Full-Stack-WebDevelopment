import React, { memo, useState } from "react";

function MemoCounterApplication() {
    return (
        <div>
            <Counter />
        </div>
    )
}

function Counter() {
    // defining the count state variable here
    const [count, setCount] = useState(0);
    return (
        <div>
            <MemoizedCurrentCount />
            <Increase />
            <Decrease />
        </div>
    )
}


const MemoizedCurrentCount = memo(CurrentCount);

function CurrentCount() {
    return (
        <div>
            
        </div>
    )
}

// or pass the function in a memo (memo is a function which accepts function as an input)
// const MemoizedCurrentCount = memo(function CurrentCount() {
//     return (
//         <div>
            
//         </div>
//     )
// });

function Increase() {
    function increase() {

    }

    return (
        <div>
            <button onClick={increase}>Increment</button>
        </div>
    )
}

function Decrease() {
    function decrease() {

    }

    return (
        <div>
            <button onClick={decrease}>Decrement</button>
        </div>
    )  
}

export default MemoCounterApplication