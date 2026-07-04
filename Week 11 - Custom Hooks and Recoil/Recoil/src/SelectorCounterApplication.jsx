import React from "react";
import { RecoilRoot, selector, useRecoilValue, useSetRecoilState } from "recoil";
import { counterAtom } from "./store/atoms/counter";
import { evenSelector } from "./store/selectors/selector";

function SelectorCounterApplication() {
    return (
        <div>
            <RecoilRoot>
                <Buttons />
                <Counter />
                <IsEven />
            </RecoilRoot>
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

function Counter() {
    const count = useRecoilValue(counterAtom);
    return (
        <div>
            <h1>Count : {count}</h1>
        </div>
    )
}

function IsEven() {
    const even = useRecoilValue(evenSelector);
    return (
        <div>
            {even ? "Even" : "Odd"}
        </div>
    )
}

export default SelectorCounterApplication