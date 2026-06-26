// Creating a Counter Application using recoil for better state management
import React from "react";
import { RecoilRoot } from 'recoil';

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
            
        </div>
    )
}

export default RecoilCounterApplication