// Making a easy useEffect setInterval component
import React from "react";
import { useState, useEffect } from "react";

function Counter() {
    const [count, setCount] = useState(1);

    function increaseCount() {
        setCount(function(currentValue) {
            return currentValue + 1;
        });
    };

    useEffect(() => {
        const interval = setInterval(increaseCount, 1000);

        return () =>{
            clearInterval(interval);
        }
    },[]);

    return(
        <div>{count}</div>
    )
}

export default Counter