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
            <MemoizedCurrentCount count = {count}/>
            <MemoziedIncrease setCount = {setCount}/>
            <MemoziedDecrease setCount = {setCount}/>
        </div>
    )
}


const MemoizedCurrentCount = memo(CurrentCount);

function CurrentCount({count}) {
    // Only CurrentCount re-renders
    console.log("Rendering CurrentCount");
    return (
        <div>
            <h1>Count : {count}</h1>
        </div>
    )
}

// or pass the function in a memo (memo is a function which accepts function as an input)
// const MemoizedCurrentCount = memo(function () {
//     return (
//         <div>
            
//         </div>
//     )
// });

const MemoziedIncrease = memo(function Increase({setCount}) {
    // cause the Increase function is not re-rendering (Rendering Increase will not log)
    console.log("Rendering Increase");
    function increase() {
        setCount(prev => prev + 1);
    }

    return (
        <div>
            <button onClick={increase}>Increment</button>
        </div>
    )
});

const MemoziedDecrease = memo(function Decrease({setCount}) {
    // cause the Decrease function is not re-rendering (Rendering Decrease will not log)
    console.log("Rendering Decrease");
    function decrease() {
        setCount(prev => prev - 1);
    }

    return (
        <div>
            <button onClick={decrease}>Decrement</button>
        </div>
    )  
});

export default MemoCounterApplication