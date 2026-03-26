// Showing different UI based on a condition
// I can render different components or elements based on certain conditions.
// useEffect is used at the time of mounting and ignored during re-rendering and the function we return in useEffect is called at the time of unmounting
// Here I'm having a button which triggers the clock and then only the clock starts

import { useEffect, useState } from "react";


function ConditionalRendering() {
    const [counterVisible, setCounterVisible] = useState(true);
    const [start, setStart] = useState(false);

    // useEffect for flipping the value of counterVisible(true/false) after every 5 sec
    useEffect(function() {
        if (!start) return;
        const counterInterval = setInterval(function() {
            setCounterVisible(counterVisible => !counterVisible);
        }, 5000)

        return () => clearInterval(counterInterval);
    }, [start]);

    return (
        <div>
            {/* {counterVisible ? <Counter /> : null} */}
            {start && counterVisible && <Counter />}

            {/* in this component, the clock keeps on running and not stopping, and every 5 sec it changes from visible to not visible and vice verse*/}
            {/* <div style={{visibility : counterVisible ? "visible" : "hidden"}}><Counter /></div> */}
            <button onClick={() => setStart(true)}>Timer Toggle Button</button>
        </div>
    )
}

    function Counter() {

        const [count, setCount] = useState(0);
        console.log("Counter");

        // logic for mounting
        useEffect(function() {
            const interval = setInterval(function() {
                setCount((count) => count + 1)
            }, 1000);

            return () => clearInterval(interval); // clearInvterval stops the clock - logic for unmounting/Cleanup
        }, [])

        return(
            <h1>{count}</h1>
        )
    }


export default ConditionalRendering
