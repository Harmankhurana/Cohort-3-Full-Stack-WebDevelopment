// Showing different UI based on a condition
// I can render different components or elements based on certain conditions.

import { useEffect, useState } from "react";


function ConditionalRendering() {
    let counterVisible = true;

    return (
        <div>
            {counterVisible ? <Counter></Counter> : null}
        </div>
    )

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
}

export default ConditionalRendering
