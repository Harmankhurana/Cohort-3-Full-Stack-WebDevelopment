// Creating a count component with context api for props passing
import React, { useState } from "react";

// parent component for Increase, Decrease and Value
function CountContext() {
    const [count, setCount] = useState(0);
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

}

// Component for Decreasing the count
function Decrease() {

}

function Value() {

}

export default CountContext