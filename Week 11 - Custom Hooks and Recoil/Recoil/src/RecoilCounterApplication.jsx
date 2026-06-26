// Creating a Counter Application using recoil for better state management
import React from "react";
import { RecoilRoot, atom, useRecoilState, useRecoilValue, useSetRecoilState } from 'recoil';
import { counterAtom } from "./store/atoms/counter";

// Counter app using Recoil for global state management
// RecoilRoot provides a shared state container for all child components
// RecoilRoot wraps the app to provide access to Recoil state
function RecoilCounterApplication() {
    return (
        <div>
            <RecoilRoot>
                <Counter />
            </RecoilRoot>
        </div>
    )
}

// Main component that groups all counter-related UI elements
function Counter() {
    return (
        <div>
            <CurrentCount />
            <Increase />
            <Decrease />
        </div>
    )
}

// This component reads the current value of the counter atom
// useRecoilValue subscribes to the atom and re-renders only when its value changes
function CurrentCount() {
    const count = useRecoilValue(counterAtom);
    return (
        <div>
            {count}
        </div>
    )
}


// This component updates (increments) the counter value
// useSetRecoilState provides a setter function without subscribing to state changes
function Increase() {
    const setCount = useSetRecoilState(counterAtom);

    function increase() {
        // Functional update ensures we always get the latest state value
        setCount(c => c + 1)
    }
    return (
        <div>
            <button onClick={increase}>Increment</button>
        </div>
    )
}

// This component updates (decrements) the counter value
// Similar to Increase, but decreases the value instead
function Decrease() {
    const setCount = useSetRecoilState(counterAtom);

    function decrease() {
        // Functional update ensures we always get the latest state value
        setCount(c => c - 1)
    }

    return (
        <div>
            <button onClick={decrease}>Decrement</button>
        </div>
    )
}

export default RecoilCounterApplication