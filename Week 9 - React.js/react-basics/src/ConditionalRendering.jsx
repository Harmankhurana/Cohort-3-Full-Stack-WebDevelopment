// Showing different UI based on a condition
// I can render different components or elements based on certain conditions.

import { useEffect, useState } from "react";


function ConditionalRendering() {
    const [counterVisible, setCounterVisible] = useState(true);

    // useEffect for flipping the value of counterVisible(true/false) after every 5 sec
    useEffect(function() {
        const counterInterval = setInterval(function() {
            setCounterVisible(counterVisible => !counterVisible);
        }, 5000)

        return () => clearInterval(counterInterval);
    }, []);

    return (
        <div>
            {/* {counterVisible ? <Counter /> : null}  */}
            {counterVisible && <Counter />}
        </div>
    )
}

    function Counter() {

        const [count, setCount] = useState(0);
        console.log("Counter");

        useEffect(function() {
            const interval = setInterval(function() {
                setCount((count) => count + 1)
            }, 1000);

            return () => clearInterval(interval);
        }, [])

        return(
            <h1>{count}</h1>
        )
    }


export default ConditionalRendering
