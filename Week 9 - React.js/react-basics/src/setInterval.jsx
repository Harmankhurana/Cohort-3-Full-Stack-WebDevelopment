import { useEffect, useState } from "react"


function SetInterval () {

    return (
        <div>
             <Counter />           
        </div>

    )
}

    // Mounting, Re-rendering, Unmounting
    function Counter() {
        const [count, setCount] = useState(0);

        // hooking into the lifecycle event of react
        console.log("counter");

        // gaurd our setInterval from re-renders
        useEffect(function() {
            setInterval(function() {
                setCount(function(count) {
                    return count + 1;
                })
            }, 1000)
            console.log("Mounted")
        }, []);

/* 
        useEffect(() => {
        console.log("Mounted");

        const interval = setInterval(() => {
            setCount((count) => count + 1);
        }, 1000);

        // ✅ CLEANUP (VERY IMPORTANT)
        return () => {
            clearInterval(interval);
            console.log("Unmounted");
        };
    }, []);
*/

    return (
        <div>
            <h1>{count}</h1>
        </div>
    )
}



export default SetInterval