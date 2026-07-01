import React from "react";
import { useSetRecoilState } from "recoil";
import { counterAtom } from "./store/atoms/counter";

function SelectorCounterApplication() {
    return (
        <div>
            <Buttons />
            <Counter />
            <isEven />
        </div>
    )
}

function Buttons() {
    const setCount = useSetRecoilState(counterAtom);

    function increase() {
        setCount(prev => prev + 2);
    }
    
    function decrease() {
        setCount(prev => prev - 1);
    }

    return (
        <div>
            <button onClick={increase}>Increment</button>
            <button onClick={decrease}>Decrement</button>
        </div>
    )
}

function isEven() {
    return (
        <div>

        </div>
    )
}

function isOdd() {
    return (
        <div>

        </div>
    )
}

export default SelectorCounterApplication