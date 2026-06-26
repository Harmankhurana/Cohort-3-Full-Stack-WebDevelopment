// Creating a Counter Application using recoil for better state management
import React from "react";
import { RecoilRoot, atom, useRecoilState, useRecoilValue, useSetRecoilState } from 'recoil';
import { counterAtom } from "./store/atoms/counter";

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
    const count = useRecoilValue(counterAtom);
    return (
        <div>
            {count}
        </div>
    )
}

function Increase() {
    const setCount = useSetRecoilState(counterAtom);

    function increase() {
        setCount(c => c + 1)
    }
    return (
        <div>
            <button onClick={increase}>Increment</button>
        </div>
    )
}

function Decrease() {
    const setCount = useSetRecoilState(counterAtom);

    function decrease() {
        setCount(c => c - 1)
    }

    return (
        <div>
            <button onClick={decrease}>Decrement</button>
        </div>
    )
}

export default RecoilCounterApplication