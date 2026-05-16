// Creating a clock with a start and stop functionality
import React from "react";
import { useState, useRef } from "react";

function Clock() {
    const [currentCount, setCurrentCount] = useState(0);
    // let timer = 0; -> not using this cause after every re-render the timer becomes 0
    // const [timer, setTimer] = useState(0); - > Even though useState persists values, using it for something like an interval ID is not ideal
    const timer = useRef(null);

    // function for starting the clock
    function startClock() {
        if (timer.current) return;

        timer.current = setInterval(() => {
            setCurrentCount(currentCount => currentCount + 1);
        }, 1000);
    }

    // function for stopping the clock
    function stopClock() {
        clearInterval(timer.current);
        timer.current = null;
    }

    // function to clear the clock
    function clearClock() {
        stopClock();
        setCurrentCount(0);
    }

    return (
        <div>
            {currentCount}
            <br />
            <button onClick = {startClock} style={{cursor: 'pointer'}}>Start</button>
            <button onClick = {stopClock} style={{cursor: 'pointer'}}>Stop</button>
            <button onClick = {clearClock} style={{cursor: 'pointer'}}>Clear</button>
        </div>
    )
}

export default Clock