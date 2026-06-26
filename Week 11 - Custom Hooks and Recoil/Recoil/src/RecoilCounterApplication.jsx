// Creating a Counter Application using recoil for better state management
import React from "react";
import { RecoilRoot, atom } from 'recoil';
import { CounterAtom } from "./store/atoms/counter";

function RecoilCounterApplication() {
    return (
        <div>
            <RecoilRoot>
                <Counter />
            </RecoilRoot>
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

export default RecoilCounterApplication