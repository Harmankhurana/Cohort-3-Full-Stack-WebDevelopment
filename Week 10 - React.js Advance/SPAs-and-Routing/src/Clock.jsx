// Creating a clock with a start and stop functionality
import React from "react";
import { useState } from "react";

function Clock() {
    const [currentCount, setCurrentCount] = useState(0);
    const [timer, setTimer] = useState(0);

    // function for starting the clock
    function startClock() {
        let value = setInterval(() => {
            setCurrentCount(currentCount => currentCount + 1);
        }, 1000);
        setTimer(value);
    }

    function stopClock() {
        console.log(timerCount);
        clearInterval(timerCount);
    }

    return (
        <div>
            {currentCount}
            <br />
            <button onClick = {startClock} style={{cursor: 'pointer'}}>Start</button>
            <button onClick  = {stopClock} style={{cursor: 'pointer'}}>Stop</button>
            <button style={{cursor: 'pointer'}}>Clear</button>
        </div>
    )
}

export default Clock